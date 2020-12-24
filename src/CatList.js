import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
        return (
            <div>
                {this.props.catPics.map((img, idx) => <img key={idx} src={img.url}></img>)}
            </div>
        )
    }
}
