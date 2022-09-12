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
    off: {rotate: '0'},
    
}

export const moveArrow1 = {
    stay: {y: 0},
    move: {
        y: 12,
        transition: {
            duration: .3,
            repeat: Infinity,
            repeat: Infinity,
            repeatDelay: 6,
            ease: 'easeInOut',
        }
    }
}

export const moveArrow2 = {
    stay: {y: 0},
    move: {
        y: 25,
        transition: {
            duration: .3,
            repeat: Infinity,
            repeatDelay: 6,
            ease: 'easeInOut',
        }
    }
}


