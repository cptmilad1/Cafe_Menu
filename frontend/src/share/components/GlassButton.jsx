const variants = {
  primary:
    'bg-caramel-400 text-roast-950 hover:bg-caramel-500 border-transparent disabled:bg-crema-200/30 disabled:text-crema-200',
  ghost:
    'glass text-crema-50 hover:bg-white/10 border-transparent disabled:opacity-60',
}

const GlassButton = ({ variant = 'primary', className = '', type = 'button', children, ...rest }) => (
  <button
    type={type}
    className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    {...rest}
  >
    {children}
  </button>
)

export default GlassButton
