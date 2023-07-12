import React from "react"; 


export const Cards = () => {

    const cardsContent = [
        {title: 'First Card'},
        {title: 'Second Card'},
        {title: 'Third Card'},
        {title: 'Fourth Card'}
    ]

    return (
        <div className="row"> 
            {cardsContent.map((Cards, index) => (
                <div className="col-12 col-md-3" key={index}>
                    <div className="card m-1 p-0" style={{ width:'100%'}}>
                        <img src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{Cards.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            ))}               
        </div>       
    )
};