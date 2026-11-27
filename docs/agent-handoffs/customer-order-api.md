# Customer menu and order API (proposal, NOT confirmed)

- **Owners:** Frontend Lead (requester), Backend Lead (must confirm).
- **Status:** The frontend currently uses sample data and local state only. Nothing below is implemented or agreed.

## Needs from the backend

1. **Public menu read.** `GET /api/categories` and `GET /api/products` currently require a Bearer JWT. A customer-facing menu needs either an unauthenticated read-only endpoint or an agreed guest token. Decision needed.
2. **Place order.** Proposed `POST /api/orders` with `{ customerName, tableNumber, items: [{ productId, quantity }] }`. The server should compute prices and totals and return `{ id, status }`. Auth requirement: to be decided.
3. **Order status (optional).** A Socket.IO event for status changes (`received`, `brewing`, `ready`) would let the barista chapter show live progress. Event name and payload: to be decided.

## Open questions

- Does the `orders` schema store a customer name, or only a table id (`cafe_tables`)?
- Should `POST /api/orders` accept a table number or a `cafe_tables.id`?
- Error shape to expect for validation failures.
