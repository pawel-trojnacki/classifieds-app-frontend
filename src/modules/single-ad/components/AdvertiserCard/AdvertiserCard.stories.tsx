import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import store from 'store/root';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from 'theme/light-theme';
import { darkTheme } from 'theme/dark-theme';
import { mockUser } from 'test_utils/mocks/user.mock';
import AdvertiserCard, { Props } from './AdvertiserCard';

const { username, phone, email, isOnline, lastSeen } = mockUser();

const args = { username, phone, email, isOnline, lastSeen };

export default {
  title: 'AdvertiserCard',
  component: AdvertiserCard,
} as Meta;

const Template: Story<Props> = (args) => <AdvertiserCard {...args} />;

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
Light.args = args;

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
Dark.args = args;
