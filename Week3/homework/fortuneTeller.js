'use strict';

const numChildren = [3, 2, 5, 8, 1];
const partnerNames = ['Jessica', 'jennifer', 'karen', 'kim', 'suzan'];
const locations = ['Amsterdam', 'Barcelona', 'Paris', 'Asmara', 'Toronto'];
const jobs = [
  'Teacher',
  'Senior Manager',
  'Software Engineer',
  'Business Owner',
  'Waiter',
];
// the function takes in 4 parameters which belong to the 4 variables listed above
function tellFortune(children, partner, location, job) {
  // the 4 new variables here store the randomly selected elements of the original 4 variables respectively and log it to the console
  const randomChildrenNum =
    children[Math.floor(Math.random() * children.length)];
  const randomPartnerNames =
    partner[Math.floor(Math.random() * partner.length)];
  const randomLocations = location[Math.floor(Math.random() * location.length)];
  const randomJobs = job[Math.floor(Math.random() * job.length)];

  console.log(
    `You will be A ${randomJobs} in ${randomLocations} married to ${randomPartnerNames} with ${randomChildrenNum} kids`,
  );
}
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);
tellFortune(numChildren, partnerNames, locations, jobs);

// node fortuneTeller.js
