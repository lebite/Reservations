import timeUtils from '../../client/utils/timeUtils';

describe('timeUtils', () => {
  test('getAvailableFromBookings returns six timeslots when no bookings', (done) => {
    const restaurant = {
      maxSeating: 10,
      timeIntervals: 30,
      openTime: {
        hour: 10,
        minute: 0,
      },
      closeTime: {
        hour: 17,
        minute: 0,
      },
    };
    const bookings = [];
    const testTime = {
      hour: 11,
      minute: 30,
    };

    expect(timeUtils.getAvailableFromBookings(restaurant, bookings, testTime)).toHaveLength(6);
    done();
  });
});
