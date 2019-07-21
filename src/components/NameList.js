import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana'];
    const persons = [
        {
            id: 1,
            name: 'Minaam',
            skill: 'Java'
        },
        {
            id: 2,
            name: 'Fasihi',
            skill: 'React'
        },
        {
            id: 3,
            name: 'Lodhi',
            skill: 'Fun'
        }
    ];

    const nameList = names.map((name, index) => <h2>{index} {name}</h2>);
    // const personList = persons.map(person => <Person key={person.id} person={person} />);

    return(
        <div>
            {nameList}
        </div>
    )
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return(
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    // return(
    //     <div>{nameList}</div>
    // )
}

export default NameList;
