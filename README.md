# React Practice: Card List

## 💻 [데모](https://peaceful-lewin-9b6f70.netlify.com/)

## 🌈 실행 방법

```bash
1. yarn

2. yarn create:data   # dummy data json파일로 생성

3. yarn start
```

## 🌈 구조

파일의 구조는 다음과 같이 구성되어 있습니다.

```bash
├── actions
|
├── components
|    ├── Card
|    ├── GlobalStyle
|    ├── OptionList
|    ├── TabList
|    └── Wish
|
├── containers
|    └── Products
|         ├── Header
|         └── Main
|
├── data # 더미 데이터 json 파일
|
├── hooks
|
├── pages
|    └── Products
|
├── store
|    └── Product
|         ├── index.js
|         └── reducer.js
|
├── utils
|
├── App.js
|
└── index.js
```

<br>

### ❓ UI 구조

UI구현에 있어서 규칙을 정하여 일관성을 확보하고자 했습니다.
역할을 분리함으로써 하나의 파일이 비대해지는 현상을 방지하고 코딩방식에 규칙을 부여할 수 있을 것이라고 생각했습니다.
하나의 페이지에서 담당하는 역할을 `Page`, `Container`, `Component`로 구분 하고 각각 다음과 같은 의미를 가지도록 했습니다.

#### 📌 Page

말그대로 웹 애플리케이션에서 하나의 페이지를 의미합니다.
페이지에서 전체적인 UI의 구조를 포함하고자 했습니다.
여러 개의 Container나 Component를 조합해서 Page를 구성합니다.

#### 📌 Container

Page를 구성하는 조각입니다.
여러 개의 Container나 Component를 조합해서 Container를 구성할 수 있습니다.

#### 📌 Component

UI를 구성하는 가장 작은 단위입니다.
여러 개의 Component를 조합해서 Component를 구성할 수 있습니다.

<br>

### ❓ 상태관리

상태관리 또한 UI 구현에 생각했던 것과 마찬가지로 역할을 나누고자 했습니다.
react의 contextAPI와 hooks를 사용하여 구현하였고 크게 `action`, `store`, `reducer`, `dispatch`가 상태관리 역할을 분담하도록 했습니다.

#### 📌 Store

```js
import Reducer from './reducer';

const Context = createContext();

const initialValue = {}; // 해당 state에서 관리할

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialValue);

    return (
        <Context.Provider value={{ state, dispatchProduct }}>
            {children}
        </Context.Provider>
    );
};
```

`store`는 위와 같은 구조로 구성되어 있습니다.
하위 컴포넌트에서 state에 접근할 수 있도록 context를 제공합니다.
`store`에서 관리하는 state에 대한 조작을 정의한 `reducer`를 통해 생성된 `dispatch`도 context를 통해 제공됩니다.

#### 📌 Reducer

```js
const firstFunction = () => { ... }
const secondFunction = () => { ... }

const Reducer = (state, { type, payload }) => {
    const reducers = {
        [Actions.firstFunction]: firstFunction,
        [Actions.secondFunction]: secondFunction,
    };

    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
};
```

`reducer`는 `dispatch` 함수에서 인자로 넘겨준 `action`에 따라 다른 동작을 수행합니다.
`action`의 type에 따라 다른 함수가 실행되고 이에 따라 state가 업데이트 됩니다.

#### 📌 Action

```js
const firstAction = 'firstAction';

const firstActionCreator = payload => {
    return { type: firstAction, payload };
};
```

`dispatch` 함수에서 사용될 `action`은 `ActionCreator`를 통해 생성하도록 했습니다.

#### 📌 Dispatch

```js
const firstAction = firstActionCreator(payload);
dispatch(firstAction);
```

상태를 변경해야 될 때 `dispatch` 함수를 호출함으로써 이를 수행합니다.
이를 통해 전체적인 상태가 업데이트 되고 상태를 사용하고 있던 하위 컴포넌트에서는 이 변화를 감지하여 변경되었다면 리렌더링 되는 절차를 수행합니다.

<br>

상태를 관리하는 과정을 정리해보면 다음과 같습니다.

```
1. Store에서 state와 dispatch 함수를 context를 통해 제공
2. 하위 컴포넌트에서 context를 통해 state를 바로 사용가능
3. state를 변경해주어야 하는 경우 적합한 action을 생성하고 이를 dispatch를 통해 호출함
4. reducer에서 명시된 action의 타입에 따라 적절한 state 관리 함수가 호출됨
5. 해당 state와 관련되어 있던 하위 컴포넌트에서는 변경이 일어남
```

<br>

## 🌈 Infinite Scroll / Lazy Loading

`Intersection Obeserver API`를 사용하여 구현했습니다. 두 기능 모두 화면에 특정 DOM element가 보이게 되는 경우를 감지한 후 처리를 해주어야 됩니다. 이를 위해서는 scroll되는 순간 화면에 어떻게 보여지는지가 구현에 관건이라고 생각했습니다.

scroll event를 이용하여 구현할 수 있지만, scroll될 때 마다 과도한 event가 호출될 것으로 생각했습니다. 또한 element의 크기와 위치값을 알아내기 위해 사용하는 `getBoundingClientRect`함수는 호출 될 때마다 리플로우 현상이 발생하므로 성능에 좋지 않다고 합니다.

`Intersection Obeserver API`는 DOM elemetn가 뷰포트에 노출되었는지 여부를 비동기적으로 검사하여 메인 스레드에 큰 영향을 주지 않아 성능상 이점이 있습니다.

React에서 `Intersection Obeserver API`를 쉽게 사용하기 위해 custom hooks를 구현하여 사용했습니다.

```js
const useIntersectionObserver = ({
    root = null,
    rootMargin = '0px',
    threshold = 1,
    handleIntersection,
}) => {
    const [target, setTarget] = useState(null);

    useEffect(() => {
        if (!target) return;

        const option = { root, rootMargin, threshold };
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                entry.isIntersecting &&
                    handleIntersection(entry.target, observer);
            });
        }, option);

        io.observe(target);

        return () => io.unobserve(target);
    }, [target, root, rootMargin, threshold, handleIntersection]);

    return setTarget;
};
```

감시하고자 하는 element에 적용할 option과 콜백함수를 인자로 넘겨줌으로서 사용합니다. 반환되는 `setTarget` 함수로 원하는 element를 Intersection Obeserver에 등록해줍니다.
뷰포트와 target element가 지정한 설정대로 교차되면 인자로 넘겨준 콜백함수가 실행됩니다.

구현한 hooks는 아래와 같이 사용했습니다.

```js
const Card = () => {
    ...

    const setTarget = useIntersectionObserver({
        rootMargin: '5%',
        handleIntersection,
    });

    function handleIntersection(target, observer) {
        target.src = target.dataset.src;
        observer.unobserve(target);
    }

    useEffect(() => {
        setTarget(imgRef.current);
    }, [setTarget, imgRef]);

    ...
}
```
