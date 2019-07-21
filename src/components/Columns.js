import React from 'react'

function Columns() {
    const items = [];

    // return (
    //     <React.Fragment>
    //         {
    //             items.map(item => (
    //                 <React.Fragment key={item.id}> // key is the only attribute that react fragments can accept
    //                     <h1>Title</h1>
    //                     <p>{item.title}</p>           
    //                 </React.Fragment>
    //             ))
    //         }
    //         <td>Name</td>
    //         <td>Munnu</td>
    //     </React.Fragment>
    // )

    return (
        <>
            <td>Munnu</td>
            <td>Fasihi</td>
        </>
    )
}

// <> and </> can be used to represent React.Fragment. However, if you use <>, you wont be able to pass in key.

export default Columns;
