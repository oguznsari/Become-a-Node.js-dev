const Reservation = require('./reservation');

describe(`combineDateTime`, () => {
  it(`should return an ISO 8601 date and time with valid input`, () => {
    const date = '27/07/10';
    const time = '06:02 AM';

    const expected = '2027-07-10T06:02:00.000Z';
    const actual = Reservation.combineDateTime(date, time);

    expect(actual).toEqual(expected);
  });

  it(`should return null on a bad date and time`, () => {
    const date = '!@#$';
    const time = 'fail';

    expect(Reservation.combineDateTime(date, time)).toEqual(null);
  });
});
