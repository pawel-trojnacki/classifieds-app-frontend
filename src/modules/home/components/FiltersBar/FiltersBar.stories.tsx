import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import store from 'store/root';
import FiltersBar from './FiltersBar';
import { lightTheme } from 'theme/light-theme';

export default {
  title: 'FiltersBar',
  component: FiltersBar,
} as Meta;

const Template: Story = () => <FiltersBar />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
