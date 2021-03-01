import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import FormLoader from './FormLoader';
import { lightTheme } from 'theme/light-theme';

export default {
  title: 'FormLoader',
  component: FormLoader,
} as Meta;

const Template: Story = () => <FormLoader />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
