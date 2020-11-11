const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage")

module.exports = {
    index(req, res) {
        return res.render('index')
    },
    addOrphanages(req, res) {
        return res.render('add-orphanage')
    },
    async saveOrphanage(req, res) {

        const fields = req.body

        if (Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try {
            const db = await Database
            await saveOrphanage(db, fields)

            return res.redirect('/orphanages')
            
        } catch (error) {
            console.log(error)
            return res.send('Erro no bando de dados')
        }


        

    },
    async orphanage(req, res) {
        const id = req.query.id
        try {
            const db = await Database
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = results[0]
            console.log(orphanage)

            orphanage.images = orphanage.images.split(',')
            orphanage.firstImage = orphanage.images[0]

            orphanage.weekend_friendly == "0" ? orphanage.weekend_friendly = false : orphanage.weekend_friendly = true

            return res.render('orphanage', {orphanage: orphanage})
        } catch (error) {
            console.log(error)
            return res.send('Erro no bando de dados')
        }
    },
    async orphanages(req, res) {
        try {
            const db = await Database
            const orphanages = await db.all('SELECT * FROM orphanages')
            return res.render('orphanages', {orphanages})
        } catch (error) {
            console.log(error)
            return res.send('Erro com o banco de dados!')
        }
    }
}