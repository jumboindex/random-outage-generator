


const outageMessages = {
 
   service:['UPS system', 'generators', 'cooling system', 'core network infrastructure', 'fire suppression system'],
   status:['offline', 'partially degraded', 'blown up'],
   impact:['reduced redundancy','reduced resilency', 'impacted', 'unavailable']
}


const generateRandomNumber = (number) => Math.floor(Math.random() * number);
 
const generateRandomOutage = () => {
   let messageArray = [];
   for (let property in outageMessages){
      let eventID = generateRandomNumber(outageMessages[property].length)
      messageArray.push(outageMessages[property][eventID])
   }


   return `Dear Customer, we are curruently experincing issues with our: ${messageArray[0]}. The current status of our ${messageArray[0]} is: ${messageArray[1]}. Please expect the following impact to your services: ${messageArray[2]}. We advice that you initiate your disaster recovery plans.`
    
 };



 
console.log(generateRandomOutage());