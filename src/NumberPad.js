import React from 'react';
import NumberKey from './NumberKey'

const NumberPadStyle = {
    postition: 'absolute',
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto auto auto',
    alignContent: 'space-around',
    gridRowGap: '10px',
    gridColumnGap: '10px',
    padding: '2% 2% 2% 2%',
  }



function NumberPad(props) {

    return (
        <div style={NumberPadStyle}>
        <NumberKey number={props.numbers[1]}/>
        <NumberKey number={props.numbers[2]}/>
        <NumberKey number={props.numbers[3]}/>
        <NumberKey number={props.numbers[4]}/>
        <NumberKey number={props.numbers[5]}/>
        <NumberKey number={props.numbers[6]}/>
        <NumberKey number={props.numbers[7]}/>
        <NumberKey number={props.numbers[8]}/>
        <NumberKey number={props.numbers[9]}/>
        <NumberKey number={props.numbers[0]}/>
        <NumberKey number={props.numbers[10]}/>
        </div>
    )
}



export default NumberPad;