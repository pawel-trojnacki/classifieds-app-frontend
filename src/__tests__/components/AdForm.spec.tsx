import { BrowserRouter } from 'react-router-dom';
import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import { renderWithStore } from 'test_utils/render-with-store';
import { server, rest } from 'test_utils/test-server';
import ComponentWithErrorAlert from 'test_utils/components/ComponentWithErrorAlert';
import CreateAdForm from 'modules/manage-ad/components/CreateAdForm';

const labels = ['Title', 'Price', 'Category', 'State', 'Description'];

beforeEach(() => {
  renderWithStore(
    <BrowserRouter>
      <ComponentWithErrorAlert>
        <CreateAdForm />
      </ComponentWithErrorAlert>
    </BrowserRouter>
  );
});

describe('CreateAdForm', () => {
  it('should render stepper and form fields', () => {
    expect(screen.getByTestId('mui-stepper')).toBeInTheDocument();
    expect(screen.getByText(/details/i)).toBeInTheDocument();
    expect(screen.getByText(/images/i)).toBeInTheDocument();

    expect(screen.getByRole('heading')).toHaveTextContent(
      /provide informations about your ad/i
    );

    labels.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    expect(screen.getByRole('textbox', { name: /title/i })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /description/i })
    ).toBeInTheDocument();

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /category/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /state/i })).toBeInTheDocument();

    expect(screen.getByTestId('loading-button')).toHaveTextContent(/next/i);
  });

  it('should render errors for empty fields and not for correctly filled', async () => {
    //   DOM selectors used to get and trigger Material UI select elements
    const buttons = document.querySelectorAll('[role=button]');
    const selectStateButton = buttons[1];

    fireEvent.mouseDown(selectStateButton!);

    const listbox = document.body.querySelector('ul[role=listbox]');
    const listItem = within(listbox as HTMLElement).getByText('used');
    fireEvent.click(listItem);

    fireEvent.click(screen.getByTestId('loading-button'));

    await waitFor(() => {
      expect(screen.queryByText(/you must select a state/i)).toBeNull();
      expect(screen.getByText(/title is required/i)).toBeInTheDocument();
      expect(screen.getByText(/price is required/i)).toBeInTheDocument();
      expect(
        screen.getByText(/you must select a catgory/i)
      ).toBeInTheDocument();
      expect(screen.getByText(/description is required/i)).toBeInTheDocument();
    });
  });

  it('should successfully call fetch request and render error alert with error from API', async () => {
    //   Setting server to return error after fetch request
    server.use(
      rest.post(`${process.env.REACT_APP_API_URL}/ads`, (req, res, ctx) => {
        return res.once(
          ctx.status(401),
          ctx.json({
            status: 'error',
            error: 'Not authorized',
            message: 'Not authorized',
          })
        );
      })
    );

    //   DOM selectors used to get and trigger Material UI select elements
    const [selectCategoryButton, selectStateButton] = Array.from(
      document.querySelectorAll('[role=button]')
    );

    fireEvent.mouseDown(selectCategoryButton);

    await waitFor(() => {
      const categoryListbox = document.body.querySelector('ul[role=listbox]');
      const categoryItem = within(categoryListbox as HTMLElement).getByText(
        'smartphones'
      );
      fireEvent.click(categoryItem);
    });

    fireEvent.mouseDown(selectStateButton);

    await waitFor(() => {
      const stateListbox = document.body.querySelector('ul[role=listbox]');
      const stateItem = within(stateListbox as HTMLElement).getByText('used');
      fireEvent.click(stateItem);
    });

    const titleInput = screen.getByRole('textbox', { name: /title/i });
    const descInput = screen.getByRole('textbox', { name: /description/i });
    const priceInput = screen.getByRole('spinbutton');

    fireEvent.change(titleInput, {
      target: { value: 'Some title' },
    });

    fireEvent.change(descInput, {
      target: { value: 'Lorem ipsum dolor sit amet' },
    });

    fireEvent.change(priceInput, {
      target: { value: 500 },
    });

    await waitFor(() => {
      fireEvent.click(screen.getByTestId('loading-button'));
    });

    // Checking if next step was rendered
    expect(screen.queryByText(/add images/i)).toBeInTheDocument();

    const saveAdButton = screen.getAllByTestId('loading-button')[1];
    expect(saveAdButton).toHaveTextContent(/save/i);

    fireEvent.click(saveAdButton);

    await waitFor(() => {
      expect(screen.getByTestId('error-alert')).toBeInTheDocument();
      expect(screen.getByText(/not authorized/i)).toBeInTheDocument();
    });
  });
});
