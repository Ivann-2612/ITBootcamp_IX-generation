import axios from 'axios'

const app = document.querySelector('#app')
const body = document.querySelector('body')
const section = document.querySelector('#section')
const select = document.querySelector('#select')

section.prepend(select)
const header = () => {
    const header = document.createElement('header')
    const h1 = document.createElement('h1')
    h1.textContent = 'SPACE X'
    h1.style.textAlign = 'center'
    h1.style.fontSize = '30px'
    header.append(h1)
    body.prepend(header)
}
 header()

//  const option = () => {
//      const select = document.createElement('select')
//      select.innerHTML = `
//                         <option value="">Choose option</option>
//                         <option value="Brodovi" id="brod">Brodovi</option>
//                         <option value="Lansiranje" id="lansir">Lansiranje</option>            
//      `
//      select.style.padding = '5px 10px'
//      select.style.marginBottom = '10px'
//     section.prepend(select)
//  }
// option()


const showLaunch = (launch) => {
    app.style.display = 'flex'
    app.style.flexWrap = 'wrap'
    const div = document.createElement('div')
    div.style.border = '2px solid white'
    div.style.width = '170px'
    div.style.minHeight = '250px'
    div.style.padding = '25px'
    div.style.backgroundColor = 'black'
    div.style.color = 'white'
    body.style.marginLeft = '90px'
    const img = document.createElement('img')
    img.style.width = '150px'    
    img.style.height = '150px'    
    img.style.objectFit = 'cover'
    img.style.marginLeft = '11px'
    img.src = launch.links.mission_patch_small ?  launch.links.mission_patch_small : 'https://via.placeholder.com/200'
    const paraMisionName = document.createElement('p')
    paraMisionName.textContent = `Mision name: ${launch.mission_name}`
    paraMisionName.style.marginBottom = '35px'
    div.append(paraMisionName,img)

    app.append(div)
}

//api launches
axios.get('https://api.spacexdata.com/v3/launches')
.then(res => res.data.forEach(launch => showLaunch(launch)))
//.then(res => console.log(res.data[0]))


    //  ---------------------------------------------------------- SHIPs------------------------------------------------------------------------------

const appShips = document.querySelector('#app')

const addShips = (ship) => {

    appShips.style.display = 'grid'
    //appShips.style.gridTemplateRows = 'repeat(3, 1fr)'
    appShips.style.gridTemplateColumns = 'repeat(5, 1fr)'
    appShips.style.gridGap = '8px'
    appShips.style.gridAutoRows = 'minmax(100px, auto)'
    // appShips.style.justifyContent = 'center'
    const div = document.createElement('div')
    div.style.border = '1px solid black'
    div.style.width = '240px'
    div.style.padding = '5px'
    div.style.marginRight = '15px'
    div.style.backgroundColor = 'black'
    div.style.color = 'white'
    //div.style.display = 'inline'
    const img = document.createElement('img')
    img.style.width = '230px'    
    img.style.height = '200px'    
    img.style.objectFit = 'cover'
    img.style.marginLeft = '4px'
    img.src = ship.image ? ship.image : 'https://via.placeholder.com/200'
    const paraName = document.createElement('p')
    paraName.textContent = `Name: ${ship.ship_name}`
    paraName.style.fontWeight = '600'
    const paraHomePort = document.createElement('p')
    paraHomePort.style.fontWeight = '600'
    paraHomePort.textContent = `Port: ${ship.home_port}`
    const paraYear = document.createElement('p')
    paraYear.textContent = `Port: ${ship.year_built}`
    
    div.append(img,paraName,paraHomePort,paraYear)
    appShips.append(div)
}

axios.get('https://api.spacexdata.com/v3/ships')
              .then(res => res.data.forEach(ship => addShips(ship)))
  
  //  .then( res =>  console.log(res.data[0]))


select.addEventListener('change',chooseValue)

    const chooseValue = (option) => {
        if(option == 'Brodovi') return addShips()
        //console.log(option.value);
    }















