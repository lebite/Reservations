import moment from 'moment';

const MAX_SLOTS = 6;

const timeUtils = {
  createTimeslots(restaurant, date = {}) {
    const {
      timeIntervals,
      openTime,
      closeTime,
    } = restaurant;
    Object.assign(openTime, date);
    Object.assign(closeTime, date);

    const begin = moment(date).startOf('minute');

    const differenceToInterval = begin.minutes() % timeIntervals;
    begin.add(differenceToInterval, 'minute');

    const timeSlots = [];
    let timeslot = begin.clone();
    for (let i = 0; i < MAX_SLOTS; i += 1) {
      timeslot.add(timeIntervals, 'minute');
      if (timeslot >= moment(openTime)) {
        if (timeslot > moment(closeTime)) {
          break;
        } else {
          timeSlots.push(timeslot);
        }
        timeslot = timeslot.clone();
      }
    }

    return timeSlots;
  },

  getAvailableFromBookings(restaurant, bookings) {
    const timeSlots = this.createTimeslots(restaurant);

    return timeSlots;
  },
};

export default timeUtils;
