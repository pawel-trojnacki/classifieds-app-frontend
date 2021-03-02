import { fireEvent, render, waitFor } from '@testing-library/react';
import TextInput from 'modules/common/components/TextInput';

describe('TextInput', () => {
  it('should render TextInput correctly', async () => {
    const { getByTestId, findAllByTestId } = render(
      <div>
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Password" name="password" type="password" />
      </div>
    );

    const allInputs = await findAllByTestId('text-input');
    const allPasswordInputs = await findAllByTestId('password-adornment');

    expect(allInputs).toHaveLength(2);
    expect(getByTestId('password-adornment')).toBeInTheDocument();
    expect(allPasswordInputs).toHaveLength(1);
  });

  it('should change input value correctly', async () => {
    const { getByDisplayValue } = render(<TextInput />);

    const input = getByDisplayValue('');

    fireEvent.change(input, {
      target: {
        value: 'some text',
      },
    });

    const nodeText = await waitFor(() => getByDisplayValue('some text'));

    expect(nodeText).toBeInTheDocument();
  });
});
