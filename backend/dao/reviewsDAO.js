import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let reviews

export default class ReviewsDAO {
    static async injectDB(conn) {
        if (reviews) {
            return
        }
        try {
            reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("")
        } catch (e) {
            console.error(`Unable to establish collection `)
        }
    }
}