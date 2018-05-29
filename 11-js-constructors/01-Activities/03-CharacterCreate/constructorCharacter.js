function characters (name, profession, gender, age, strength, hitpoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;
    this.PrintStats = function() {
        console.log("Name: ", this.name, "Profession: ", this.profession, "Gender: ", this.gender, 
        "Age: ", this.age, "Strength: ", this.strength, "Hit Points: ", this.hitpoints);
        }


this.isAlive = function() {
    if(this.hitpoints >= 0) {
        console.log(this.name + " is Alive!");
    }
    else {
        console.log(this.name + "is dead!");
    }
}

// this.attack = function(target) {
//     console.log("Target func: " + this.name + " attacked " + target.name + " for " + this.strength + " damage");

//     target.hitpoints -= this.strength;
//     target.PrintStats();
//     target.isAlive();
// }

this.levelUp = function() {
    this.age++;
    this.strength += 5;
    this.hitpoints += 25;

    this.PrintStats();
    this.isAlive();
}


};

var char1 = new characters("Inom", "student", "male", 35, 50, 100);
var char2 = new characters("Anant", "developer", "male", 40, 60, 110);

char1.PrintStats();
char2.PrintStats();

char1.isAlive();
char2.isAlive();

// char1.attack(char2);
// char2.attack(char1);

char1.levelUp();
char2.levelUp();
