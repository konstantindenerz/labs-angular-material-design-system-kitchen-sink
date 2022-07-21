export interface Color {
  key: string,
  description?: string,
  value?: string,
}

export interface ColorGroup {
  key: string;
  colors: Color[];
}

export const GROUPS: ColorGroup[] = [
  {
    key: 'core',
    colors: [
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
    ]
  },
  {
    key: 'emphasis',
    colors: [
      {key: '--color-emphasis-1'},
      {key: '--color-emphasis-2'},
      {key: '--color-emphasis-3'},
      {key: '--color-emphasis-4'},
      {key: '--color-emphasis-5'},
    ]
  },
  {
    key: 'elevation',
    colors: [
      {key: '--color-highlight'},
    ]
  },
  {
    key: 'placeholder',
    colors: [
      {key: '--color-content-placeholder'},
      {key: '--color-content-placeholder-highlight'},
    ]
  },
  {
    key: 'outline',
    colors: [
      {key: '--color-outline'},
      {key: '--color-outline-focus'}
    ]
  }
]
