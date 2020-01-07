const { promises } = require('fs');
const path = require('path');
const fs = promises;

const productsJSONFilePath = path.join(
    __dirname,
    '..',
    '/src/data/procucts.json'
);
const thumbnailPath = index =>
    `https://d2ur7st6jjikze.cloudfront.net/share/thumbnail/thumbnail-${index}.jpg`;
const productsNumber = 110;

const productTemplate = [
    { name: '[한인민박] 오사카 모리하우스 (집 전체)', price: 53887 },
    { name: '[한인민박] 오사카 일본우리집 게스트하우스', price: 32332 },
    { name: '[한인민박] 오사카 미도리하우스 (집 전체)', price: 59276 },
    { name: '[한인민박] 오사카 데이즈 아파트먼트 (집 전체)', price: 71131 },
    { name: '[호텔] 서울 4성급 최고', price: 100000 },
    { name: '[호텔] 대전 3성급 최고', price: 20000 },
    {
        name:
            '[호텔] 상트페레트부르크에서 출발하는 푸쉬킨(차르스코예 셀로)과 예카테리나 블라블라 뭐뭐뭐 그렇다고 합디다 예예예 하하하 좋아요 좋아~',
        price: 89000,
    },
    { name: '[호텔] 전주 2성급 최고', price: 12300 },
    { name: '[호텔] 인천 1성급 최고', price: 23200 },
    { name: '[게스트하우스] 부산 바다가 잘 보이는 집', price: 35000 },
];

const products = [...Array(productsNumber)].map((_, index) => {
    const productIndex = index % productTemplate.length;
    const { name, price } = productTemplate[productIndex];

    return {
        id: index,
        thumbnailPath: thumbnailPath(index),
        name,
        price: price + index,
    };
});

fs.writeFile(productsJSONFilePath, JSON.stringify(products, null, 4), 'utf8')
    .then(() => console.log('Success: create product datas'))
    .catch(error => {
        console.log('Fail: create product datas');
        console.error(error);
    });
