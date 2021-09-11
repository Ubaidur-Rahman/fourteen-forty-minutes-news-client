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


    articles.length =3
    console.log(articles)

    





    return (
        <div className='row'>
            <h4 className="text-center m-3 top-news">Trending News</h4>
            <div className="row">
            {
                articles.map(article => <div className="col-md-4 text-center category-body-bg">
                <div className="card">
                    <div className="category-top">
                        <div className='post-info-category'>
                            {article.category}
                        </div>
                        <img src={article.imageURL} className='w-100' alt="a" />
                    

                    
                        <h5 className="card-title">{article.title}</h5>
                    </div>
                </div>

            </div>)
            }
            </div>


        </div>
    );
};

export default TopNews;