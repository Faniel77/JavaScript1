'use strict';

function giveCompliment(name = 'Fanuel') {
  // "Fanuel" is set as a default parameter
  const compliments = [
    'awesome',
    'great',
    'wonderful',
    'nice',
    'super',
    'excellent',
    'clever',
    'fantastic',
    'amazing',
    'remarkable',
  ];
  const chooseCompliment =
    compliments[Math.floor(Math.random() * compliments.length)]; // randomly selects from the compliments

  console.log(`you are ${chooseCompliment} ${name}`);
}
giveCompliment();
giveCompliment();
giveCompliment();
giveCompliment();
