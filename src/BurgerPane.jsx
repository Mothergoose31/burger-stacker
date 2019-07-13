import React from 'react';

const BurgerPane = (props) => (
    <>

    {props.stack.map((stack, i) => <div key={i}>{stack.name}   </div>)}

    </>
)

export default BurgerPane