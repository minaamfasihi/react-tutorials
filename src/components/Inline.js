import React from 'react'

const heading = {
    fontSize: '72px'//, // name of attributes must be same as css keywords but camel-cased.
    // color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
