function DigitalPal () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;


    this.feed = function() {
        if (this.hungrey) {
            console.log("That was yummy!");
            this.hungrey = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks! I'm full.");
        }
    }

    this.sleep = function() {
        if (this.sleepy) {
            console.log("zzzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge()
        }
        else {
            console.log ("Not right now.... later.")
        }
    }

    this.play = function() {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else {
            console.log("Not right now. Later?");
        }
    }

    this.increaseAge = function() {
        this.age++;

        console.log("Happy Birthday to me! I am " + this.age + " old!");
    }

}

var dog = new DigitalPal();

dog.outside = false;

dog.bark = function(){
    console.log("Wolf! Woof!);")
}

dog.goOutside = function() {
    if(!this.outside) {
        console.log("Yay! I love the outdoors!")

    this.outside = true;
    this.bark();
    }
    else {
        console.log("We're already outside though...")
    }
}

dog.goInside = function () {
    if(this.outside){
        console.log("Do we have to? Fine...");
        this.outside = false;
    }
    else {
        console.log("I am already inside genius!");
    }
}

dog.feed();
dog.sleep();
dog.play();

// creates a new "digitalpal" object with the name "cat"
var cat = new DigitalPal();

// adds the property "houseQuality" to the "cat" object
cat.houseQuality = 100;

// adds the "meow" method to the "cat" object which prints a message to the screen
cat.meow = function() {
  console.log("Meow! Meow!");
};

// adds the "destroyFurniture" method to the "cat" object which decreases the "cat.houseQuality" value by ten
cat.destroyFurniture = function() {
  if (this.houseQuality - 10 > 0) {
    this.houseQuality -= 10;
    this.bored = false;
    this.sleepy = true;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
  }
  else {
    console.log("I've already destroyed it all!");
  }
};

// adds the "buynewfurniture" method to the "cat" object which increases the "cat.housequality" value by fifty
cat.buyNewFurniture = function() {
  this.houseQuality += 50;
  console.log("Are you sure that's a good idea?");
};

// Try calling an animal's method below
cat.destroyFurniture();