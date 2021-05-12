import { corePluginsWithExamples } from '@/utils/corePluginsWithExamples'

const descriptions = {
  // preflight: "Tailwind's base/reset styles",
  preflight: 'Tailwind 的 base/reset 樣式',
  // container: 'The `container` component',
  container: '`container` 元件',
  // accessibility: 'The `sr-only` and `not-sr-only` utilities',
  accessibility: '`sr-only` 與 `not-sr-only` 功能',
  // backgroundOpacity: 'The `background-color` opacity utilities like `bg-opacity-25`',
  backgroundOpacity: '`background-color` 的透明度功能，例如： `bg-opacity-25`',
  // borderOpacity: 'The `border-color` opacity utilities like `border-opacity-25`',
  borderOpacity: '`border-color` 的透明度功能，例如： `border-opacity-25`',
  // divideColor: 'The between elements `border-color` utilities like `divide-gray-500`',
  divideColor: '間距元素的 `border-color` 功能，例如： `divide-gray-500`',
  // divideWidth: 'The between elements `border-width` utilities like `divide-x-2`',
  divideWidth: '間距元素的 `border-width` 功能，例如： `divide-x-2`',
  // placeholderColor: 'The placeholder `color` utilities like `placeholder-red-600`',
  placeholderColor: 'placeholder `color` 功能，例如： `placeholder-red-600`',
  // placeholderOpacity: 'The placeholder `color` opacity utilities like `placeholder-opacity-25`',
  placeholderOpacity: 'placeholder `color` 的透明度功能，例如： `placeholder-opacity-25`',
  // space: 'The "space-between" utilities like `space-x-4`',
  space: '"space-between" 功能，例如： `space-x-4`',
  // transform: 'The `transform` utility (for enabling transform features)',
  transform: '`transform` 功能 (用來啟用 transform 功能)',
}

export function CorePluginReference() {
  return (
    <div className="prose">
      <table>
        <thead>
          <tr>
            {/* <th>Core Plugin</th> */}
            <th>核心插件</th>
            {/* <th>Description</th> */}
            <th>說明</th>
          </tr>
        </thead>
        <tbody>
          {corePluginsWithExamples.map(({ plugin, example }) => (
            <tr key={plugin}>
              <td>
                <code>{plugin}</code>
              </td>
              <td>
                {descriptions[plugin]
                  ?.split(/`([^`]+)`/)
                  .map((segment, i) =>
                    i % 2 === 0 ? segment : <code key={i}>{segment}</code>
                  ) || (
                  <>
                    {/* The{' '} */}
                    <code>
                      {plugin.replace(
                        /([a-z])([A-Z])/g,
                        (_m, p1, p2) => `${p1}-${p2.toLowerCase()}`
                      )}
                    </code>{' '}
                    {/* utilities like <code>{example}</code> */}
                    功能，例如： <code>{example}</code>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
