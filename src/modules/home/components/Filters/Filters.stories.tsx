import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import Filters from './Filters';
import { lightTheme } from 'theme/light-theme';
import store from 'store/root';

export default {
  title: 'Filters',
  component: Filters,
} as Meta;

const Template: Story = () => <Filters />;

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
