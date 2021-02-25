import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeProvider } from '@material-ui/core';
import Select, { Props } from './Select';
import { lightTheme } from 'theme/light-theme';
import { minPriceOptions } from 'modules/home/constants/price-steps';

const props = {
  value: '',
  label: 'Min price',
  handleChange: () => {},
  id: 'min-price-filter',
  options: minPriceOptions,
};

export default {
  title: 'Select',
  component: Select,
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  ),
];
Main.args = props;
