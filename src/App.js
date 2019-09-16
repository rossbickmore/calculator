import React from 'react';
import NumberPad from './NumberPad'
import Display from './Display'
import CalculationBar from './CalculationBar'
// import RightCalcBar from './RighCalcBar'

const AppStyle = {
  backgroundColor: '#282c34',
  height: '75vmin',
  margin: '15vmin 15vmin',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'stretch',
}

const numbers = [0,1,2,3,4,5,6,7,8,9,"."]


function App() {
  return (
    <div style={AppStyle}>
    <Display />
    <CalculationBar />
    <NumberPad numbers={numbers}/>
    </div>
  );
}

export default App;
