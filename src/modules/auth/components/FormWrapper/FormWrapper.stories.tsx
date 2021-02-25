import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import FormWrapper from './FormWrapper';
import { lightTheme } from 'theme/light-theme';

export default {
  title: 'Auth Form Wrapper',
  component: FormWrapper,
} as Meta;

const Template: Story = () => <FormWrapper />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
