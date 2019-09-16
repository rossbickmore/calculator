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
    height: '23%',
    width: '96%',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto',
    // gridRowGap: '1%',
    // gridColumnGap: '1%',
    alignContent: 'space-around',
    padding: '1% 1% 1% 1%',
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