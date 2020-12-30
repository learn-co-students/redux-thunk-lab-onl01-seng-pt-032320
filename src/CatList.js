import React from 'react'
import uuid from 'uuid'

export default class CatList extends React.Component {
  render() {
    return (
      <div>
        {this.props.catPics.map((pic, index) => {
          return <img alt='a beautiful cat' key={uuid()} src={pic.url}/>
        })}
      </div>
    )
  }
}