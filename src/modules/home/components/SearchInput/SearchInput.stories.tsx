import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import SearchInput from './SearchInput';
import { lightTheme } from 'theme/light-theme';
import { darkTheme } from 'theme/dark-theme';
import store from 'store/root';

export default {
  title: 'SearchInput',
  component: SearchInput,
} as Meta;

const Template: Story = () => <SearchInput />;

export const Light = Template.bind({});
Light.decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
