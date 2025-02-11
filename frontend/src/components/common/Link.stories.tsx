import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import reducers from '../../redux/reducers/reducers';
import Link, { LinkProps } from './Link';

const store = createStore(reducers);

export default {
  title: 'Link',
  component: Link,
  decorators: [
    Story => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
} as Meta;

const Template: StoryFn<LinkProps> = args => <Link {...args}>a link</Link>;

// @todo: the Link depends on some router.tsx global functions
//        that would require mocking at the webpack layer.

export const Basic = Template.bind({});
Basic.args = {
  routeName: 'namespaces',
  params: {},
  search: '',
  state: {},
};

export const Params = Template.bind({});
Params.args = {
  routeName: 'node',
  params: { name: 'anode' },
};

export const AutoTooltip = Template.bind({});
AutoTooltip.args = {
  routeName: 'node',
  params: { name: 'anode' },
  tooltip: true,
};

export const ExplicitTooltip = Template.bind({});
ExplicitTooltip.args = {
  routeName: 'node',
  params: { name: 'anode' },
  tooltip: 'A tooltip',
};
