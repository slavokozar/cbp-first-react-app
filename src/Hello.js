import React from 'react';


export function Hello( props ) {
    // 1) receive the properties from parent component  - props variable

    // 2) render content of JS variable

    // console.log( props );

    return (
        <>
            <h1>Hello, {props.name}!</h1>
            <p>React hopes you have a nice day!</p>
        </>
    )
}