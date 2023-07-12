import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fourGeeks from "../../img/four-geeks.jpg";


export const Footer = () => {
    return (
        <footer className="footer-dark bg-dark">
            <p className="m-0 text-white-50"><small>
                By: Daniel Rodriguez <a href="https://www.linkedin.com/in/rodr%C3%ADguez-mu%C3%B1oz/" target="_blank"><i className="fab fa-linkedin" style={{color: "#eff1f6"}}></i></a>, 
                Andrea Betancourt <a href="https://www.linkedin.com/in/andre-betancourt/" target="_blank"><i className="fab fa-linkedin" style={{color: "#eff1f6"}}></i></a>
            </small></p>
            <p className="m-0 text-primary"><small>4Geeks Academy <a href="https://4geeks.com/" target="_blank"><img style={{width: "15px"}} src={fourGeeks} alt=""/></a></small></p>
            <p className="m-0 text-white-50"><small>
                Tutores: 
                Hector Chocobar <a href="https://www.linkedin.com/in/hector-chocobar/" target="_blank"><i className="fab fa-linkedin" style={{color: "#eff1f6"}}></i></a>,
                José Raimundo Del Rio <a href="https://www.linkedin.com/in/jrdelriod/" target="_blank"><i className="fab fa-linkedin" style={{color: "#eff1f6"}}></i></a>
            </small></p>    
        </footer>
    )
}