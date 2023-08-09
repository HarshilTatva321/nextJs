const PostDetails = (props: any) => {
    return (
        <div className="detail-container">
            <img src={props.image} alt={`Post ${props.id}`} width="80%" height='600px' />
            <h1 className="title-wrap">{props.title}</h1>
            <h3 className="title-wrap">{props.description}</h3>
        </div>
    )
};

export default PostDetails;