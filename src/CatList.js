// write your CatList component here
import React from 'react';

const CatList = props => {
    const catList = props.catPics.map((cat, index) => {
        return <img key={index} alt={cat.id} src={cat.url} />;
  });

  return (
    <div>
        {catList}
    </div>
  );

};

export default CatList;
