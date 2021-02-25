import { BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/styles';

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <Story />
      </StylesProvider>
    </BrowserRouter>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#0A0F20',
      },
    ],
  },
};
