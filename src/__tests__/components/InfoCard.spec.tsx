import { render } from '@testing-library/react';
import { mockAd } from 'mocks/ad.mock';
import InfoCard from 'modules/single-ad/components/InfoCard';

const { title, price, state, createdAt, description } = mockAd();

describe('InfoCard', () => {
  it('should render info about the ad', () => {
    const { getByText } = render(
      <InfoCard
        title={title}
        price={price}
        state={state}
        createdAt={createdAt}
        description={description}
      />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(`$${price}`)).toBeInTheDocument();
    expect(getByText(`State: ${state}`)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();

    // should display formated price
    expect(getByText(/ago/i)).toBeInTheDocument();
  });
});
