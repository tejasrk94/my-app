import React from 'react'

export const Hello = ()=>{
    // return(
    //     <h1>Hello Tejas</h1>
    // )

    return React.createElement('div', {id:'hello', className:'helloClass'}, React.createElement('h1', null, 'Hello'))
}

// export default Hello;