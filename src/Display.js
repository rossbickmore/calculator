import React from 'react'
import DisplayCalculation from './DisplayCalculation'
import DisplayResult from './DisplayResult'

const DisplayStyle = {
    postition: 'relative',
    display: 'grid',
    height: '23%',
    width: '96%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: '1% 1% 1% 1%',
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