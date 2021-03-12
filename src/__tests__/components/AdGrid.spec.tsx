import { renderWithRouter } from 'test_utils/render-with-router';
import { mockAdList } from 'mocks/ad.mock';
import AdGrid from 'modules/ad/components/AdGrid';

const ads = mockAdList();
const expectedAdsNumber = 4;
const expectedLoadersNumber = 4;

describe('AdGrid', () => {
  it('should display a list of ads', async () => {
    const { findAllByTestId } = renderWithRouter(<AdGrid ads={ads} />);

    const displayedAds = await findAllByTestId('ad-card');
    expect(displayedAds).toHaveLength(expectedAdsNumber);
  });

  it('should display a list of loading skeletons', async () => {
    const { findAllByTestId } = renderWithRouter(<AdGrid />);

    const loaders = await findAllByTestId('ad-loader');
    expect(loaders).toHaveLength(expectedLoadersNumber);
  });
});
