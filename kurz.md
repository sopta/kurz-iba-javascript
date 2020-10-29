# Osnova
<span style="font-size: 20px">

1. Představení

2. Přehled / rekapitulace základů Javascriptu
    - základní funkce alert, prompt, console.log
    - datové typy
    - proměnné (primitívní datové typy a práce s nimi)
    - objekty
    - pole
    - vlastní funkce
    - podmínky
    - cykly
    - DOM -> projekt Album

3. Projekt Album
    - práce s DOMem
    - eventy
    - REST API
    - formuláře
    - localStorage


</span>

# Datové typy

<span style="font-size: 20px">

| Primitivní datové typy  |  Hodnota |
|---|---|
| <span style="color:#EF287C"><b>integer</b></span>  | 5 |
| <span style="color:#EF287C"><b>float</b></span>  | 5.5 |
| <span style="color:#EF287C"><b>string</b></span>  | "5" |
| <span style="color:#EF287C"><b>boolean</b></span>  | true |
| <span style="color:#EF287C"><b>undefined</b></span>  | undefined |
| <span style="color:#EF287C"><b>object</b></span>  | null |


| Složené datové typy  |  Hodnota |
|---|---|
| <span style="color:#EF287C"><b>object</b></span>  | ["name", "age"] |
| <span style="color:#EF287C"><b>object</b></span>  | {name: "Patrik", age: 45} |
| <span style="color:#EF287C"><b>function</b></span>  | function() {} |

</span>

![Děrný štítek](./images/derny_stitek.jpg "Děrný štítek")

![Reprezentace proměnné v paměti](./images/pamet.png "Reprezentace proměnné v paměti")


<span style="font-size: 20px">

```javascript
console.log(typeof 5)
console.log(typeof 5.5)
console.log(typeof "5")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)

console.log(typeof ["name", "age"])
console.log(typeof {name: "Patrik", age: 45})
console.log(typeof function() {})
```

</span>

# DOM

> <span style="font-size: 25px">DOM je objektově orientovaná reprezentace XML nebo HTML dokumentu. DOM je API umožňující přístup či modifikaci obsahu, struktury, nebo stylu dokumentu, či jeho částí.</span>

![DOM API](./images/dom.png "DOM je API pro objektově orientovanout reprezentace HTML stránky")