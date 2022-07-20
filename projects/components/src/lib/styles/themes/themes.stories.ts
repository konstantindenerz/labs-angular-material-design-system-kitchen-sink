import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ThemesMockComponent} from './mock/themes-mock.component';
import {ThemesMockModule} from './mock/themes-mock.module';

export default {
  title: 'Core / Theming',
  component: ThemesMockComponent,
  decorators: [
    moduleMetadata({ imports: [ThemesMockModule]}),
  ],
} as Meta;

const Template: Story<ThemesMockComponent> = (props: ThemesMockComponent) => ({
  props: {},
});

export const Default = Template.bind({});
Default.args = {};
