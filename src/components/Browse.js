import React from 'react'
import friedchicken from '../assetsPictures/friedchicken.jpeg';
import sandwiches from '../assetsPictures/sandwiches.jpeg';
import burger from '../assetsPictures/burger.jpeg';
import dips from '../assetsPictures/dips.jpeg';


const Browse = () => {
    return (
        <div className="container" id = "browse">
            <div className="browse-wrapper">
                <div className="container">
                    <div className="browse-name">
                        <h1 className="browse-title">
                            BROWSE CATEGORIES
                        </h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                        <div className="card">
                                <img src={friedchicken} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"> Fried Snacks </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img src={sandwiches} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"> Sandwiches </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img src={burger} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"> Burgers </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <img src={dips} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text"> Dips Snacks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Browse