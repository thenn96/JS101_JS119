let rlSync = require('readline-sync'); 

let length = Number(rlSync.question('Enter the room length in meters\n'));
let width = Number(rlSync.question('Enter the room width in meters\n'));

let areaMeters = (length * width); 

let areaFeet = (areaMeters * 10.7639);

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)} square fee)`);


