import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import config from './config/config'

export const locales = config.LANG
export const localePrefix = 'as-needed'

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix })
