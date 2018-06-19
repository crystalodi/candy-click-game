import React from "react"
import "./Image.css"

const Image = props => (
    <img className="imagegame img-thumbnail" src={props.url} onClick={() => props.imageOnClick(props.id)} clicked={props.clicked.toString()} alt={props.imagealt}/> 
)

export default Image;