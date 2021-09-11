import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const AllArticle = () => {

    const [articles, setArticles] = useState([])
    const [loggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5055/articles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    let history = useHistory();

    const readArticle = (id) => {
        history.push(`/articleDetails/${id}`);
   }
    return (
        <div className="row ">
            {
                articles.map(article => <div className="col-md-4 g-4 category-body-bg text-center">
                    <div className="category-top card p-3">
                        <p className='post-info-category'>
                           {article.category}
                        </p>
                            <img style={{ height:"80%" }} src={article.imageURL} className='w-50 m-auto ' alt="a" />
                        
                        <div className="title"><h5 className="card-title">"{article.title.slice(0,50)}..."</h5></div>
                        <p className="text-muted">{article.description.slice(0,100)}...</p>
                        <button className="btn btn-primary w-100" onClick={()=> readArticle(article._id)} >Read More</button>
                    </div>
                    </div>)
            }
        </div>

    );
};

export default AllArticle;