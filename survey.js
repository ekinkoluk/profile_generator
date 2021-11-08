const readline = require ('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name/ nickname', (name)=>{
  rl.question("What is an activity you like doing", (activity) => {
    rl.question("What do you listen while doing that", (music) => {
      rl.question("Which meal is your favorite?", (meal) => {
        rl.question("What is your favorite thing to eat for that meal?", (favoriteMeal) => {
          console.log(`${name} loves to do ${activity}. While ${activity} listens ${music}. Favorite meal ${meal} , and eats ${favoriteMeal}`);
          rl.close();
        })
      })
    });
  });
});
  
 