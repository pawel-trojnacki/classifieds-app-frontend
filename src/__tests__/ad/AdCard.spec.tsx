/* eslint-disable jest/no-mocks-import */
import { renderWithRouter } from 'src/test-utils';
import { mockAd } from '__mocks__/ad.mock';
import AdCard from 'modules/ad/components/AdCard';
import { AdCategories } from 'types/ad-categories.enum';

const testTitle = 'Some title';
const testPrice = 1599;
const testTitleLong = 'Lorem ipsum dolor sit amet consectetur';
const lastWord = 'consectetur';

const ad = mockAd('id1', testTitle, 'u1', AdCategories.Smartphones, testPrice);
const adWithLongTitle = mockAd('id1', testTitleLong);

describe('AdCard', () => {
  it('should display a title', () => {
    const { getByText } = renderWithRouter(<AdCard ad={ad} />);

    expect(getByText(testTitle)).toBeInTheDocument();
  });

  it('should not display last word of title', () => {
    const { queryByText } = renderWithRouter(<AdCard ad={adWithLongTitle} />);

    expect(queryByText(lastWord)).not.toBeInTheDocument();
  });

  it('should display formated price', () => {
    const { getByText } = renderWithRouter(<AdCard ad={ad} />);

    expect(getByText(`$${testPrice}`)).toBeInTheDocument();
  });
});
