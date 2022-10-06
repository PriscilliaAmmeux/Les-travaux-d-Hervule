const MAX_LIFE = 100;

class Fighter {
  constructor(name, str, dex) {
    this.name = name;
    this.str = str;
    this.dex = dex;
    this.life = MAX_LIFE;
  }

  fight(target) {
    const dice = Math.floor(Math.random() * this.str + 1);
    const attStrength = dice - target.dex;
    const finalDmg = Math.max(0, attStrength);
    const targetNewHp = Math.max(0, target.life - finalDmg);
    target.life = targetNewHp;

    return finalDmg;
  }
}

const hero = new Fighter('Herakles 🧔', 20, 6);
const enemy = new Fighter('Nemean Lion 🦁', 11, 13);

let attNumber = 0;
while (enemy.life > 0 && hero.life > 0) {
  hero.fight(enemy);
  enemy.fight(hero);

  console.log('');
  console.log(enemy);
  console.log(hero);
  attNumber++;
}
if (hero.life > 0) {
  console.log(`Herakles won in ${attNumber} rounds !`);
} else {
  console.log(`The Nemean Lion won in ${attNumber} rounds !`);
}