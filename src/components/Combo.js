import React from 'react';
import studentCombo from '../assetsPictures/studentCombo.jpeg';
import premiumCombo from '../assetsPictures/premiumCombo.jpeg';
import familySpecial from '../assetsPictures/familySpecial.jpg';
import partyCombo from '../assetsPictures/partyCombo.jpeg';
import friedChickenCombo from '../assetsPictures/friedChickenCombo.jpeg';
import budgetCombo from '../assetsPictures/budgetCombo.jpg';
const Combo = () => {
    return (
        <div className="container" id="combo">
            <div className="browse-name">
                <h1 className="browse-title">
                    COMBO PACK OFFERS
                </h1>
                <hr />
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <img src={studentCombo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"> Students Combo </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src={premiumCombo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"> Premium Combo </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src={budgetCombo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"> Budget Combo </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src={familySpecial} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"> Family Special Combo</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src={partyCombo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"> Party Combo </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img src={friedChickenCombo} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"> Fried Chicken Combo </p>
                        </div>
                    </div>
                </div>
                    <button type="button" className="btn btn-primary btn-block" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Explore All Combo Offers
                    </button>
                

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel"> Mighty Combo Offers </h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p className="modal-header"> STUDENT COMBO </p>
                                    <p>Fried Chicken</p>
                                    <p> Shawarma </p>
                                    <p> French Fries </p>
                                    <p> Drink (500ML) </p>
                                    <p className="modal-header"> PREMIUM OFFER</p>
                                    <p>Fried Chicken</p>
                                    <p> Shawarma (2) </p>
                                    <p> Fries Large </p>
                                    <p> Drink (500ML) </p>
                                    <p className="modal-header">BUDGET COMBO</p>
                                    <p>Fried Chicken</p>
                                    <p> Shawarma </p>
                                    <p> Fries Large </p>
                                    <p> Drink (500ML) </p>
                                    <p className="modal-header">FAMILY SPECIAL COMBO</p>
                                    <p>Fried Chicken</p>
                                    <p> French Fries Large </p>
                                    <p> Drink (500ML) </p>
                                    <p className="modal-header">PARTY COMBO</p>
                                    <p>Fried Chicken</p>
                                    <p> Shawarma </p>
                                    <p> Chicken Burger </p>
                                    <p> Chilly Cheese Freis </p>
                                    <p> French Fries </p>
                                    <p> Drink (500ML) </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>

    )
}

export default Combo;