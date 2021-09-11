import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ArticleDetails = () => {

    const { id } = useParams()
    const [articleDetails, setArticleDetails] = useState([]);
    useEffect(() => {
        fetch(`https://powerful-plateau-71179.herokuapp.com/articleDetails/${id}`)
            .then(res => res.json())
            .then(data => setArticleDetails(data))
    }, [])
    const { title, time, date,  author, category, description, imageURL } = articleDetails;

    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="text-center">
                    <div class="my-5">
                        <h2 className='text-info'>"{title}"</h2>
                    </div>
                    <div class="img-fluid mt-3">
                        <img src={imageURL} alt="" />
                        <h5>{category}</h5>
                    </div>
                    <div className="d-flex justify-content-around">
                        <h6>Author: {author}</h6>
                        <p>Updated on <strong>{time}, {date} </strong></p>
                    </div>
                    <p className="text-muted text-start">{description}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ArticleDetails;