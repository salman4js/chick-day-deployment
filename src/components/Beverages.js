import React from 'react'
import iceCream from '../assetsPictures/iceCream.jpeg';
import freshJuice from '../assetsPictures/freshJuice.jpeg';
import mojito from '../assetsPictures/mojito.jpeg';
import milkshake from '../assetsPictures/milkshake.jpeg';

const Beverages = () => {
    return (
        <div className="container">
            <div className="browse-name">
                <h1 className="browse-title">
                    BEVERAGES
                </h1>
                <hr />
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={freshJuice} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"> Fresh Juices </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={milkshake} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"> MilkShake's </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={iceCream} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"> Ice Creams </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <img src={mojito} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text"> Mojito's </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beverages