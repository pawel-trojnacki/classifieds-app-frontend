import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import AdCard, { Props } from './AdCard';
import { lightTheme } from 'theme/light-theme';
import { darkTheme } from 'theme/dark-theme';
import { mockAd } from '__mocks__/ad.mock';

const testAd = mockAd();

export default {
  title: 'AdCard',
  component: AdCard,
} as Meta;

const Template: Story<Props> = (args) => <AdCard {...args} />;

export const Light = Template.bind({});
Light.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
Light.args = {
  ad: testAd,
};

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
];
Dark.args = {
  ad: testAd,
};
