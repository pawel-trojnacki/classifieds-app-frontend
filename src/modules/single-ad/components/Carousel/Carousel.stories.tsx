import { Story, Meta } from '@storybook/react/types-6-0';
import { Provider } from 'react-redux';
import store from 'store/root';
import ThemeProvider from 'theme/ThemeProvider';
import { mockedImages } from 'test_utils/mocks/ad.mock';
import Carousel, { Props } from './Carousel';

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta;

const Template: Story<Props> = (args) => <Carousel {...args} />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];
Main.args = {
  images: mockedImages,
};
