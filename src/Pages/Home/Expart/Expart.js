import React from 'react';

const Expart = ({expart}) => {
    const {name,img,expertize} = expart;
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <img className="w-100" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>
    );
};

export default Expart;