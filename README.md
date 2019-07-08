# Reservation Module

## `GET /`

**Input**: none

**Output**: `bundle.js` which can be used by proxy servers

## `GET /:restaurant_id/reservations`

**Input**: `restaurant_id` which will be used to look for a particular restaurant’s availability

**Output**: JSON with the number of times the restaurant was booked that day and the timeslots available to book past the current date and time

```
{
  "restaurant_id": <number>,
  "restaurant_information": {
    "restaurant_open_time": {
      "hour": <number>,
      "minute": <number>
    },
    "restaurant_close_time": {
      "hour": <number>,
      "minute": <number>
    },
    "time_intervals": <number>,
    "max_seating": <number>,
    "max_party_size": <number>
  },
  "bookings": [
    {
      "_id": <string>,
      "booking_time": <datetime>,
      "party_qty": <number>,
      "restaurant_id": <number>
    },
    {
      "_id": <string>,
      "booking_time": <datetime>,
      "party_qty": <number>,
      "restaurant_id": <number>
    }, ...
  ]
}
```

## `POST /:restaurant_id/reservations`

**Inputs**: 
- `restaurant_id` which will be used to look for a particular restaurant’s availability
- `datetime` which will be used to refine results for restaurant availability

**Output**: JSON with the times after the selected date/time with that are available to book
```
{
  "bookings": [
    {
      "_id": <string>,
      "booking_time": <datetime>,
      "party_qty": <number>,
      "restaurant_id": <number>
    }, ...
  ]
}
```
### Bare Minimum Requirements: 

A user should be able to:
- View availability after current datetime
- Select date and time and view availability within 2.5 hours of selected time if it exists
- Scroll down and see the collapsed reservation component anchored to the sidebar

### Stretch Goals:

A user should be able to
- Click confirm reservation and have the reservation held for them for five minutes

## MongoDB Data Schema
MongoDB is the best choice for storing this data because  MongoDB is ideal for situations where you expect high write loads.

Reservation data is very dynamic. Customers can create new reservations, cancel reservations, and update reservations unexpectedly and MongoDB can accommodate that.


### Restaurant Schema
```
{
  _id: Number,
  time_intervals: Number,
  max_seating: Number,
  max_party_size: Number,
  restaurant_open_time: { hour: Number, minute: Number },
  restaurant_close_time: { hour: Number, minute: Number },
}
```

### Reservation Schema
```
{
  booking_time: Date,
  party_qty: Number,
  restaurant_id: Number,
}
```
