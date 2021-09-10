import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './TopNews.css';

const TopNews = () => {
    const [articles, setArticles] = useState([])
    const [loggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5055/articles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])



    const [article, setArticle] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5055/article?category=${'top'}`)
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [])
    console.log(article)





    return (
        <div className='row'>
            <h4 className="text-center">Top News</h4>
            <div className="col-md-4 category-body-bg">
                <div className="card g-5">
                    <div className="category-top">
                        <div className='post-info-category'>
                            <a href="https://discussion.qodeinteractive.com/category/sport/" rel="category tag">{articles[1]?.category}</a>
                        </div>
                        <img src={articles[1]?.imageURL} className='w-100' alt="a" />
                    </div>

                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <small className="text-muted">Added in {articles[3]?.time}</small>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default TopNews;