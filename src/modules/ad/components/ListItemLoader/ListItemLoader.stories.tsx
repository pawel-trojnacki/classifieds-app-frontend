import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import ListItemLoader from './ListItemLoader';
import { lightTheme } from 'theme/light-theme';

export default {
  title: 'ListItemLoader',
  component: ListItemLoader,
} as Meta;

const Template: Story = () => <ListItemLoader />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
