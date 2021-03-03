import { render } from '@testing-library/react';
import DateComponent from 'modules/ad/components/Date';

const currentDate = new Date();
let oneHourAgo = new Date();
oneHourAgo.setHours(currentDate.getHours() - 1);
let twoMonthsAgo = new Date();
twoMonthsAgo.setMonth(currentDate.getMonth() - 3);

describe('Date', () => {
  it("should render 'just now'", () => {
    const { getByText } = render(<DateComponent date={currentDate} />);
    expect(getByText('just now')).toBeInTheDocument();
  });

  it("should render '1 hour ago'", () => {
    const { getByText } = render(<DateComponent date={oneHourAgo} />);
    expect(getByText('1 hour ago')).toBeInTheDocument();
  });

  it("should render '2 months ago'", () => {
    const { getByText } = render(<DateComponent date={twoMonthsAgo} />);
    expect(getByText('2 months ago')).toBeInTheDocument();
  });
});
