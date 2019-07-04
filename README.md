# Reservation Module

`GET /:restaurant_id/reservations`

**Input**: `restaurant_id` which will be used to look for a particular restaurant’s availability

**Output**: JSON with the number of times the restaurant was booked that day and the timeslots available to book past the current date and time

```
{
  “restaurant_id”: <number>,
  “date_booking_count” : <number>,
  “available_times”: [<datetime>, <datetime>, ...]
}
```
`POST /:restaurant_id/reservations`

**Inputs**: 
- `restaurant_id` which will be used to look for a particular restaurant’s availability
- `datetime` which will be used to refine results for restaurant availability

**Output**: JSON with the times after the selected date/time with that are available to book
```
{
  “restaurant_id”: <number>,
  “date_booking_count” : <number>,
  “available_times”: [<datetime>, <datetime>, ...]
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
MongoDB is the best choice for storing this data because  MongoDB is ideal for situations where you expect high write loads
