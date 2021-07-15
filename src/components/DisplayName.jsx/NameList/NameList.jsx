import React from 'react';

const NameList = (props) => {
    return (
        <span>
            <ul>
                <li>{props.listOfNames}</li>
                </ul>
        </span>

    )
}

export default NameList