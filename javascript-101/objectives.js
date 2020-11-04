// #1
function Bird( type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound

}
 const pet = new Bird('Falcon', 'Roscoe', 'Chirp')

 
console.log(pet instanceof Object);

// #2
console.log(Array.isArray(pet));


let footBallTeams = ['falcons', 'seahawks', 'rams', 'dolphins'];
console.log(Array.isArray(footBallTeams));


// #3
console.log(footBallTeams.join(''));
