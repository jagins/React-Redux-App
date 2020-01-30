import React from 'react';
import Image from 'react-bootstrap/Image'

function Cats(props)
{
    const {catPic} = props;
    return(
        <div className='cat-img'>
            <Image src={catPic} alt='' thumbnail/>
        </div>
    );
}

export default Cats;