import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import Loader from './Loader';
import { lightTheme } from 'theme/light-theme';

export default {
  title: 'Loader',
  component: Loader,
} as Meta;

const Template: Story = () => <Loader />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
