import React from 'react'
import DisplayCalculation from './DisplayCalculation'
import DisplayResult from './DisplayResult'

const DisplayStyle = {
    postition: 'relative',
    display: 'grid',
    gridTemplateColumns: 'auto',
    gridTemplateRows: 'auto auto',
    gridRowGap: '10px',
    gridColumnGap: '10px',
    alignContent: 'space-around',
    padding: '2% 2% 2% 2%'
}

function Display() {

    return (
       <div style={DisplayStyle}>
           <DisplayCalculation />
           <DisplayResult />
       </div> 
    )
}


export default Display;