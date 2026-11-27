const GlassPanel = ({ as: Tag = 'div', strong = false, className = '', children, ...rest }) => (
  <Tag
    className={`${strong ? 'glass-strong' : 'glass'} rounded-3xl text-crema-50 ${className}`}
    {...rest}
  >
    {children}
  </Tag>
)

export default GlassPanel
