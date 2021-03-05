import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import AdListItem, { Props } from './AdListItem';
import { lightTheme } from 'theme/light-theme';
import { darkTheme } from 'theme/dark-theme';
import { mockAd } from 'test_utils/mocks/ad.mock';

const testAd = mockAd();

export default {
  title: 'AdListItem',
  component: AdListItem,
} as Meta;

const Template: Story<Props> = (args) => <AdListItem {...args} />;

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
