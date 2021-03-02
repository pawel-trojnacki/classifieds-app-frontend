/* eslint-disable jest/no-mocks-import */
import { renderWithRouter } from 'test_utils/renderWithRouter';
import { mockAd } from '__mocks__/ad.mock';
import AdListItem from 'modules/ad/components/AdListItem';
import { AdCategories } from 'types/ad-categories.enum';

const testTitle = 'Some title';
const testPrice = 1599;

const ad = mockAd('id1', testTitle, 'u1', AdCategories.Smartphones, testPrice);

describe('AdListItem', () => {
  it('should render AdListItem with expected title and price', () => {
    const { getByText } = renderWithRouter(<AdListItem ad={ad} />);

    expect(getByText(testTitle)).toBeInTheDocument();
    expect(getByText(`$${testPrice}`)).toBeInTheDocument();
  });

  it('should render image with expected alt text', () => {
    const { getByAltText } = renderWithRouter(<AdListItem ad={ad} />);
    expect(getByAltText(testTitle)).toBeInTheDocument();
  });
});
