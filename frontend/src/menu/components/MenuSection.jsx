import { useState } from 'react'
import SectionShell from '../../share/components/SectionShell'
import { useOrderStore } from '../../order/store/orderStore'
import { categories, products } from '../data/catalog'
import CategoryTabs from './CategoryTabs'
import ProductCard from './ProductCard'
import ProductShowcase from './ProductShowcase'

const MenuSection = () => {
  const [activeId, setActiveId] = useState('all')
  const lines = useOrderStore((state) => state.lines)
  const addItem = useOrderStore((state) => state.addItem)

  const visible = products.filter((p) => activeId === 'all' || p.category_id === activeId)
  const featured = products.find((p) => p.featured && p.is_available)

  return (
    <SectionShell id="menu" eyebrow="Chapter two" title="Browse the menu">
      <ProductShowcase product={featured} onAdd={addItem} />
      <CategoryTabs categories={categories} activeId={activeId} onChange={setActiveId} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={lines[product.id]?.quantity ?? 0}
            onAdd={addItem}
          />
        ))}
      </ul>
    </SectionShell>
  )
}

export default MenuSection
