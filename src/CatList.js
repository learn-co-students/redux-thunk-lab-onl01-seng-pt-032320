import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
        return (
            <div>
            {this.props.catPics.map((img, index) => <img key={index} src={img.url} alt={img.id}></img>)}
            </div>
        )
    }
}
