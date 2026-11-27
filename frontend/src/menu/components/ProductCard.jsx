import GlassPanel from '../../share/components/GlassPanel'
import GlassButton from '../../share/components/GlassButton'
import { formatPrice } from '../../share/utils/formatPrice'
import ProductGlyph from './ProductGlyph'

const ProductCard = ({ product, quantity, onAdd }) => (
  <GlassPanel as="li" className="flex flex-col gap-3 p-5" data-reveal>
    <ProductGlyph categoryId={product.category_id} />
    <div className="flex-1">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="mt-1 text-sm text-crema-200">{product.description}</p>
    </div>
    <div className="flex items-center justify-between gap-3">
      <span className="font-semibold">{formatPrice(product.price)}</span>
      {product.is_available ? (
        <GlassButton onClick={() => onAdd(product)} aria-label={`Add ${product.name} to order`}>
          {quantity > 0 ? `Add another (${quantity})` : 'Add'}
        </GlassButton>
      ) : (
        <span className="rounded-full border border-crema-200/40 px-3 py-1 text-xs text-crema-200">
          Sold out
        </span>
      )}
    </div>
  </GlassPanel>
)

export default ProductCard
