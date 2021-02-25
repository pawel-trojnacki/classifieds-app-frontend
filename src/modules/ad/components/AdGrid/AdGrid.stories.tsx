import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import AdGrid, { Props } from './AdGrid';
import { lightTheme } from 'theme/light-theme';
import { darkTheme } from 'theme/dark-theme';
import { mockAdList } from '__mocks__/ad.mock';

const testAds = mockAdList();

export default {
  title: 'AdGrid',
  component: AdGrid,
} as Meta;

const Template: Story<Props> = (args) => <AdGrid {...args} />;

export const Light = Template.bind({});
Light.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
Light.args = {
  ads: testAds,
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
  ads: testAds,
};

export const WithLoaders = Template.bind({});
WithLoaders.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
