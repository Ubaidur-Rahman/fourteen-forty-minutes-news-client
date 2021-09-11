import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import AllArticle from '../AllArticle/AllArticle';
import Magazine from '../Magazine/Magazine';

const Category = () => {
    const [articles, setArticles] = useState([])
    const [loggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5055/articles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    let history = useHistory();

    const categorize = (category) => {
        history.push(`/articles/${category}`);
   }
   console.log(articles)

    return (
        <div className='row'>
            <div className="col-md-2 bg-light text-center rounded-3 shadow-lg">
                <h3>Category</h3>
                <div className="">
                    <button className="btn btn-primary">All</button>
                    {articles.map(art =><Link onClick={()=> categorize(art.category)} className="btn btn-primary">{art.category}</Link>)}
                </div>
            </div>
            <div className="col-md-8">
                <AllArticle />

            </div>
            <div className="col-md-2">
                <Magazine />
            </div>

        </div>

    );
};

export default Category;