import React from 'react'

// React.Fragment acts as the enclosing tag but doesnt insert any extra DOM element like before.
function FragmentDemo() {
    return (
        <React.Fragment>
            <h1>Fragment demo</h1>
            <p>This describes the fragment demo</p>
        </React.Fragment>
    )
}

export default FragmentDemo
