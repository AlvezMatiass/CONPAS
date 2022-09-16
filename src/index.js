
url = "https://docs.google.com/spreadsheets/d/1pC1bjB89Bzm_3dcXGDWIcywIqKrNavM8RCXb1SkL0Lo/gviz/tq?tqx=out:json&gid=0";
fetch(url)
.then(res => res.text())
.then(stringObtenido => {
    console.log(stringObtenido)
    const data = JSON.parse(stringObtenido.slice(47, -2))
    const datos =data.table
    console.log(datos)
})
