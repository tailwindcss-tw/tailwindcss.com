import { ConfigSample } from '@/components/ConfigSample'
import { castArray } from '@/utils/castArray'
import { joinWithAnd } from '@/utils/joinWithAnd'
import { translateVariants } from '@/utils/zhTW'

export function Disabling({ plugin, name }) {
  const plugins = castArray(plugin)
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)

  return (
    <div className="prose">
      <p>
        {/* If you don't plan to use the {name} utilities in your project, you can disable them entirely
        by setting the{' '} */}
        如果你不打算在專案中使用 {translateVariants(name)} 功能，可以在你的設定檔裡的{' '}
        <code>corePlugins</code> 屬性中將{' '}
        <span
          dangerouslySetInnerHTML={{
            __html: joinWithAnd(plugins.map((p) => `<code>${p}</code>`)),
          }}
        />{' '}
        {/* {plugins.length > 1 ? 'properties' : 'property'} to <code>false</code> in the{' '}
        <code>corePlugins</code> section of your config file: */}
        設定為 <code>false</code> 來停用功能：
      </p>

      <ConfigSample
        path="corePlugins"
        before="..."
        add={plugins.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})}
      />
    </div>
  )
}
