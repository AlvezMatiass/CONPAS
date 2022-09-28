
// URL DEL CATALOGO "https://docs.google.com/spreadsheets/d/1rxIGbyQkkA7jroA-RSoI67uHtAYNTberI7AZb3SNC3U/gviz/tq?tqx=out:json&gid=0";
// URL DELC ATALOGO DE OFERTAS "https://docs.google.com/spreadsheets/d/1rxIGbyQkkA7jroA-RSoI67uHtAYNTberI7AZb3SNC3U/gviz/tq?tqx=out:json&gid=2009238332";
const url = "https://docs.google.com/spreadsheets/d/1rxIGbyQkkA7jroA-RSoI67uHtAYNTberI7AZb3SNC3U/gviz/tq?tqx=out:json&gid=0";
const urlOFerta = "https://docs.google.com/spreadsheets/d/1rxIGbyQkkA7jroA-RSoI67uHtAYNTberI7AZb3SNC3U/gviz/tq?tqx=out:json&gid=2009238332";
// CONSUMO DE FETCH CON ASYNC Y AWAIT
const fetchData = async () => {
    try {
        console.log("Se ejecuto la base de datos de google sheets")
        const respuesta = await fetch(url)
        let stringObtenido = await respuesta.text()
        const data = JSON.parse(stringObtenido.slice(47, -2))
        const datos =data.table
        console.log(datos)
    }
    catch (error) {
        // si da error, registrarlo en la consola
        console.error("Algo salió mal: ", error)
        console.log("Se consumirá la base de datos locales")
        // En caso de que la base de datos falla, se consume el archivo local "backup.txt"
        const respuesta = await fetch("../backup.txt")
        let stringObtenido = await respuesta.text()
        const data = JSON.parse(stringObtenido)
        const datos =data.table
        console.log(datos)
    }
}

fetchData()






////////////////////////////////////////////////////////////////////////////////////

// CONSUMO DE FETCH SIMPLE
/*
fetch(url)
.then(res => res.text())
.then(stringObtenido => {
    console.log(stringObtenido)
    console.log(typeof(stringObtenido))
    const data = JSON.parse(stringObtenido.slice(47, -2))
    const datos =data.table
    console.log(datos)
})
.catch( () => {
    console.log("La base de datos no funciono")
    fetch("../backup.txt")
    .then(res => res.text())
    .then(stringObtenido => {
        console.log(stringObtenido)
        console.log(typeof(stringObtenido))
        const data = JSON.parse(stringObtenido)
        const datos =data.table
        console.log(datos)
    })
})
*/