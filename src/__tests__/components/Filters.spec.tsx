import { fireEvent, screen, waitFor, within } from '@testing-library/react';
import { renderWithStore } from 'test_utils/render-with-store';
import Filters from 'modules/home/components/Filters';
import { mockStore } from 'mock-store';
import { priceSteps } from 'modules/home/constants/price-steps';

const labels = ['Sort', 'Min price', 'Max price', 'With images'];
const initialSortOption = 'Newest';

const store = mockStore();

beforeEach(() => {
  // store added manually because it needs to be referenced
  renderWithStore(<Filters />, store);
});

describe('Filters', () => {
  it('should render Filters component with initial state', async () => {
    labels.forEach((label) => {
      expect(screen.getByLabelText(label)).toBeInTheDocument();
    });

    expect(screen.getByText(initialSortOption)).toBeInTheDocument();

    expect(await screen.findAllByTestId('mui-select')).toHaveLength(3);
  });

  it('should change global state values', async () => {
    const [sortButton, minPriceButton, maxPriceButton] = Array.from(
      document.querySelectorAll('[role=button]')
    );

    fireEvent.mouseDown(sortButton);

    await waitFor(() => {
      const sortListbox = document.body.querySelector('ul[role=listbox]');
      const sortItem = within(sortListbox as HTMLElement).getByText(
        /price desc/i
      );
      fireEvent.click(sortItem);
    });

    fireEvent.mouseDown(minPriceButton);

    await waitFor(() => {
      const minPriceListbox = document.body.querySelector('ul[role=listbox]');
      const minPriceItem = minPriceListbox!.childNodes[1];
      fireEvent.click(minPriceItem);
    });

    fireEvent.mouseDown(maxPriceButton);

    await waitFor(() => {
      const maxPriceListbox = document.body.querySelector('ul[role=listbox]');
      const maxPriceItem = maxPriceListbox!.childNodes[4];
      fireEvent.click(maxPriceItem);
    });

    console.log(store.getState());

    const {
      filters: { sort, minprice, maxprice },
    } = store.getState();

    expect(sort).toBe('pricedesc');
    expect(minprice).toBe(priceSteps[1]);
    // id 6 => max price always starts one step further than current min price
    expect(maxprice).toBe(priceSteps[6]);
  });
});
