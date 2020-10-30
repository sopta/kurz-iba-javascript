//alert("zprava")
//console.log(prompt("zadej svuj vek:")) 40

// 40 -> napsat podminku, ktera overi tvuj vek

//var age;
//console.log(typeof age !== "undefined")

let osoba = { // object literal
    jmeno: "Zdenek", // klic -> hodnota
    vek: 15,
    vyska: 175
}

//console.log(osoba)
/*
let monitor = {
    barva: "cerna",
    znacka: "dell",
}

console.log(monitor)
console.log(monitor.barva)

// pole -> list
var poleJmen = [
    "Patrik",
    "Adela",
    "Zuzka"
]

console.log(poleJmen)

console.log(poleJmen[0])

console.log("Adam".length)
console.log("Adam".toUpperCase())

poleJmen.push("Zaneta", "Zdenek")
console.log(poleJmen)
console.log(poleJmen.join(", "))

// funkce
function cl(zprava) { // helper
    // telo funkce
    console.log(zprava)
}

function mojeFunkce(cislo) {
    return cislo * 5
}

cl("moje zprava")

cl(mojeFunkce(6))

let vysledek = mojeFunkce(4)
cl(vysledek)

let mojeNovaFunkce = function() {
    
}

// zapnuto
let monitorNovy = {
    barva: "cerna",
    znacka: "dell",
    zapnuto: false,
    zapnout: function() {
        this.zapnuto = true
    }
}

console.log(monitorNovy.zapnuto)
monitorNovy.zapnout()
console.log(monitorNovy.zapnuto)
*/

/*
    viceradkovy komentar
*/

let mojePromena; // undefined
mojePromena = 4

mojePromena = "5"

if (
    typeof mojePromena !== "undefined" || // true
    typeof mojePromena === "number" // false
) {
    // telo podminky
    console.log("podminka se vykona")
    let vysledek = mojePromena * 4
} else {
    console.log("promenna neexistuje")
}

// == ; 5 == 5
// !=; 5 != 5
// > ; 5 > 5
// < ; 5 < 5
// >=; 5 >= 5
// <= ; 5 <= 5

// &&
// ||

console.log(5 === "5") // 5(number) vs. "5" string

// cykly
var poleJmen = [
    "Patrik",
    "Adela",
    "Zuzka"
]

//console.log(poleJmen[0]) // 3x

// for
// while
// for ... of
// forEach

/*
for (let i = 0; i < poleJmen.length; i++) { // X ; X ; X
    //console.log(poleJmen[i])
}

for (let jmeno of poleJmen) {
    //console.log(jmeno)
}

poleJmen.forEach(function(jmeno, index) {
    //console.log(index, value)
})

while (poleJmen.length > 0) { // podmínka
    console.log(poleJmen.pop())
}*/


// DOM

// jak neco najit na strance
/*
document.querySelectorAll("h1").forEach(function(value, index) {
    console.dir(value) // DOMElement
})
*/

let abrakadabraBtn = document.querySelector("#abrakadabra")
abrakadabraBtn.addEventListener("click", function() {
    let nadpis = document.querySelector("h1")
    nadpis.id = "mojeID"
    nadpis.classList.add("warning")
    nadpis.textContent = "Muj novy nadpis"
    
    // prvek mam a co s tím?
    let mujDiv = document.querySelector("#blabla")
    //mujDiv.innerHTML = "<ul><li>Jeden zaznam</li></ul>"
    
    var jmena = [
        "Patrik",
        "Adela",
        "Zuzka"
    ]
    
    let ulContent = "<ul>"
    jmena.forEach(function(jmeno, index) {
        ulContent += "<li>" + jmeno + "</li>"
    })
    
    ulContent += "</ul>"
    
    mujDiv.innerHTML = ulContent
})
