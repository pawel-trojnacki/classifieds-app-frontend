import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import AdList, { Props } from './AdList';
import { lightTheme } from 'theme/light-theme';
import { darkTheme } from 'theme/dark-theme';
import { mockAdList } from 'mocks/ad.mock';

const testAds = mockAdList();

export default {
  title: 'AdList',
  component: AdList,
} as Meta;

const Template: Story<Props> = (args) => <AdList {...args} />;

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

export const FavouritesLight = Template.bind({});
FavouritesLight.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
FavouritesLight.args = {
  ads: testAds,
  favourites: true,
};

export const FavouritesDark = Template.bind({});
FavouritesDark.decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
];
FavouritesDark.args = {
  ads: testAds,
  favourites: true,
};

export const WithLoaders = Template.bind({});
WithLoaders.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
