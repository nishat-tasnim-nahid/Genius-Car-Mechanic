import React from 'react';

import mechanic1 from '../../../images/machanic/1.jpg'
import mechanic2 from '../../../images/machanic/2.jpg'
import mechanic3 from '../../../images/machanic/3.jpg'
import mechanic4 from '../../../images/machanic/4.jpg'
import Expart from '../Expart/Expart';

const exparts = [
    {
        img: mechanic1,
        name: 'Andrew Smith',
        expertize: '-Engine Expart-'
    },
    {
        img: mechanic2,
        name: 'John Anderson',
        expertize: '-Polish Expart-'
    },
    {
        img: mechanic3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expart-'
    },
    {
        img: mechanic4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expart-'
    },
]

const Exparts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Exparts</h2>
            <div className="row">
                {
                    exparts.map(expart => <Expart
                    key={expart.name}
                    expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;