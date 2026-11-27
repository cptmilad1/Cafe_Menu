// Decorative inline SVGs (no external assets). Hidden from assistive tech.
const paths = {
  1: (
    <>
      <path d="M12 26h34v10a14 14 0 0 1-14 14h-6a14 14 0 0 1-14-14V26Z" />
      <path d="M46 29h4a6 6 0 0 1 0 12h-4" />
      <path d="M22 14c0 4 4 4 4 8M32 14c0 4 4 4 4 8" />
    </>
  ),
  2: (
    <>
      <path d="M14 30h32l-3 20H17L14 30Z" />
      <path d="M46 34h3a5 5 0 0 1 0 10h-4" />
      <path d="M30 30V14M30 20c6-2 9-6 9-10-6 0-9 4-9 10Z" />
    </>
  ),
  3: (
    <>
      <path d="M10 38c2-12 12-20 22-20s20 8 22 20c-5 4-10 4-12 0-2 4-8 4-10 0-2 4-8 4-10 0-2 4-7 4-12 0Z" />
      <path d="M24 24l4 10M36 22l-2 12M44 28l-6 8" />
    </>
  ),
}

const ProductGlyph = ({ categoryId, className = 'h-16 w-16' }) => (
  <svg
    viewBox="0 0 64 64"
    aria-hidden="true"
    focusable="false"
    className={`${className} fill-none stroke-caramel-400`}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {paths[categoryId] ?? paths[1]}
  </svg>
)

export default ProductGlyph
