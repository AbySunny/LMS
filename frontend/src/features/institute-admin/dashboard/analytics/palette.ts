// SPDX-FileCopyrightText: 2026 Pace Wisdom Solutions Pvt. Ltd.
// SPDX-License-Identifier: Apache-2.0

/**
 * Chart colours aligned with the app's pastel brand theme (see `src/index.css`).
 * The raw pastels are too faint against white cards, so series use deep and
 * mid shades of the same hues — each at least 3:1 against white (WCAG 1.4.11).
 */
export const CHART_PALETTE = [
  '#2f78bd', // blue (brand primary)
  '#ce3c71', // pink (brand accent)
  '#9a58c0', // lavender
  '#4896df', // light blue
  '#e46996', // light pink
  '#b47cd3', // light lavender
  '#255c8b', // navy
  '#64748b', // slate
] as const

export const STATUS_COLORS = {
  active: '#2f78bd',
  inactive: '#cbd5e1',
} as const

/** Pick a stable colour for the nth series item, wrapping the palette. */
export const paletteColor = (index: number) => CHART_PALETTE[index % CHART_PALETTE.length]
