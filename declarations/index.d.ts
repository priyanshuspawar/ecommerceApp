declare function useScroll({ container, target, layoutEffect, ...options }?: UseScrollOptions): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
    offset?:string[];
};

export {useScroll};
