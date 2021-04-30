const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const AttackMoment = (howattack) => {
  howattack()
}

const dragonDamager = () => {
  dragon.damage = Math.ceil(Math.random(1) * 15) + dragon.strength;
  console.log(dragon.damage);
}
const warriorDamager = () => {
  warrior.damage = Math.ceil(Math.random(1) * warrior.strength) + warrior.strength + warrior.weaponDmg;
  console.log(warrior.damage);
}
const mageDamager = () => {
  mage.damage = Math.ceil(Math.random(1) * mage.intelligence) + mage.intelligence * 2;
  console.log(mage.damage);
  if (mage.mana < 15) {
    console.log("Não Possui mana suficiente");
  } else {
    mage.mana -= 15;
    console.log(mage.mana);
  }
}

AttackMoment(mageDamager);