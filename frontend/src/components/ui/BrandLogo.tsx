// SPDX-FileCopyrightText: 2026 Pace Wisdom Solutions Pvt. Ltd.
// SPDX-License-Identifier: Apache-2.0

import logo from '@/assets/Vector.svg'

export const APP_NAME = 'TutorLoom'

const SIZES = {
  sm: { icon: 'h-8 w-8', text: 'text-xl' },
  md: { icon: 'h-10 w-10', text: 'text-2xl' },
  lg: { icon: 'h-14 w-14', text: 'text-3xl' },
} as const

interface BrandLogoProps {
  size?: keyof typeof SIZES
  /** Hide the wordmark and show the icon alone, e.g. in the collapsed sidebar. */
  iconOnly?: boolean
  className?: string
}

/** Platform logo: the TutorLoom icon with the two-tone wordmark beside it. */
export default function BrandLogo({ size = 'md', iconOnly = false, className = '' }: Readonly<BrandLogoProps>) {
  const s = SIZES[size]
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={logo} alt={APP_NAME} className={`${s.icon} object-contain shrink-0`} />
      {!iconOnly && (
        // The img alt already names the platform, so the visible wordmark is hidden from screen readers.
        <span aria-hidden="true" className={`${s.text} font-extrabold tracking-tight`}>
          <span className="text-slate-900">Tutor</span>
          <span className="text-brand-teal">Loom</span>
        </span>
      )}
    </span>
  )
}
