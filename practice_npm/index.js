//npm install <package_name>
// Example: npm install express
//npmjs.com
//npm i sillyname


//const sillyname = require('sillyname');  CJS
import sillyname from 'sillyname'; // ESM

import {randomSuperhero} from 'superheroes';; // ESM

const superhero = randomSuperhero();
console.log(`My superhero name is: ${superhero} !`);

const name = sillyname();
console.log(`My silly name is: ${name} !`);


