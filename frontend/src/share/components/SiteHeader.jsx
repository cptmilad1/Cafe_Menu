import { selectItemCount, useOrderStore } from '../../order/store/orderStore'

const links = [
  { href: '#entrance', label: 'Entrance' },
  { href: '#menu', label: 'Menu' },
  { href: '#order', label: 'Order' },
  { href: '#barista', label: 'Barista' },
]

const SiteHeader = () => {
  const count = useOrderStore(selectItemCount)

  return (
    <header className="glass fixed inset-x-3 top-3 z-50 rounded-full px-5 py-2">
      <nav aria-label="Café chapters" className="flex items-center justify-between gap-4">
        <a href="#entrance" className="font-display text-lg">Café</a>
        <ul className="hidden gap-5 text-sm font-semibold sm:flex">
          {links.map((link) => (
            <li key={link.href}><a href={link.href} className="hover:text-caramel-400">{link.label}</a></li>
          ))}
        </ul>
        <a
          href="#order"
          className="inline-flex min-h-11 items-center rounded-full bg-caramel-400 px-4 text-sm font-semibold text-roast-950"
        >
          Order <span aria-live="polite" className="ml-2">({count})</span>
          <span className="sr-only"> items in your order</span>
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
