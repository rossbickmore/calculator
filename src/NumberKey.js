import React from 'react'

const NumberKeyStyle = {
    color: 'white',
    backgroundColor: 'grey',
}

function NumberKey(props) {

    return (
        <div style={NumberKeyStyle}>
            <p>{props.number}</p>
        </div>
    )
}

export default NumberKey;