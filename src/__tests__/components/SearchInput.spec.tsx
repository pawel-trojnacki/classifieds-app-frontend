import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import SearchInput from 'modules/home/components/SearchInput';
import { mockStoreWithThunk } from 'test_utils/mockStoreWithThunk';

const store = mockStoreWithThunk({
  filters: {
    search: '',
    page: 1,
  },
});

beforeEach(() => {
  render(
    <Provider store={store}>
      <SearchInput />
    </Provider>
  );
});

describe('SearchInput', () => {
  it('should render input with initial value', () => {
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();

    screen.debug();
  });

  it('should render typed value', async () => {
    const input = screen.getByDisplayValue('');
    const nodeText = 'some text';

    fireEvent.change(input, {
      target: {
        value: nodeText,
      },
    });

    await waitFor(() => {
      expect(input).toHaveDisplayValue(nodeText);
    });
  });
});
