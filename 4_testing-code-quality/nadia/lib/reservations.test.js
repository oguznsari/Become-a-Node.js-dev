const reservations = require('./reservations');
const Reservation = require('./schema/reservation');

describe(`validate`, () => {
  it(`should resolve with no optional fields`, () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'family',
      email: 'username@example.com'
    });

    return reservations.validate(reservation)     // this returns a promise
      .then(value => expect(value).toEqual(reservation));
  });

  it(`should reject with an invalid email`, () => {
    const reservation = new Reservation({
      date: '2017/06/10',
      time: '06:02 AM',
      party: 4,
      name: 'family',
      email: 'wrongEmail'
    });

    expect.assertions(1);

    return reservations.validate(reservation)
      .catch(error => expect(error).toBeInstanceOf(Error));
  });
});
