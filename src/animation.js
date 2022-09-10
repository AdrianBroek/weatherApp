export const GoIn = {
    hidden: {opacity: 0, scale: 1.2},
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: 'easeOut',
            duration: .75
        }
    }
}

export const arrowRotate = {
    on: {rotate: '180deg'},
    off: {rotate: '0'}
}

export const moveArrow = {
    false: {y: 10},
    active: {
        y: 10,
        transition: {
            delay: 5
        }
    }
}
