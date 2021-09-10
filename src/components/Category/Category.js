import React, { useContext, useEffect, useState } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import { UserContext } from '../../App';
import Magazine from '../Magazine/Magazine';

const Category = () => {
    const [articles, setArticles] = useState([])
    const [loggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:5055/articles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])

    let { path, url } = useRouteMatch();
    console.log(path, url);
    let { topicId } = useParams();
    console.log(topicId);


    return (
        <div className='row'>
            <div className="col-md-2 bg-light text-center rounded-3 shadow-lg">
                <h3>Category</h3>
                <button className="all">All</button>
            </div>
        
           
            <Magazine />
            </div>
            
    );
};

export default Category;