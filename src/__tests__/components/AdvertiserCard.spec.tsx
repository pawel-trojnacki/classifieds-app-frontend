import { render } from '@testing-library/react';
import { mockUser } from 'test_utils/mocks/user.mock';
import AdvertiserCard from 'modules/single-ad/components/AdvertiserCard';

const { username, phone, email, isOnline, lastSeen } = mockUser(
  'user_id',
  'John Doe',
  'fake@email.com',
  '+48123456789',
  ['ad_id'],
  [],
  true
);

describe('AdvertiserCard', () => {
  it('should render user info', async () => {
    const { getByText, findAllByTestId, queryByText } = render(
      <AdvertiserCard
        username={username}
        phone={phone}
        email={email}
        isOnline={isOnline}
        lastSeen={lastSeen}
      />
    );

    const contactItems = await findAllByTestId('contact-item');

    expect(contactItems).toHaveLength(2);

    expect(getByText(username)).toBeInTheDocument();
    expect(getByText(phone)).toBeInTheDocument();
    expect(getByText(email)).toBeInTheDocument();

    // last seen date should not be displayed if user is online
    expect(queryByText(/last seen/i)).toBeNull();
    expect(queryByText(/ago/i)).toBeNull();

    expect(getByText(/online now/i)).toBeInTheDocument();
  });
});
