import { defaultConfig } from '@/utils/defaultConfig'
import { joinWithAnd } from '@/utils/joinWithAnd'
import { ConfigSample } from '@/components/ConfigSample'
import { translateVariants } from '@/utils/zhTW'

export function Variants({ plugin, name }) {
  const variants = (defaultConfig.variants[plugin] || ['responsive']).map(translateVariants)
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)
  const extraVariants = ['responsive', 'hover', 'focus', 'active', 'group-hover']
    .filter((x) => !variants.includes(x))
    .slice(0, 2)
    .map(translateVariants)

  // const opening = `By default, ${
  //   variants.length
  //     ? `only ${joinWithAnd(variants).replace('dark', 'dark mode <em>(if enabled)</em>')}`
  //     : 'no'
  // } variants are generated for ${name} utilities.`
  const opening = `默認情況下, ${
    variants.length
      ? `只有 ${joinWithAnd(variants).replace('dark', '深色模式 <em>(如果啟用)</em>')} `
      : '沒有'
  }的 ${name} 變化模式會產生。`

  return (
    <div className="prose">
      <p dangerouslySetInnerHTML={{ __html: opening }} />
      <p>
        {/* You can control which variants are generated for the {name} utilities by modifying the{' '}
        <code>{plugin}</code> property in the <code>variants</code> section of your{' '}
        <code>tailwind.config.js</code> file. */}
        在 <code>tailwind.config.js</code> 的 <code>variants</code> 區塊中變更 <code>{plugin}</code>{' '}
        屬性來決定有哪些變化模式會生成。
      </p>
      <p>
        {/* For example, this config will {variants.length > 0 ? 'also ' : ''}generate{' '}
        {joinWithAnd(extraVariants)} variants: */}
        舉個例子來說，這個設定將會生成 {joinWithAnd(extraVariants)} 的變化模式。
      </p>
      <ConfigSample path="variants.extend" before="..." add={{ [plugin]: extraVariants }} />
    </div>
  )
}
