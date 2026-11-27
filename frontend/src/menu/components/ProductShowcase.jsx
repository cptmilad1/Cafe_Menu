import GlassPanel from '../../share/components/GlassPanel'
import GlassButton from '../../share/components/GlassButton'
import { formatPrice } from '../../share/utils/formatPrice'
import ProductGlyph from './ProductGlyph'

const ProductShowcase = ({ product, onAdd }) => {
  if (!product) return null
  return (
    <GlassPanel strong className="mb-10 flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:p-8" data-reveal>
      <ProductGlyph categoryId={product.category_id} className="h-28 w-28 shrink-0" />
      <div className="flex-1">
        <p className="text-sm font-semibold uppercase tracking-widest text-caramel-400">House favourite</p>
        <h3 className="mt-1 font-display text-2xl">{product.name}</h3>
        <p className="mt-2 max-w-prose text-crema-200">{product.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xl font-semibold">{formatPrice(product.price)}</span>
        <GlassButton onClick={() => onAdd(product)} aria-label={`Add ${product.name} to order`}>
          Add to order
        </GlassButton>
      </div>
    </GlassPanel>
  )
}

export default ProductShowcase
