const Database = require('./db')

function saveOrphanage(db, orphanage) {
    return db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        visiting_hours,
        weekend_friendly
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${(orphanage.images).toString()}",
        "${orphanage.instructions}",
        "${orphanage.visiting_hours}",
        "${orphanage.weekend_friendly}"
        );
`)
}

module.exports = saveOrphanage;