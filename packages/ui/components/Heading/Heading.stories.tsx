import { ComponentStory, ComponentMeta } from '@storybook/react';

import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {},
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {};
