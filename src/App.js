import React from 'react';
import NumberPad from './NumberPad'

const AppStyle = {
  textAlign: 'center',
  backgroundColor: '#282c34',
  height: '75vmin',
  margin: '20% 20%',
}

const numbers = [0,1,2,3,4,5,6,7,8,9]


function App() {
  return (
    <div style={AppStyle}>
    <NumberPad numbers={numbers}/>
    </div>
  );
}

export default App;
