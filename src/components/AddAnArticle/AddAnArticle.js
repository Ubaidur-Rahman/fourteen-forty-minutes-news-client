import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddAnArticle = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const articleData = {
            title: data.title,
            author: data.author,
            description: data.description,
            category: data.category,
            imageURL: imageURL,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString()
        };
        const url = 'http://localhost:5055/addAnArticle'

        console.log(articleData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(articleData)
        })
            .then(res => res.json())
            .then(data =>alert(data ,'added') )


    };


    // upload image function
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'd1bcf6f63e1c6e8b6406c8c11ab2fc0f')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
            <div className="col-md-6">
            <div className="d-flex justify-content-center align-items-center">
                <form className="border border-primary border-2 rounded" style={{ marginTop: "30px"}} onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center">Add an Article</h2>
                    <div className="d-flex justify-content-around p-3">
                        <div>

                            <label><h5>Title</h5></label> <br />
                            <input className="form-control" name="title" placeholder="Enter news Title" ref={register} />
                            <br />
                            <label><h5>Author</h5></label> <br />
                            <input className="form-control" name="author" placeholder="Enter author name" ref={register} />
                            <br />
                            <label><h5>Description</h5></label> <br />
                            <input className="form-control" name="description" placeholder="Enter news Description" ref={register} />
                            <br />
                        </div>
                        <div>

                            <label><h5>Category</h5></label> <br />
                            <input className="form-control" name="category" placeholder="Enter news category" ref={register} />
                            <br />
                            <label><h5>Add Photo</h5></label> <br />
                            <input className="form-control" name="exampleRequired" type="file" onChange={handleImageUpload} id="formFile" />
                            <br />
                            <div className="container text-center">
                                <input className="btn custom-btn-bg mt-4 w-100" type="submit" value="Submit" />
                            </div>

                        </div>
                    </div>

                </form>
            </div>
            </div>
    );
};

export default AddAnArticle;