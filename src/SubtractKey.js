import React from 'react'

const CalculationKeyStyle = {
    color: 'white',
    backgroundColor: 'grey',
}

function SubtractKey(props) {

    return (
        <div style={CalculationKeyStyle}>
            <p>{props.sign}</p>
        </div>
    )
}

export default SubtractKey;