import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {ElevationComponent} from './elevation.component';
import {ElevationModule} from './elevation.module';

export default {
  title: 'Core / Elevation',
  component: ElevationComponent,
  decorators: [
    moduleMetadata({ imports: [ElevationModule]}),
  ],
} as Meta;

const Template: Story<ElevationComponent> = (args: ElevationComponent) => ({
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
