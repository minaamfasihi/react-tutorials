import React from 'react';

function Person({ person }) {
    return(
        <h2>
            I am {person.name}. I know {person.skill}
        </h2>
    ) 
}

export default Person;