import { fireEvent, render, waitFor } from '@testing-library/react';
import { ArrowBack as Icon } from '@material-ui/icons';
import IconButton from 'modules/common/components/IconButton';

const tooltip = 'Some helper text';

describe('IconButton', () => {
  it('should display tooltip on hover', async () => {
    const { getByText, getByTestId } = render(
      <IconButton tooltip={tooltip}>
        <Icon />
      </IconButton>
    );

    fireEvent.mouseEnter(getByTestId('icon-button'));
    const nodeText = await waitFor(() => getByText(tooltip));
    expect(nodeText).toBeInTheDocument();
  });

  it('should render span component insted of button', () => {
    const { container } = render(
      <IconButton tooltip={tooltip} link>
        <Icon />
      </IconButton>
    );

    const button = container.querySelector('button');
    const spanList = container.querySelectorAll('span');

    expect(button).toBeNull();
    expect(spanList.length).toBe(2);
  });
});
