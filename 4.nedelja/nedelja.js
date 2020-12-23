//Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

// function strongest(pokemons) {
//     pokemons.sort((b,a) => a.characteristics.defence - b.characteristics.defence)

//     for (let i = 0; i < pokemons.length; i++) {
//         console.log(pokemons[i].characteristics.defence);
//         return pokemons[0]
//     } 
// }

// console.log(strongest(pokemons));

//------------------------------------------------------------------------------


//За дати html направити скрипту која:
    // <div class="wrapper">
	// 	<button id="prikaz">PRIKAZI POKEMONE</button>
	// 	<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
    // </div>

// На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :
//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>
// На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.
let pokemons = [
    {
        name:'Rowlet',
        type:'Grass',
        img: 'https://img.pokemondb.net/artwork/large/rowlet.jpg',
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
        img:'https://img.pokemondb.net/artwork/large/popplio.jpg',
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
        img:'https://img.pokemondb.net/artwork/large/crabominable.jpg',
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
        img:'https://img.pokemondb.net/artwork/large/palossand.jpg',
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
        img:'https://img.pokemondb.net/artwork/large/solgaleo.jpg',
        abilities:['Full Metal Body','Undiscovered','Genderless'],
        characteristics:{
            atack:137,
            defence:137,
            speed:97
        }
    },
    {
        name:'Poipole',
        type:'POISON',
        img:'https://img.pokemondb.net/artwork/large/poipole.jpg',
        abilities:['Beast Boost','Poison Pin','Undiscovered'],
        characteristics:{
            atack:73,
            defence:67,
            speed:65
        }
    },
    {
        name:'Kartana',
        type:'GRASS',
        img:'https://img.pokemondb.net/artwork/large/kartana.jpg',
        abilities:['Beast Boost','Genderless','Undiscovered'],
        characteristics:{
            atack:181,
            defence:131,
            speed:109
        }
    }
]

const btnPrikaz = document.querySelector('#prikaz')
const btnPrikazPobednika = document.querySelector('#pobednik')


btnPrikaz.addEventListener('click',function() {
    pokemons.forEach(pokemon => {
        const div = document.querySelector('div')
        //div.className = 'mainDiv'
        div.style.backgroundColor = 'black'
        div.style.color  = 'white'
      
        div.innerHTML = div.innerHTML + `
            <div class="pokemons-card" style="display:flex;justify-content:center;">
                <div class="pokemon-name" style="background-color:#f1f5f8;color:black;width:250px;padding:5px;">
                    <h1>Name: ${pokemon.name}</h1>
                    <h1>Defence: ${pokemon.characteristics.defence}</h1>
                </div>
                <div class="pokemon-image" style="background-color:lightblue;width:250px;height:250px;padding:10px">
                <img style="width:200px;height:200px;position:relative;left:20px;top:20px;border-radius:20px;" src="${pokemon.img}" alt=""/>
                </div>
            </div>
              <br />
              <br />
      `
      pokemons.sort((a,b) => a.characteristics.defence - b.characteristics.defence)  
    })  
    
})

btnPrikazPobednika.addEventListener('click',function() {
    function strongest(pokemons) {
        pokemons.sort((b,a) => a.characteristics.defence - b.characteristics.defence)
    
        for (let i = 0; i < pokemons.length; i++) {
            console.log(pokemons[i].characteristics.defence);
            return pokemons[0]
        } 
    }
    const div = document.querySelector('div')
    div.innerHTML = strongest(pokemons)
})
//------------------------------------------------------------------------------
// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

