import { useId, useState } from 'react'
import SectionShell from '../../share/components/SectionShell'
import GlassPanel from '../../share/components/GlassPanel'
import GlassButton from '../../share/components/GlassButton'
import { formatPrice } from '../../share/utils/formatPrice'
import { selectItemCount, selectTotal, useOrderStore } from '../store/orderStore'
import { validateCustomer } from '../utils/validateOrder'

const Field = ({ label, error, ...input }) => {
  const id = useId()
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-semibold">{label}</label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-11 w-full rounded-xl border border-crema-200/50 bg-roast-950/70 px-4 py-2 text-crema-50 placeholder:text-crema-200/70"
        {...input}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-ember-400">{error}</p>
      )}
    </div>
  )
}

const OrderSection = () => {
  const lines = useOrderStore((state) => state.lines)
  const count = useOrderStore(selectItemCount)
  const total = useOrderStore(selectTotal)
  const changeQuantity = useOrderStore((state) => state.changeQuantity)
  const placeOrder = useOrderStore((state) => state.placeOrder)

  const [form, setForm] = useState({ name: '', table: '' })
  const [errors, setErrors] = useState({})

  const items = Object.values(lines)
  const update = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validateCustomer(form)
    setErrors(found)
    if (Object.keys(found).length > 0 || items.length === 0) return
    placeOrder(form)
    setForm({ name: '', table: '' })
    document.getElementById('barista')?.scrollIntoView()
  }

  return (
    <SectionShell id="order" eyebrow="Chapter three" title="Choose your order">
      <div className="grid gap-6 lg:grid-cols-5">
        <GlassPanel strong className="p-6 lg:col-span-3" data-reveal>
          <h3 className="text-lg font-semibold">Your selection</h3>
          {items.length === 0 ? (
            <p className="mt-4 text-crema-200">Nothing yet. Add something from the menu above.</p>
          ) : (
            <ul className="mt-4 divide-y divide-crema-200/20">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex items-center justify-between gap-3 py-3">
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-crema-200">{formatPrice(product.price)} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlassButton
                      variant="ghost"
                      className="!px-3"
                      aria-label={`Remove one ${product.name}`}
                      onClick={() => changeQuantity(product.id, -1)}
                    >
                      −
                    </GlassButton>
                    <span aria-live="polite" className="w-6 text-center font-semibold">{quantity}</span>
                    <GlassButton
                      variant="ghost"
                      className="!px-3"
                      aria-label={`Add one more ${product.name}`}
                      onClick={() => changeQuantity(product.id, 1)}
                    >
                      +
                    </GlassButton>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-5 flex justify-between border-t border-crema-200/30 pt-4 text-lg font-semibold">
            <span>Total ({count} {count === 1 ? 'item' : 'items'})</span>
            <span>{formatPrice(total)}</span>
          </p>
        </GlassPanel>

        <GlassPanel as="form" strong noValidate onSubmit={handleSubmit} className="space-y-4 p-6 lg:col-span-2" data-reveal>
          <h3 className="text-lg font-semibold">Hand it to the barista</h3>
          <Field label="Your name" value={form.name} onChange={update('name')} error={errors.name} autoComplete="given-name" placeholder="Sara" />
          <Field label="Table number" type="number" inputMode="numeric" min="1" max="99" value={form.table} onChange={update('table')} error={errors.table} placeholder="12" />
          {items.length === 0 && (
            <p className="text-sm text-crema-200">Add at least one item to place your order.</p>
          )}
          <GlassButton type="submit" className="w-full" disabled={items.length === 0}>
            Send order to barista
          </GlassButton>
        </GlassPanel>
      </div>
    </SectionShell>
  )
}

export default OrderSection
