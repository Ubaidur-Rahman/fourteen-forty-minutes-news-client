import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const ArticleDetails = () => {

    const { id } = useParams()
    const [articleDetails, setArticleDetails] = useState([]);
    console.log(articleDetails)
    useEffect(() => {
        fetch(`http://localhost:5055/articleDetails/${id}`)
            .then(res => res.json())
            .then(data => setArticleDetails(data))
    }, [])
    const {  title  ,time ,author ,category ,description ,imageURL} = articleDetails;


    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="text-center">
                    <div class="mt-5 mb-5"><h2>{title}</h2> </div>
                    <div class="img-fluid mt-3"><img src={imageURL} alt="" /></div>
                    <small>{author}</small> updated on <span>{time} </span>
                    <div class="mt-5"></div>
                    <div>{category}</div>
                    <div>{description}</div>

                    
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;