import React from "react";
import PropTypes from 'prop-types';
import defaultProps from 'prop-types';

export const Cards = () => {

    const cardsData = {
        imagenUrl: 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg',
        title: [{ title: 'First Card' }, { title: 'Second Card' }, { title: 'Third Card' }, { title: 'Fourth Card' }],
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        buttonLabel: "Go somewhere"
    }


    return (
        <div className="row">
            {cardsData.title.map((Cards, index) => (
                <div className="col-12 col-md-3" key={index}>
                    <div className="card m-1 p-0" style={{ width: '100%' }}>
                        <img src={cardsData.imagenUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{Cards.title}</h5>
                            <p className="card-text">{cardsData.description}</p>
                            <a href="#" className="btn btn-primary">{cardsData.buttonLabel}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

Cards.propTypes = {
    imagenUrl: PropTypes.string.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
}

Cards.defaultProps = {
    imageUrl: 'Without image',
    title: [
        { title: 'Untitled card' },
        { title: 'Untitled card' },
        { title: 'Untitled Card' },
        { title: 'Untitled Card' }
    ],
    description: 'Without description',
    buttonLabel: 'Button'
};
