import { fireEvent, screen, waitFor } from '@testing-library/react';
import SearchInput from 'modules/home/components/SearchInput';
import { renderWithStore } from 'test_utils/render-with-store';
import { mockStore } from 'test_utils/mock-store';

const store = mockStore();

describe('SearchInput', () => {
  it('should render input with initial value', () => {
    const { getByLabelText, getByRole } = renderWithStore(<SearchInput />);

    expect(getByLabelText('Search')).toBeInTheDocument();
    expect(getByRole('textbox')).toHaveDisplayValue('');

    screen.debug();
  });

  it('should render typed value', async () => {
    const { getByRole } = renderWithStore(<SearchInput />, store);

    expect(getByRole('textbox')).toBeInTheDocument();

    const input = getByRole('textbox');
    const nodeText = 'some text';

    fireEvent.change(input, {
      target: {
        value: nodeText,
      },
    });

    await waitFor(() => {
      const {
        filters: { search },
      } = store.getState();

      expect(input).toHaveDisplayValue(nodeText);
      expect(search).toBe(nodeText);
    });
  });
});
