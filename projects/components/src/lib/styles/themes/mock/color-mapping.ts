export interface Color {
  key: string,
  description?: string,
  value?: string
}

export const COLORS: Color[] = [
  {key: '--color-primary', description: 'The primary color.'},
  {
    key: '--color-on-primary',
    description: 'The content color that should be used for elements with primary color as background.'
  },
  {key: '--color-background', description: 'The background color'},
  {
    key: '--color-on-background',
    description: 'The content color that should be used for elements with background color as background'
  },
  {key: '--color-surface', description: 'The background color for surfaces like cards.'},
  {key: '--color-on-surface'},
  {key: '--color-highlight'},
  {key: '--color-content-placeholder'},
  {key: '--color-content-placeholder-highlight'},
  {key: '--color-emphasis-1'},
  {key: '--color-emphasis-2'},
  {key: '--color-emphasis-3'},
  {key: '--color-emphasis-4'},
  {key: '--color-emphasis-5'},
  {key: '--color-outline'},
  {key: '--color-outline-focus'},
]
