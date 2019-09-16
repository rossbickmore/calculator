import React from 'react'
import ResetKey from './ResetKey'
import DivideKey from './DivideKey'
import MultiplyKey from './MultiplyKey'
import SubtractKey from './SubtractKey'
import PlusKey from './PlusKey'
import EqualsKey from './EqualsKey'

const CalculationBarStyle = {
    postition: 'relative',
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto',
    gridRowGap: '10px',
    gridColumnGap: '10px',
    alignContent: 'space-around',
    padding: '2% 2% 2% 2%'
}

function CalculationBar() {

    return (
       <div style={CalculationBarStyle}>
        <ResetKey sign="AC"/>
        <DivideKey sign="/" />
        <MultiplyKey sign="x"/>
        <SubtractKey sign="-"/>
        <PlusKey sign="+" />
        <EqualsKey sign="="/>
       </div> 
    )
}


export default CalculationBar;