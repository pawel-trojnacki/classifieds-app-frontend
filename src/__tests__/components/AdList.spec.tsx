import { renderWithRouter } from 'test_utils/render-with-router';
import { mockAdList } from 'mocks/ad.mock';
import AdList from 'modules/ad/components/AdList';

const ads = mockAdList();
const expectedAdsNumber = 4;

describe('AdList', () => {
  it('should display a list of ads', async () => {
    const { findAllByTestId } = renderWithRouter(<AdList ads={ads} />);

    const displayedAds = await findAllByTestId('ad-list-item');

    expect(displayedAds).toHaveLength(expectedAdsNumber);
  });
});
