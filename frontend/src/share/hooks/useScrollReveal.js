import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fades/slides in every `[data-reveal]` element inside `scopeRef` as it enters the viewport.
 * Nothing is animated when the user prefers reduced motion, so content is simply visible.
 * All tweens and triggers are reverted when the component unmounts.
 */
export const useScrollReveal = (scopeRef) => {
  useLayoutEffect(() => {
    const scope = scopeRef.current
    if (!scope) return undefined

    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(scope.querySelectorAll('[data-reveal]'), {
        autoAlpha: 0,
        y: 28,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: scope, start: 'top 80%', once: true },
      })
    })

    return () => media.revert()
  }, [scopeRef])
}
