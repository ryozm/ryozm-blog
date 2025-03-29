'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { LuSun, LuMoon, LuMonitor, LuCheck } from 'react-icons/lu'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Radio,
  RadioGroup,
  Transition,
} from '@headlessui/react'

const Blank = () => <svg className="h-6 w-6" />

const ThemeSwitch = () => {
  const element = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  function changeTheme(newTheme) {
    const isToDark = resolvedTheme === 'light'

    const isAppearanceTransition =
      !!document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
      setTheme(newTheme)
      return
    }
    let x = 0
    let y = 0
    if (element.current) {
      x = element.current?.getBoundingClientRect().left + element.current?.clientWidth / 2 || 0
      y = element.current?.getBoundingClientRect().top + element.current?.clientHeight / 2 || 0
    }
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    const transition = document.startViewTransition(async () => {
      setTheme(newTheme)
    })
    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
      document.documentElement.animate(
        {
          clipPath: isToDark ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in-out',
          pseudoElement: isToDark ? '::view-transition-old(root)' : '::view-transition-new(root)',
        }
      )
    })
  }

  return (
    <div ref={element} className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center justify-center">
          <MenuButton aria-label="Theme switcher" className="text-xl">
            {mounted ? resolvedTheme === 'dark' ? <LuMoon /> : <LuSun /> : <Blank />}
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="ring-opacity-5 absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black focus:outline-hidden dark:bg-gray-800">
            <RadioGroup value={theme} onChange={changeTheme}>
              <div className="p-1">
                {[
                  {
                    title: 'Light',
                    icon: <LuSun />,
                    value: 'light',
                  },
                  {
                    title: 'Dark',
                    icon: <LuMoon />,
                    value: 'dark',
                  },
                  {
                    title: 'System',
                    icon: <LuMonitor />,
                    value: 'system',
                  },
                ].map((item) => (
                  <Radio key={item.title} value={item.value}>
                    <MenuItem>
                      {({ focus }) => (
                        <button
                          className={`${
                            focus ? 'bg-primary-600 text-white' : ''
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <div className="mr-2">{item.icon}</div>
                          {item.title}
                          {theme === item.value && <LuCheck className="ml-2" />}
                        </button>
                      )}
                    </MenuItem>
                  </Radio>
                ))}
              </div>
            </RadioGroup>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}

export default ThemeSwitch
