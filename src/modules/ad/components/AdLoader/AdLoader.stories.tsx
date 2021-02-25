import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import AdLoader from './AdLoader';
import { lightTheme } from 'theme/light-theme';

export default {
  title: 'AdLoader',
  component: AdLoader,
} as Meta;

const Template: Story = () => <AdLoader />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
