const CategoryTabs = ({ categories, activeId, onChange }) => (
  <div role="group" aria-label="Menu categories" className="mb-8 flex flex-wrap gap-2">
    {[{ id: 'all', name: 'All' }, ...categories].map((category) => {
      const active = category.id === activeId
      return (
        <button
          key={category.id}
          type="button"
          aria-pressed={active}
          onClick={() => onChange(category.id)}
          className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
            active
              ? 'border-transparent bg-caramel-400 text-roast-950'
              : 'glass border-transparent text-crema-50 hover:bg-white/10'
          }`}
        >
          {category.name}
        </button>
      )
    })}
  </div>
)

export default CategoryTabs
