var dogs = {
    raining: true,
    noise: "woof!",
    makeNoise: function(){
        if(this.raining){
            return console.log(this.noise)
        };
    }
}

var cats = {
    raining: false,
    noise: "meow!",
    makeNoise: function() {
        if(this.raining) {
            return console.log(this.noise)
        };
    }
}

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();


function massHysteria (dogs, cats){
    if(dogs.raining && cats.raining ) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
    }
}

massHysteria(dogs, cats);