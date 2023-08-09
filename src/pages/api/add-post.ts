import { MongoClient } from "mongodb";

const handler = async (req: any, res: any) => {
    if (req.method === 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://harshil:gvPP3mzrcgxF8cuX@nextjs.4pdy9ud.mongodb.net/posts?retryWrites=true&w=majority');
        const db = client.db();

        const postCollection = db.collection('postCollection');
        const result = await postCollection.insertOne(data);

        console.log('result', result);

        client.close();

        res.status(201).json({message: 'New Post Created.'})
    }
};

export default handler;