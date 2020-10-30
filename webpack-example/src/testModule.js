import udelejObjednavku, { normal } from './objednavky/objednavky'

export let prom = 14

export function pozdrav() {
    alert(`ahoj ${prom}`)
    udelejObjednavku()
}


console.log("normal", normal)


export let obj = {
    name: "Tomas",
}