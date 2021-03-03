import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Filters from 'modules/home/components/Filters';
import { mockStoreWithThunk } from 'test_utils/mockStoreWithThunk';
import { initialState } from 'store/filters/reducer';
import { Sort } from 'types/sort.enum';

const store = mockStoreWithThunk({
  filters: initialState,
});

const editedStore = mockStoreWithThunk({
  filters: {
    ...initialState,
    sort: Sort.PriceAsc,
  },
});

const labels = ['Sort', 'Min price', 'Max price', 'With images'];

const initialSortValue = 'Newest';

describe('Filters', () => {
  it('should render Filters component with initial state', async () => {
    const { getByLabelText, getByText, findAllByRole } = render(
      <Provider store={store}>
        <Filters />
      </Provider>
    );
    labels.forEach((label) => {
      expect(getByLabelText(label)).toBeInTheDocument();
    });

    expect(getByText(initialSortValue)).toBeInTheDocument();

    expect(await findAllByRole('button')).toHaveLength(3);
  });

  it('should render Filters component with edited state', async () => {
    const { findAllByTestId, getByText } = render(
      <Provider store={editedStore}>
        <Filters />
      </Provider>
    );

    const inputs = await findAllByTestId('mui-select-input');

    expect(inputs[0]).toHaveDisplayValue('priceasc');

    expect(getByText(/price asc/i)).toBeInTheDocument();
  });
});
