import { useState } from "react";
import { MongoClient } from "mongodb";
import Button from "../components/posts/Button";
import PostItem from "../components/posts/PostItem";

export type Post = {
    id: string,
    image: string,
    title: string,
    status: string,
    descrption: string
};

const PostListPage = (props: any) => {
    const [filter, setFilter] = useState('all');

    return (
        <>
            <h2>All Posts</h2>
            <Button onClick={() => setFilter('all')}>All</Button>
            <Button onClick={() => setFilter('new')}>Recent</Button>
            <Button onClick={() => setFilter('saved')}>Saved</Button>
            <Button onClick={() => setFilter('liked')}>Liked</Button>
            <Button onClick={() => setFilter('deleted')}>Deleted</Button>
                <ul className="post-list-container">
                {props.postList.length ?
                    props.postList?.filter((filterItem: Post) => filter === 'all' ? filterItem : filterItem.status === filter)?.map((postItem: Post) => {
                        return (
                            <PostItem key={postItem.id} postItem={postItem} />
                        )
                    }) :
                    <img style={{display: 'flex', flex: 'auto'}} src={'https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif'} />
            }
                </ul> 
        </>
    )
};

// This is used when you need to update site data on every request
// This does not run at build
// export const getServerSideProps = async (context: any) => {
//     const req = context.req;
//     const res = context.res;
// 
//     return {
//         props: {
//             postList
//         }
//     }
// };

// This is used when site doesn't have much data to change frequently
// Here you get context also like getServerSideProps
export const getStaticProps = async () => {

    const client = await MongoClient.connect('mongodb+srv://harshil:gvPP3mzrcgxF8cuX@nextjs.4pdy9ud.mongodb.net/posts?retryWrites=true&w=majority');
    const db = client.db();

    const postCollection = db.collection('postCollection');
    const postList = await postCollection.find().toArray();

    client.close();

    return {
        props: {
            postList: postList.map((listItem: any) => ({
                id: listItem._id.toString(),
                title: listItem.title,
                status: 'new',
                image: listItem.imgUrl
            }))
        },
        revalidate: 10 // validate the data after each 10 seconds
    }
};

export default PostListPage;