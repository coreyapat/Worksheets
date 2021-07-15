import React from 'react';

const NameList = (props) => {
    return (
        <span>
            <ul>
                <li>{props.listOfNames.map((listOfNames) =>
                         <React.Fragment>
                         <li>{listOfNames}</li>
                     </React.Fragment>      
                )}</li>
                </ul>
        </span>

    )
}

export default NameList