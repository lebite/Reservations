import moment from 'moment';

const MAX_SLOTS = 6;

const timeUtils = {
  combine(time, date) {
    Object.keys(date).forEach((key) => {
      if (key !== 'hour' && key !== 'minute') {
        time[key] = date[key];
      }
    });
    return time;
  },

  createTimeslots(restaurant, date = {}) {
    const {
      timeIntervals,
      openTime,
      closeTime,
    } = restaurant;
    this.combine(openTime, date);
    this.combine(closeTime, date);

    const begin = moment(date).startOf('minute').startOf('second');

    const differenceToInterval = begin.minutes() % timeIntervals;
    begin.add(timeIntervals - differenceToInterval, 'minute');

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

  createFullTimesList(restaurant) {
    const {
      timeIntervals,
      openTime,
      closeTime,
    } = restaurant;

    const timeSlots = [];

    const begin = moment(openTime).startOf('minute').startOf('second');
    let timeslot = begin.clone();

    while (timeslot < moment(closeTime)) {
      timeSlots.push(timeslot);
      timeslot.add(timeIntervals, 'minute');

      timeslot = timeslot.clone();
    }
    return timeSlots;
  },

  getAvailableFromBookings(restaurant, bookings, date = {}) {
    let timeSlots = this.createTimeslots(restaurant, date);

    timeSlots = timeSlots.filter((slot) => {
      const next = moment(slot).add(restaurant.timeIntervals, 'minute');

      return (bookings.reduce((accumulator, current) => {
        if (current >= slot && current < next) {
          return accumulator + 1;
        }
        return accumulator;
      }, 0) < restaurant.maxSeating);
    });

    return timeSlots;
  },
};

export default timeUtils;
