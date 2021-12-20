import { useState } from 'react'
import { Switch } from '@headlessui/react'
import {
  Paragraph,
  IconContainer,
  Caption,
  BigText,
  Link,
  Widont,
  InlineCode,
} from '@/components/home/common'
import { CodeWindow } from '@/components/CodeWindow'
import iconUrl from '@/img/icons/home/dark-mode.png'
import { addClassTokens } from '@/utils/addClassTokens'
import { Token } from '@/components/Code'
import clsx from 'clsx'
// import { GridLockup } from '../GridLockup'
import { GridLockup } from '@/components/GridLockup'
// import { code, tokens } from '../../samples/dark-mode-zh.html?highlight'
import { code, tokens } from '../../../samples/.ZH/dark-mode.html?highlight'

function Sun(props) {
  return (
    <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 4v1M18 6l-1 1M20 12h-1M18 18l-1-1M12 19v1M7 17l-1 1M5 12H4M7 7 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Moon(props) {
  return (
    <svg width="24" height="24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DarkModeSwitch({ enabled, onChange }) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={clsx(
        'relative inline-flex items-center py-1.5 px-2 rounded-full transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus:outline-none',
        enabled
          ? 'bg-gray-700 text-gray-400 focus-visible:ring-gray-500'
          : 'bg-cyan-500 text-cyan-200 focus-visible:ring-cyan-600'
      )}
    >
      {/* <span className="sr-only">{enabled ? 'Enable' : 'Disable'} dark mode</span> */}
      <span className="sr-only">{enabled ? '開啟' : '關閉'}深色模式</span>
      <Sun
        className={clsx(
          'transform transition-transform',
          enabled ? 'scale-100 duration-300' : 'scale-0 duration-500'
        )}
      />
      <Moon
        className={clsx(
          'ml-3.5 transform transition-transform',
          enabled ? 'scale-0 duration-500' : 'scale-100 duration-300'
        )}
      />
      <span
        className={clsx(
          'absolute top-0.5 left-0.5 bg-white w-8 h-8 rounded-full flex items-center justify-center transition duration-500 transform',
          enabled ? 'translate-x-[2.625rem]' : ''
        )}
      >
        <Sun
          className={clsx(
            'flex-none transition duration-500 transform text-cyan-500',
            enabled ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
          )}
        />
        <Moon
          className={clsx(
            'flex-none -ml-6 transition duration-500 transform text-gray-700',
            enabled ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          )}
        />
      </span>
    </Switch>
  )
}

export function DarkMode() {
  const [enabled, setEnabled] = useState(false)

  return (
    <section id="dark-mode">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <IconContainer>
          <img src={iconUrl} alt="" />
        </IconContainer>
        {/* <Caption className="text-gray-500">Dark mode</Caption> */}
        <Caption className="text-gray-500">深色模式</Caption>
        <BigText>
          {/* <Widont>Now with Dark Mode.</Widont> */}
          <Widont>現在，有深色模式了</Widont>
        </BigText>
        <Paragraph>
          {/* Don’t want to be one of those websites that blinds people when they open it on their phone
          at 2am? Enable dark mode in your configuration file then throw{' '}
          <InlineCode>dark:</InlineCode> in front of any color utility to apply it when dark mode is
          active. Works for background colors, text colors, border colors, and even gradients. */}
          不想讓在凌晨兩點用手機打開你網站時的用戶眼睛被閃瞎嗎？
          在設定文件中開啟深色模式並在任何顏色功能前加上{' '}
          <InlineCode>dark:</InlineCode> ，這麼一來，當深色模式開啟時，
          背景顏色、文字顏色、邊框顏色甚至是漸層色都能發生變化。
        </Paragraph>
        <Link href="zh/docs/dark-mode" color="gray">
          {/* Learn more<span className="sr-only">, dark mode</span> */}
          了解更多<span className="sr-only">關於深色模式的內容</span>
        </Link>
      </div>
      <GridLockup
        className="mt-10 xl:mt-2"
        beams={5}
        left={
          <div className="relative xl:mt-18">
            <DarkModeSwitch enabled={enabled} onChange={setEnabled} />
            <div
              className={clsx('mt-6 sm:mt-10 relative z-10 rounded-xl shadow-xl', {
                dark: enabled,
              })}
              dangerouslySetInnerHTML={{
                __html: code
                  .replace(/\(light\)/g, '')
                  .replace(/dark:/g, 'transition-all duration-500 dark:')
                  .replace(
                    'src="/full-stack-radio.png"',
                    `src="${require('@/img/full-stack-radio.png').default}" loading="lazy"`
                  ),
                // .replace(/<button type="button" class="/g, '<div class="cursor-pointer ')
                // .replace(/<\/button>/g, '</div>'),
              }}
            />
          </div>
        }
        right={
          <CodeWindow>
            <CodeWindow.Code
              tokens={tokens}
              tokenComponent={DarkModeToken}
              tokenProps={{ enabled }}
              transformTokens={addClassTokens}
            />
          </CodeWindow>
        }
      />
    </section>
  )
}

function DarkModeToken({ token, parentTypes, enabled, children }) {
  if (token[0] === 'class') {
    if (token[1].startsWith('dark:')) {
      return (
        <span
          className={clsx('code-highlight transition-colors duration-500', {
            'bg-code-highlight': enabled,
          })}
        >
          {children}
        </span>
      )
    }
    if (token[1].startsWith('(light)')) {
      return (
        <span className={clsx('transition-opacity duration-500', { 'opacity-50': enabled })}>
          {token[1].replace(/^\(light\)/, '')}
        </span>
      )
    }
  }

  return (
    <Token token={token} parentTypes={parentTypes}>
      {children}
    </Token>
  )
}