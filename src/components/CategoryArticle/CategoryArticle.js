import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CategoryArticle = () => {
    const { category } = useParams()
    console.log(category)
const [categorize, setCategorize] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5055/articles/${category}`)
            .then(res => res.json())
            .then(data => setCategorize(data))
    }, [])
    console.log(categorize)

    return (
        <div>
        </div>
    );
};

export default CategoryArticle;