//1. За два броја (а и б) исписати њихов: Збир,разлику,производ,количник,остатак при дељењу,степен (а^b)
let a = 5
let b = 3
//Sabiranje
let zbir = a + b
console.log(zbir);
//Oduzimanje
let oduzimanje = a - b
console.log(oduzimanje);
//Mnozenje
let mnozenje = a * b
console.log(mnozenje)
//Deljenje
let deljenje = Math.floor(a / b)
console.log(deljenje);
//Ostatak pri deljenju
let ostatakPriDeljenju = Math.floor(a % b)
console.log(ostatakPriDeljenju);
//Stepen
let stepen = a ** b
console.log(stepen);

//Продавница
//1.Направити променљиву која представља цену производа коју купац жели да купи
//2.Направити променљиву која представља количину новца коју купац има
//3.Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
//4.Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)*/
let cena = 100
let kolicina = 5
let novac = 300
let ukupnaCena = cena * kolicina
let razlikaUnovcu = novac - ukupnaCena

if(novac < ukupnaCena) {
    console.log(`Nemate dovoljno novca,trenutno imate ${novac} dinara.Za odabrane artikle potrebno Vam je ${ukupnaCena} da bi obavili kupovinu.`);
}else{
    console.log(`Uspesno ste kupili proizvod i novac koji Vam je ostao iznosi ${razlikaUnovcu} dinara`)
}

//3.Направити променљиву која има вредност неког броја (цео број)
//Уколико је број дељив са 3, исписати поруку: Број _ је дељив са 3
//Ако није, Број _ није дељив са 3

let broj = 10
if(broj%3 == true) {
    console.log('Broj je deljiv sa 3');
}else{
    console.log('Broj nije deljiv sa 3');
}

//4.Исписати првих 1000 бројева дељивих са 5
for(let i = 1; i <= 1000; i++){
    if(i % 5 == 0) console.log(i);
}