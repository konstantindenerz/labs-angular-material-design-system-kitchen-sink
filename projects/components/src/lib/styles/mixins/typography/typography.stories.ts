import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {TypographyComponent} from './typography.component';
import {TypographyModule} from './typography.module';

export default {
  title: 'Core / Typography',
  component: TypographyComponent,
  decorators: [
    moduleMetadata({imports: [TypographyModule]}),
  ],
} as Meta;

const Template: Story<TypographyComponent> = (props: TypographyComponent) => ({
  props,
});

export const Default = Template.bind({});
Default.args = {};
