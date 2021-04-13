// Simple script to generate random messages / outages in a data centre.
 
// Store possible failure scenarios in an object. 
const outageMessages = {
 
   service:['UPS system', 'generators', 'cooling systems', 'core network infrastructure', 'fire suppression system'],
   status:['reduced redundancy','reduced resiliency', 'impacted', 'unavailable'],
   rootCause:['a cat in the data centre', 'typographical error', 'cascading failure event', 'Human error', 'The generators ran out of fuel', 'a UPS module exploded'],
   advice:['initiate your disaster recovery plans', 'sit tight and pray', 'switch your laptop off for the day'] 
}
 
// Random number generator function.
const generateRandomNumber = (number) => Math.floor(Math.random() * number);
 
// Message generator function => loop through object properties, random number to pull eventID and push to messageArray. Return template literal string. 
const generateRandomOutage = () => {
   let messageArray = [];
   for (let property in outageMessages){
      let eventID = generateRandomNumber(outageMessages[property].length)
      messageArray.push(outageMessages[property][eventID])
   }
let outageNotifcation = `Dear Customer, we are currently experiencing issues with our: ${messageArray[0]}. The current status of our ${messageArray[0]} is: ${messageArray[1]}. The root cause of this failure is: ${messageArray[2]}. We advice that you ${messageArray[3]}.`
 
return outageNotifcation
 };
 
console.log(generateRandomOutage());
