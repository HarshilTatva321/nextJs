import PostDetails from "../components/posts/PostDetails";

const PostDetailPage = (props: any) => {
    const { image, id, title, description } = props.postItem;
    return (
        <>
            <h2>Post - {id}</h2>
            <PostDetails image={image} id={id} title={title} description={description} />
        </>
    )
};

export const getStaticPaths = async () => {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    postId: 'p1'
                }
            },
            {
                params: {
                    postId: 'p2'
                }
            },
            {
                params: {
                    postId: 'p3'
                }
            },
            {
                params: {
                    postId: 'p4'
                }
            },
            {
                params: {
                    postId: 'p5'
                }
            }
        ]
    }
};

export const getStaticProps = async (context: any) => {
    const postId = context.params.postId;
    return {
        props: {
            postItem: {
                image: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398.png',
                id: postId,
                title: 'This is custom title',
                description: 'This is custom description'
            }
        },
    }
};

export default PostDetailPage;