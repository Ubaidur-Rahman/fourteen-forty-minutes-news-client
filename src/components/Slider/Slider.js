import React, { useEffect, useState } from 'react';
import TopNews from '../TopNews/TopNews';

const Slider = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('https://powerful-plateau-71179.herokuapp.com/articles')
            .then(res => res.json())
            .then(data => setArticles(data))
    }, [])
    console.log(articles)

    return (
        <div className='row container-fluid'>
            <div className='col-md-7'>
                <h4 className="text-center">Slider</h4>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">

                            <div>
                                <img src={articles[articles.length - 1]?.imageURL} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-md-block">
                                    <h3 className='text-white bg-primary rounded'>{articles[articles.length - 1]?.title}</h3>
                                </div>
                            </div>
</div>
                            <div className="carousel-item">
                                <div>
                                    <img src={articles[articles.length - 3]?.imageURL} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-md-block">
                                        <h3 className='text-white bg-primary rounded'>{articles[articles.length - 3]?.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div>
                                    <img src={articles[articles.length - 4]?.imageURL} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-md-block">
                                        <h3 className='text-white bg-primary rounded'>{articles[articles.length - 4]?.title}</h3>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='col-md-5'>
                <TopNews articles={articles} />
            </div>
        </div>
    );
};

export default Slider;