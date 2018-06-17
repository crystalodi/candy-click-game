import React from "react"
import "./Image.css"

const Image = props => (
    <div className="col-md-2 mb-2 mt-2">
        <div className="card">
            <img className="card-img-top imagegame" src={props.url} onClick={() => props.imageOnClick(props.id)} clicked={props.clicked.toString()} alt={props.imagealt}/>   
        </div>
    </div>
)

export default Image;