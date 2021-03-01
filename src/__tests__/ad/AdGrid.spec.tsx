/* eslint-disable jest/no-mocks-import */
import { renderWithRouter } from 'src/test-utils';
import { mockAdList } from '__mocks__/ad.mock';
import AdGrid from 'modules/ad/components/AdGrid';

const ads = mockAdList();
const expectedAdsNumber = 4;

describe('AdGrid', () => {
  it('should display a list of ads', async () => {
    const { findAllByTestId } = renderWithRouter(<AdGrid ads={ads} />);

    const displayedAds = await findAllByTestId('ad-card');

    expect(displayedAds).toHaveLength(expectedAdsNumber);
  });
});
