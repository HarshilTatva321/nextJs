import { useState } from "react";
import { useRouter } from "../../../node_modules/next/router";
import Button from "../../components/posts/Button"

const AddPostPage = () => {
    const route = useRouter();
    const [isLoad, setIsLoad] = useState(false);
    const [formData, setFormData] = useState({ imgUrl: '', title: '', description: '' });

    const addNewPost = async (data: any) => {
        setIsLoad(true)
        const response = await fetch('/api/add-post', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())

        console.log('response', response)
        setIsLoad(false);
        route.push('/');
    };

    const handleAddPost = (e: any) => {
        e.preventDefault();
        if (formData.imgUrl !== '' && formData.title !== '' && formData.description !== '') {
            addNewPost(formData);
            setFormData({ imgUrl: '', title: '', description: '' })
        } else {
            alert('Enter details first.')
            setIsLoad(false)
        }
    };

    return (
        <>
            <h2>Add New Post</h2>
            <form className="form-add-post">
                <input type="text" className="form-input" placeholder="Enter Post Image URL" value={formData.imgUrl} onChange={(e) => setFormData((prev: any) => { return { ...prev, imgUrl: e.target.value } })} />
                <input type="text" placeholder="Enter Post Title" className="form-input" value={formData.title} onChange={(e) => setFormData((prev: any) => { return { ...prev, title: e.target.value } })} />
                <textarea placeholder="Enter Post Discription" className="form-input" value={formData.description} onChange={(e) => setFormData((prev: any) => { return { ...prev, description: e.target.value } })} />
                <Button onClick={(e: any) => handleAddPost(e)}>Add{isLoad && '...'}</Button>
            </form>
        </>
    )
};

export default AddPostPage;