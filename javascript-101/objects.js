// even though you can technically put something else as a key, it converts it to a string. You dont have to put quotes around key name
let spaceship = {
    speed: 'fast',
    acceleration: 120,
    passangers: 12,
    fuel: 100
}
spaceship.payload = 50
console.log(spaceship)

spaceship.fuel = spaceship.fuel - spaceship.fuel / 3;
console.log(spaceship)

for(attrib in spaceship){
    console.log(attrib)
    console.log(spaceship[attrib])
}


