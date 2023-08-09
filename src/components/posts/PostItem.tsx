import { useState } from "react";
import Link from "../../../node_modules/next/link";
import { Post } from "../../pages/index";

const PostItem = ({ postItem }: { postItem: Post }) => {
    const [style, setStyle] = useState("color-black");

    return (
        <li
            style={{
                border: '2px solid black',
                backgroundColor: 'lightblue',
                borderRadius: '10px',
                listStyle: 'none',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <img width='100%' height="400px" src={postItem.image} alt={'Post'} />
            <Link
                style={{
                    textDecoration: 'none',
                    fontSize: '1.3rem',
                    color: 'black',
                }}
                href={`/${postItem.id}`}
            >
                {postItem.title}
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <input className="symbol-input" type="checkbox" id="heart" />
                <label className={style} style={{ color: postItem.status === 'liked' ? 'red' : '' }} htmlFor="heart" onClick={() => style === "color-black" ? setStyle("color-red") : setStyle("color-black")}>&#10084;</label>
                <p>{(postItem.status !== 'liked' && style !== "color-red") ? postItem.status === 'saved' ? 'saved' : postItem.status === 'deleted' ? 'deleted' : 'new' : 'liked'}</p>
            </div>
        </li>
    )
};

export default PostItem;