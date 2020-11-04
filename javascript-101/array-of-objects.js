let ships = [
    {
        name: "Widow Maker", 
        topSpeed:180,
        acceleration:80,
        cargocCapacity: 500

    },
    {
        name: "USS Obama",
        topSpeed: 120,
        acceleration:60,
        cargoCapacity: 600

    },
    {
        name: "USS Destroyer",
        topSpeed:150,
        acceleration: 80,
        cargoCapacity: 700

    }

]
console.log(ships[1].name+ ',' +ships[1].topSpeed)

// for(attrib in ships){
//     if(!ships.hasOwnProperty(attrib)) continue;
//     console.log(attrib)
//     console.log(ships[attrib])
// }

ships.forEach(function(ship){
    console.log("*****************")
    for(key in ship){
        console.log(` ${key} : ${ship[key]}`)
    }
    console.log("*******************")
})


ships.sort(function(a,b){
    return a.topSpeed - b.topSpeed
})

console.log(ships)