import React from "react";

export function MyJumbo() {
    return(
    <div className="p-2 bg-light rounded-3 text-start">
        <div className="container-fluid ">
            <h1 className="display-3 my-4"> 
                A warm welcome!!!
            </h1>
            <p className="col-md-8 fs-4 ">         
            Esto es un proyecto colaborativo de los estudiantes Andrea Betancourt y Daniel E. Rodríguez, estudiantes de 4Geeks Academy   
            </p>
            <button className="btn btn-primary btn-lg my-4" type="button">
                Call to Action!       
            </button>
        </div>
    </div>)
}
