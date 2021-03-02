import { fireEvent, render, waitFor } from '@testing-library/react';
import UseDidMountExample from 'test_utils/components/UseDidMountExample';

const initialTextNode = 'text';
const newTextNode = 'new text';

describe('useDidMountEffect', () => {
  it('should not render initial text value', () => {
    const { queryByText } = render(<UseDidMountExample />);

    expect(queryByText(initialTextNode)).toBeNull();
  });

  it('should render new text value after state change', async () => {
    const { queryByText, getByTestId } = render(<UseDidMountExample />);

    const button = getByTestId('button');
    fireEvent.click(button);

    const nodeText = await waitFor(() => queryByText(newTextNode));

    expect(nodeText).toBeInTheDocument();
  });
});
