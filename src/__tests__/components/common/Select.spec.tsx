import { fireEvent, render, screen } from '@testing-library/react';
import Select, { Props } from 'modules/common/components/Select';

const value = '';
const label = 'Example label';
const id = 'select';
const options = [{ value: 'option 1' }, { value: 'option 2' }];

const props: Props = {
  value,
  label,
  id,
  handleChange: jest.fn(),
  options,
};

beforeEach(() => {
  render(<Select {...props} />);
});

describe('ComponentName', () => {
  it('should render select component correctly', () => {
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
  });

  it('should render options', () => {
    fireEvent.mouseDown(screen.getByRole('button'));

    options.forEach(({ value }) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
});
