//1.zadatak Pokemoni

let pokemons = [
    {
        name:'Rowlet',
        type:'Grass',
        abilities:['Overgrow','Long Reach','Dodge'],
        characteristics:{
            atack:55,
            defence:50,
            speed:42
        }
    },
    {
        name:'Popplio',
        type:'Sea Lion Pokémon',
        abilities:['Torrent','Liquid Voice','Field'],
        characteristics:{
            atack:52,
            defence:54,
            speed:40
        }
    },
    {
        name:'Crabominable',
        type:'Woolly Crab Pokémon',
        abilities:['Hyper Cutter','Iron Fist','Anger Point'],
        characteristics:{
            atack:132,
            defence:77,
            speed:33
        }
    },
    {
        name:'Palossand',
        type:' Ghost',
        abilities:['Water Compaction','Sand Veil','Amorphous'],
        characteristics:{
            atack:75,
            defence:110,
            speed:35
        }
    },
    {
        name:'Solgaleo',
        type:'Psychic',
        abilities:['Full Metal Body','Undiscovered','Genderless'],
        characteristics:{
            atack:137,
            defence:107,
            speed:97
        }
    },
    {
        name:'Poipole',
        type:'POISON',
        abilities:['Beast Boost','Poison Pin','Undiscovered'],
        characteristics:{
            atack:73,
            defence:67,
            speed:65
        }
    }
]

function array(pokemons) {
    let array2 = []

    pokemons.forEach(pokemon => pokemon.abilities)

    for(let el of pokemons){
        array2.push(el.abilities)
    }
    return array2   
}

console.log(array(pokemons));

pokemons.sort((a,b) => a.characteristics.speed - b.characteristics.speed)

for (let i = 0; i < pokemons.length; i++) {
    console.log(pokemons[i].characteristics.speed);
}
