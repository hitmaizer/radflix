import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logged from './Logged';

export default {
  title: 'Components/Logged',
  component: Logged,
  args: {},
} as ComponentMeta<typeof Logged>;

const Template: ComponentStory<typeof Logged> = (args) => <Logged {...args} />;

export const Default = Template.bind({});
Default.args = {};
