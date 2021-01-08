import React from 'react'

const CatList = props => {

    const allCats = props.catPics.map((cat, index) => {
        return <img key={index} alt={cat.id} src={cat.url}/>
    })

    return (
        <div>

            {allCats}
        </div>
    )
}

export default CatList;
