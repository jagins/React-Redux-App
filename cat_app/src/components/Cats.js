import React from 'react';

function Cats(props)
{
    const {catPic} = props;
    return(
        <div>
            <img src={catPic} alt=''/>
        </div>
    );
}

export default Cats;