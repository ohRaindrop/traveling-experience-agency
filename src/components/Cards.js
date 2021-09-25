import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1> Check out this epic destinations</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through the Island of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-1.jpg"
                            text="Do something like that"
                            label="Adventure"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
