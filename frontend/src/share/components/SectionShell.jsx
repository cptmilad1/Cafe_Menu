import { useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/** Shared layout for each chapter of the scroll story. Children can opt in to motion with `data-reveal`. */
const SectionShell = ({ id, title, eyebrow, children, className = '' }) => {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={`${id}-title`}
      className={`mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 ${className}`}
    >
      <header className="mb-10 max-w-2xl" data-reveal>
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-caramel-400">{eyebrow}</p>
        )}
        <h2 id={`${id}-title`} className="font-display text-3xl sm:text-4xl">{title}</h2>
      </header>
      {children}
    </section>
  )
}

export default SectionShell
