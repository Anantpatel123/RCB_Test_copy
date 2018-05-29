
var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function() {
        if(this.raining){
        return console.log(this.noise);
        }
    }
}

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if(this.raining){
        return console.log(this.noise)
        }
    }
}

dogs.makeNoise();

cats.raining = true;
cats.makeNoise();


//BONUS: BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object 
//and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.
function massHysteria(dogs, cats) {
    if (dogs.raining && cats.raining){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}

massHysteria(dogs, cats);