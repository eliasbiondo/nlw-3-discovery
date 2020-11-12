const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

    await saveOrphanage(db, {
        lat: "-23.329522",
        lng: "-51.153897",
        name: "Lar dos meninos",
        about: "Não sei o que escrever aqui, portanto estou apenas fazendo um teste para ver como irá ficar.",
        whatsapp: "+5543984865961",
        images: [
            "/images/image-1.png",
            "/images/image-2.jpg",
            "/images/image-3.jpg",
            "/images/image-4.jpg",
            "/images/image-5.jpg",
            "/images/image-6.jpg",
        ].toString(),
        instructions: "Meu deus! Eu não sei de nada.",
        visiting_hours: "8h às 18h",
        weekend_friendly: "1"
    })

    //await db.run('DELETE FROM orphanages')

    const consultedOrphanage = await db.all('SELECT * FROM orphanages')
    console.log(consultedOrphanage)

    /*
    Orphange name consult
    const consultedOrphanage = await db.all('SELECT name FROM orphanages')
    console.log(consultedOrphanage)

     table data consult
    selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages) */

    })

    
    


