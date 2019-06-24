isDone = false;
p1_score = 0;
p2_score = 0;
class Player{
  constructor(name, hp, damage){
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }
  attack(being){
    let totalDamage = this.getDamage();
    being.hp = being.getLife() - totalDamage;
    
    !being.isAlive() ? being.hp = 0 : '';
    
    console.log("====================================");
    console.log(this.getName(this) + " inflicted " + totalDamage + " damage to " + being.getName());
    console.log(being.getName() + " remaining life is " + being.hp);
    console.log(this.getName() + " remaining life is " +  this.hp);
    console.log("====================================");
  }
  getName(){
    return this.name;
  }
  getLife(){
    return this.hp;
  }
  getDamage(){
    return this.damage + this.getCrit();
  }
  isAlive(){
    return this.hp > 0;
  }
  getCrit(){
    return Math.floor(Math.random() * (15 - 5 + 1) + 5);
  }
  getWinner(){
    console.log(this.getName() + " WINS !");
    checkScore(p1_score,p2_score);
  }
}

const checkScore = (score1,score2) => {
  console.log(p1.getName() +" Score: "+score1);
  console.log(p2.getName()+" Score: "+ score2);
  console.log('\n');
  if(score1 === 10){
    console.log(`Total Round: ${round}`);
    console.log('Overall Winner: ' + p1.getName());
    isDone = true;
  }else if(score2 === 10){
    console.log(`Total Round: ${round}`);
    console.log('Overall Winner: ' + p2.getName());
    isDone = true;
  }
};

const fight = () => {
  
  turn = Math.round(Math.random());
  
  while(p1.isAlive() && p2.isAlive() && !isDone){
    if(turn === 0){
      p2.attack(p1);
      if(!p1.isAlive()){
        p2_score++;
        p2.getWinner();
        break;
      }
      p1.attack(p2);
      if(!p2.isAlive()){
        p1_score++;
        p1.getWinner();
        break;
      }
    }else{
      p1.attack(p2);
      if(!p2.isAlive()){
        p1_score++;
        p1.getWinner();
        break;
      }
      p2.attack(p1);
      if(!p1.isAlive()){
        p2_score++;
        p2.getWinner();
        break;
      }
    }
  }
};

round = 0;
while(!isDone){
  round++;
  console.log(`Round ${round}:`);
  var p1 = new Player('Charmander',100,25);
  var p2 = new Player('Pikachu',100,25);
  fight();
}