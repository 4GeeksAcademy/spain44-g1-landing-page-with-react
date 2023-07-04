import React from "react";

export function NavBar(){
    return(
    <nav className="navbar navbar-dark navbar-expand bg-secondary ">
        <div className="container-fluid ms-5">

            <span className="navbar-brand mb-0 h1">Start Bootstrap</span>

            <div className="collapse navbar-collapse justify-content-end me-5">
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><strong>Home</strong></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><strong>About</strong></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><strong>Service</strong></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#"><strong>Contact</strong></a>
                </li>
            </ul> 
            </div>           
        </div>        
    </nav>
    )  
}


