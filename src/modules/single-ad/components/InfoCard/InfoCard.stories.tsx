import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import store from 'store/root';
import { ThemeProvider } from '@material-ui/core';
import { lightTheme } from 'theme/light-theme';
import { darkTheme } from 'theme/dark-theme';
import { mockAd } from '__mocks__/ad.mock';
import InfoCard, { Props } from './InfoCard';

const { title, price, state, createdAt, description } = mockAd();

const args = { title, price, state, createdAt, description };

export default {
  title: 'InfoCard',
  component: InfoCard,
} as Meta;

const Template: Story<Props> = (args) => <InfoCard {...args} />;

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
