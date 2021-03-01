/* eslint-disable jest/no-mocks-import */
import { renderWithRouter } from 'src/test-utils';
import { mockAdList } from '__mocks__/ad.mock';
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
