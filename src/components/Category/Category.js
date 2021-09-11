import React from 'react';
import AllArticle from '../AllArticle/AllArticle';
import Magazine from '../Magazine/Magazine';

const Category = () => {
    // const [articles, setArticles] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5055/articles')
    //         .then(res => res.json())
    //         .then(data => setArticles(data))
    // }, [])

    // let history = useHistory();

//     const categorize = (category) => {
//         history.push(`/articles/${category}`);
//    }
//    console.log(articles)

    return (
        <div className='row mt-5'>
            <div className="col-md-2 bg-light text-center rounded-3 shadow-lg">
                <h3>Category</h3>
                <div className="">
                    <button className="btn btn-primary">All</button>
                    {/* {articles.map(art =><Link onClick={()=> categorize(art.category)} className="btn btn-primary">{art.category}</Link>)} */}
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