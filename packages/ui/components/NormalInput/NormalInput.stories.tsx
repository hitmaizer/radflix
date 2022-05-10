import { ComponentStory, ComponentMeta } from '@storybook/react';

import NormalInput from './NormalInput';

export default {
  title: 'Components/NormalInput',
  component: NormalInput,
  args: {},
} as ComponentMeta<typeof NormalInput>;

const Template: ComponentStory<typeof NormalInput> = (args) => (
  <NormalInput {...args} />
);

export const Default = Template.bind({});
Default.args = {};
