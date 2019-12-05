# API Project: Timestamp Microservice for FCC

### User stories :

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
2. A date string is valid if can be successfully parsed by `new Date(date_string)` (JS) . Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
3. If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

#### Example usage:
* http://bdev-fcctimestamp.glitch.me/December%2004,%202019
* https://bdev-fcctimestamp.glitch.me/1575417600000


### Example Output:

```
{
  unix: 1575417600000,
  natural: "December 04, 2019"
}
```

### Technologies Used:

* Node.js
* Express.js
* [moment.js](http://momentjs.com/)

Developed for a Free Code Camp project. Original project idea link: [https://www.freecodecamp.com/challenges/timestamp-microservice](https://www.freecodecamp.com/challenges/timestamp-microservice)