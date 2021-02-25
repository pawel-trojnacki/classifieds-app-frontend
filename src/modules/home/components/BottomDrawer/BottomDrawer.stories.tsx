import { Story, Meta } from "@storybook/react/types-6-0";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import store from "store/root";
import BottomDrawer, { Props } from "./BottomDrawer";
import { lightTheme } from "theme/light-theme";

export default {
  title: "BottomDrawer",
  component: BottomDrawer,
} as Meta;

const Template: Story<Props> = (args) => <BottomDrawer {...args} />;

export const Main = Template.bind({});
Main.decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <Story />
      </ThemeProvider>
    </Provider>
  ),
];

Main.args = {
  isOpen: true,
  toggleDrawer: () => {},
};
