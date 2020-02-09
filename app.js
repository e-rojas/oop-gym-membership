const Member = require('./member-class');
const Gym = require('./gym-class');
const uniqid = require('uniqid');
const rl = require('./readline');

function question(theQuestion) {
  return new Promise(resolve => {
    rl.question(theQuestion, answ => resolve(answ));
  });
}

async function askQuestion() {
  let active = false;
  let startApp = await question('Woud you like to create a new Gym? ');
  startApp = startApp.toLowerCase();
  if (startApp == 'yes') {
    let gymName = await question("What's the name of your gym? ");
    active = true;
    let gym = uniqid('gym-');
    gym = new Gym(gymName, gym);
    console.log(gym);
    while (active) {
      let name = await question('Name of member: ');
      let age = await question('Age of memeber:');
      let email = await question('Member email:');
      let address = await question('Member address:');
      const member = new Member(name, age, email, address);
      gym.addMember(member.info);
      console.log(gym);
      let response = await question(
        'Would you like to add another member(y/n):'
      );
      console.log(response);
      if (response === 'no') {
        break;
      }
    }
    console.log(gym);
  }
  console.log('Thanks for using Gym-member Program');
  rl.close();
}
askQuestion();
