import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlassPanel from '../../share/components/GlassPanel'

gsap.registerPlugin(ScrollTrigger)

// Chapter one: the customer walks up and the glass doors slide open as they scroll.
const EntranceSection = () => {
  const scope = useRef(null)

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      const trigger = { trigger: scope.current, start: 'top top', end: 'bottom 40%', scrub: 0.6 }
      gsap.to('[data-door="left"]', { xPercent: -100, ease: 'none', scrollTrigger: trigger })
      gsap.to('[data-door="right"]', { xPercent: 100, ease: 'none', scrollTrigger: trigger })
      gsap.to('[data-sign]', { y: -40, ease: 'none', scrollTrigger: trigger })
    }, scope)
    return () => media.revert()
  }, [])

  return (
    <section
      id="entrance"
      ref={scope}
      aria-labelledby="entrance-title"
      className="relative flex min-h-[110vh] items-center justify-center overflow-hidden px-4 pt-24"
    >
      <div data-sign className="relative z-10 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-caramel-400">Chapter one</p>
        <h1 id="entrance-title" className="font-display text-5xl sm:text-6xl">
          Step inside the café
        </h1>
        <p className="mx-auto mt-5 max-w-prose text-lg text-crema-200">
          Scroll to open the doors, pick your drinks and hand your order straight to the barista.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-caramel-400 px-6 py-2 font-semibold text-roast-950 hover:bg-caramel-500"
        >
          Skip to the menu
        </a>
      </div>

      {/* Decorative doors; reduced-motion users simply see them resting at the edges. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex">
        <GlassPanel data-door="left" className="h-full w-1/2 rounded-none border-y-0 border-l-0" />
        <GlassPanel data-door="right" className="h-full w-1/2 rounded-none border-y-0 border-r-0" />
      </div>
    </section>
  )
}

export default EntranceSection
