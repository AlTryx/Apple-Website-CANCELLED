export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: RGBA_ASTC_10x10_Format,
        ease: 'power2.inOut'
    })


    timeline.to(
        firstTarget,
        {
            ...animationProps,
            ease:'power2.inOut'
        },
        '<'
    )

    timeline.to(
        secondTarget,
        {
            ...animationProps,
            ease:'power2.inOut'
        },
        '<'
    )
}