import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Tabs from 'modules/home/components/Tabs';
import { categories } from 'constants/categories';
import { mockStoreWithThunk } from 'test_utils/mockStoreWithThunk';

const store = mockStoreWithThunk({
  filters: {
    category: 'all',
  },
});

beforeEach(() => {
  render(
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
});

describe('Tabs', () => {
  it('should render tabs correctly', () => {
    categories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });

    categories.forEach((category) => {
      expect(screen.getByAltText(category)).toBeInTheDocument();
    });
  });

  it('should change active tab', async () => {
    const buttons = await screen.findAllByRole('tab');

    expect(buttons[0]).toHaveAttribute('tabindex', '0');
    expect(buttons[1]).toHaveAttribute('tabindex', '-1');

    fireEvent.click(buttons[1]);

    await waitFor(() => {
      expect(buttons[0]).toHaveAttribute('tabindex', '-1');
      expect(buttons[1]).toHaveAttribute('tabindex', '0');
    });

    fireEvent.click(buttons[2]);

    await waitFor(() => {
      expect(buttons[0]).toHaveAttribute('tabindex', '-1');
      expect(buttons[1]).toHaveAttribute('tabindex', '-1');
      expect(buttons[2]).toHaveAttribute('tabindex', '0');
    });
  });
});
