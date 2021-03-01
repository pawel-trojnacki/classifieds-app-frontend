/* eslint-disable jest/no-mocks-import */
import { render, cleanup, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { mockAd } from '__mocks__/ad.mock';
import AdCard from 'modules/ad/components/AdCard';
import { AdCategories } from 'types/ad-categories.enum';

const testTitle = 'Some title';
const testPrice = 1599;

const ad = mockAd('ad1', testTitle, 'u1', AdCategories.Smartphones, testPrice);

afterEach(cleanup);
describe('AdCard', () => {
  it('should display ad title', () => {
    const { getByText } = render(
      <Router>
        <AdCard ad={ad} />
      </Router>
    );
    expect(getByText(testTitle)).toBeInTheDocument();
  });
});
