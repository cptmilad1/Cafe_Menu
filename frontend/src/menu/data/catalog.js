import axios from 'axios'
import request from '../../share/shared/request'




export const categories = [
  { id: 1, name: 'Coffee', description: 'Single-origin espresso and slow brews.' },
  { id: 2, name: 'Tea', description: 'Loose-leaf teas steeped to order.' },
  { id: 3, name: 'Pastry', description: 'Baked fresh every morning.' },
]

export const products = [
  { id: 1, category_id: 1, name: 'Espresso', description: 'A tight, syrupy double shot with a caramel finish.', price: 3.0, is_available: true, featured: false },
  { id: 2, category_id: 1, name: 'Flat White', description: 'Silky steamed milk poured over a ristretto base.', price: 4.5, is_available: true, featured: true },
  { id: 3, name: 'Cold Brew', category_id: 1, description: 'Steeped for 18 hours, served over ice.', price: 4.75, is_available: true, featured: false },
  { id: 4, category_id: 1, name: 'Mocha', description: 'Dark chocolate, espresso and steamed milk.', price: 5.0, is_available: false, featured: false },
  { id: 5, category_id: 2, name: 'Jasmine Green', description: 'Delicate, floral and lightly sweet.', price: 3.75, is_available: true, featured: false },
  { id: 6, category_id: 2, name: 'Masala Chai', description: 'Black tea simmered with warming spices and milk.', price: 4.25, is_available: true, featured: false },
  { id: 7, category_id: 3, name: 'Butter Croissant', description: 'Flaky, laminated and still warm from the oven.', price: 3.5, is_available: true, featured: false },
  { id: 8, category_id: 3, name: 'Cardamom Bun', description: 'Soft knotted bun with cardamom sugar.', price: 3.95, is_available: true, featured: false },
]
