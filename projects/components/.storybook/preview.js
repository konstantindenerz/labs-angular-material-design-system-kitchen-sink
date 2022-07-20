import {setCompodocJson} from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import {viewports} from './viewports';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {moduleMetadata} from "@storybook/angular";
import {NAVIGATION_ITEMS} from "../src/lib/navigation-drawer/navigation-drawer-items.token";
import {faDashboard} from "@fortawesome/free-solid-svg-icons/faDashboard";
import {faTasks} from "@fortawesome/free-solid-svg-icons/faTasks";
import {faPieChart} from "@fortawesome/free-solid-svg-icons/faPieChart";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";


const EXAMPLE_NAVIGATION_ITEMS =
  [
    {icon: faDashboard, title: 'Dashboard', route: ['dashboard']},
    {icon: faTasks, title: 'Tasks', route: ['tasks']},
    {icon: faPieChart, title: 'Reporting', route: ['reporting']},
    {icon: faCog, title: 'Settings', route: ['settings']},
  ];

setCompodocJson(docJson);

export const parameters = {
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {inlineStories: true},
  themes: {
    default: 'light',
    list: [
      {name: 'light', class: 'labs-light-theme', color: 'white'},
      {name: 'dark', class: 'labs-dark-theme', color: 'black'}
    ]
  },
  backgrounds: {
    default: 'background',
    values: [
      {
        name: 'surface',
        value: 'var(--color-surface)',
      },
      {
        name: 'background',
        value: 'var(--color-background)',
      },
    ],
  },
  viewport: {
    viewports,
  },
  options: {
    storySort: {
      order: ['Layouts', 'Core', 'Components'],
    },
  },
}

/**
 * NAVIGATION_ITEMS Provider is a workaround, because Storybook doesn't inject story providers in root
 */

export const decorators = [
  moduleMetadata({
    imports: [BrowserAnimationsModule],
    providers: [{provide: NAVIGATION_ITEMS, useValue: EXAMPLE_NAVIGATION_ITEMS}]
  }),
];
