# Reservation Module

## Apearance and Behavior

![](https://docs.google.com/drawings/d/e/2PACX-1vSFMSOOaAvGfGsSGaLSTxMsAdASqoAdO8HagoE0dy5U4DvjTJ988csG0tx2zvE08WnO4WERxO9D2bRd/pub?w=2240&h=1845)

### Bare Minimum Requirements: 

A user should be able to:
- View availability after current datetime on page load if any exists
- Select date and time and request availability within 2.5 hours of selected time if any exists
- Scroll down and see the collapsed reservation component anchored to the sidebar

### Stretch Goals:

A user should be able to
- Click confirm reservation and have the reservation held for them for five minutes

## API Server Routes

#### `GET /bundle.js`

**Input**: none

**Output**: `bundle.js` which can be used by proxy servers to add this module to any page. 

_Note: In order for module to display, your index.html must have a `div` with `id="reservation"`._

#### `GET /:restaurant_id/reservations`

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
      "booking_time": <datetime>,
      "party_qty": <number>,
      "restaurant_id": <number>
    },
    {
      "booking_time": <datetime>,
      "party_qty": <number>,
      "restaurant_id": <number>
    }, ...
  ]
}
```

#### `POST /:restaurant_id/reservations`

**Inputs**: 
- `restaurant_id` which will be used to look for a particular restaurant’s availability
- `datetime` which will be used to refine results for restaurant availability

**Output**: JSON with the times after the selected date/time with that are available to book
```
{
  "bookings": [
    {
      "booking_time": <datetime>,
      "party_qty": <number>,
      "restaurant_id": <number>
    }, ...
  ]
}
```

#### `GET /:restaurant_id/reservations/count`

**Input**: `restaurant_id` which will be used to look for a particular restaurant’s daily bookings count

**Output**: JSON with the number of times users have created bookings for this restaurant for the current date
```
{
  "bookings_count": <number>
}
```

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
  open_time: { hour: Number, minute: Number },
  close_time: { hour: Number, minute: Number },
  max_time_range: Number,
}
```

### Reservation Schema
```
{
  booking_time: Date,
  party_qty: Number,
  created_at: Date,
  restaurant_id: Number,
}
```
