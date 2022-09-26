import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {StatesComponent} from './states.component';
import {StatesModule} from './states.module';

export default {
  title: 'Core / States',
  component: StatesComponent,
  decorators: [
    moduleMetadata({ imports: [StatesModule]}),
  ],
} as Meta;

const Template: Story<StatesComponent> = (args: StatesComponent) => ({
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
