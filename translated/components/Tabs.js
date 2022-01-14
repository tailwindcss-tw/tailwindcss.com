export function Tabs({ tabs, selected, onChange, className, iconClassName }) {
  return (
    <div className="flex overflow-auto -mx-4 sm:mx-0">
      <ul
        className="flex-none inline-grid gap-x-2 px-4 sm:px-0 xl:gap-x-6"
        style={{ gridTemplateColumns: `repeat(${Object.keys(tabs).length}, minmax(6rem, 1fr))` }}
      >
        {Object.entries(tabs).map(([name, icon]) => (
          <li key={name}>
            <button
              type="button"
              onClick={() => onChange(name)}
              className={`group text-sm font-semibold w-full flex flex-col items-center ${
                selected === name ? className : ''
              }`}
            >
              <svg
                width="48"
                height="48"
                fill="none"
                aria-hidden="true"
                className={`mb-6 ${
                  selected === name
                    ? iconClassName
                    : 'text-gray-300 group-hover:text-gray-400 dark:text-gray-600 dark:group-hover:text-gray-500'
                }`}
              >
                {icon(selected === name)}
              </svg>
              {/* {name} */}
              {chineseName(name)? chineseName(name): name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function chineseName(name) {
  return {
    // Utilities
    'Sizing': "尺寸",
    'Colors': "色彩",
    'Typography': "文字版式",
    'Shadows': "陰影",

    // Layouts
    'Simple': "簡約",
    'Playful': "生動",
    'Elegant': "典雅",
    'Brutalist': "狂野",

    // Features
    'CSS Grid': "CSS 網格",
    'Transforms': "變形",
    'Filters': "濾鏡",
  }[name]
}