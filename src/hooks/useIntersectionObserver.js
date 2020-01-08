import { useState, useEffect } from 'react';

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

export default useIntersectionObserver;
