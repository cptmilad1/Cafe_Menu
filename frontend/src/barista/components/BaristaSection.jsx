import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import SectionShell from '../../share/components/SectionShell'
import GlassPanel from '../../share/components/GlassPanel'
import GlassButton from '../../share/components/GlassButton'
import { formatPrice } from '../../share/utils/formatPrice'
import { useOrderStore } from '../../order/store/orderStore'

const steps = ['Received', 'Brewing', 'Ready']

// Chapter four: the order lands on the barista's counter.
const BaristaSection = () => {
  const placed = useOrderStore((state) => state.placed)
  const reset = useOrderStore((state) => state.reset)
  const cupRef = useRef(null)

  // Slide the ticket in when an order is placed; skipped for reduced motion.
  useLayoutEffect(() => {
    if (!placed) return undefined
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-ticket]', { y: -30, autoAlpha: 0, duration: 0.8, ease: 'back.out(1.6)' })
      gsap.from(cupRef.current, { scaleY: 0, transformOrigin: 'bottom', duration: 1.4, ease: 'power1.out' })
    })
    return () => media.revert()
  }, [placed])

  return (
    <SectionShell id="barista" eyebrow="Chapter four" title="At the barista's counter">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <GlassPanel strong className="p-6" data-reveal aria-live="polite">
          {placed ? (
            <div data-ticket>
              <p className="text-sm font-semibold uppercase tracking-widest text-caramel-400">
                Order #{placed.number}
              </p>
              <h3 className="mt-1 font-display text-2xl">Thanks, {placed.name}!</h3>
              <p className="mt-1 text-crema-200">Table {placed.table}</p>
              <ul className="mt-4 space-y-1">
                {placed.items.map(({ product, quantity }) => (
                  <li key={product.id} className="flex justify-between">
                    <span>{quantity} × {product.name}</span>
                    <span>{formatPrice(product.price * quantity)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex justify-between border-t border-crema-200/30 pt-3 font-semibold">
                <span>Total</span><span>{formatPrice(placed.total)}</span>
              </p>
              <ol className="mt-5 flex gap-2 text-sm" aria-label="Order progress">
                {steps.map((step, index) => (
                  <li
                    key={step}
                    aria-current={index === 0 ? 'step' : undefined}
                    className={`rounded-full border px-3 py-1 ${index === 0 ? 'border-transparent bg-caramel-400 text-roast-950' : 'border-crema-200/40 text-crema-200'}`}
                  >
                    {step}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-crema-200">
                Preview only: this order has not been sent to the café server yet.
              </p>
              <GlassButton variant="ghost" className="mt-4" onClick={reset}>Start a new order</GlassButton>
            </div>
          ) : (
            <p className="text-crema-200">
              Your order will appear here once you send it to the barista.
            </p>
          )}
        </GlassPanel>

        <GlassPanel className="flex items-center justify-center p-8" data-reveal aria-hidden="true">
          <svg viewBox="0 0 200 200" className="h-56 w-56" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 170h160" className="stroke-crema-200" strokeWidth="4" />
            <path d="M50 70h90v40a45 45 0 0 1-45 45 45 45 0 0 1-45-45V70Z" className="stroke-caramel-400" strokeWidth="5" />
            <path d="M140 80h12a16 16 0 0 1 0 32h-14" className="stroke-caramel-400" strokeWidth="5" />
            <path d="M55 100h80v10a40 40 0 0 1-40 40 40 40 0 0 1-40-40v-10Z" ref={cupRef} className="fill-caramel-500/70 stroke-none" />
            <path d="M80 50c0 8 8 8 8 16M100 44c0 8 8 8 8 16" className="stroke-crema-200/70" strokeWidth="3" />
          </svg>
        </GlassPanel>
      </div>
    </SectionShell>
  )
}

export default BaristaSection
