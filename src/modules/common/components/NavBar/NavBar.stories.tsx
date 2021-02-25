import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import store from 'store/root';
import ThemeProvider from 'theme/ThemeProvider';
import NavBar, { Props } from './NavBar';

export default {
  title: 'NavBar',
  component: NavBar,
} as Meta;

const Template: Story<Props> = (args) => <NavBar {...args} />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
Main.args = {
  isAuthenticated: true,
  type: 'main',
};
