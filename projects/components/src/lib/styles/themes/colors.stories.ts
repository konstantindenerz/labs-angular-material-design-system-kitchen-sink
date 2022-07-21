import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ThemesMockComponent} from './mock/themes-mock.component';
import {ThemesMockModule} from './mock/themes-mock.module';

export default {
  title: 'Core / Colors',
  component: ThemesMockComponent,
  decorators: [
    moduleMetadata({imports: [ThemesMockModule]}),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'system'
    }
  }
} as Meta;

const Template: Story<ThemesMockComponent> = (props: ThemesMockComponent) => ({
  props: {},
});

export const Light = Template.bind({});
Light.parameters = {
  themes: {
    default: 'light'
  }
}

export const Dark = Template.bind({});
Dark.parameters = {
  themes: {
    default: 'dark'
  }
}
