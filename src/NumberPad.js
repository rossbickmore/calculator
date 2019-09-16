import React from 'react';
import NumberKey from './NumberKey'

const NumberPadStyle = {
    postition: 'relative',
    top: '30%',
    height: '70%',
    width: '80%',
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto auto auto auto auto',
    gridRowGap: '10px',
    gridColumnGap: '10px',
    alignContent: 'space-around',
    padding: '10px',
  }

function NumberPad(props) {

    return (
        <div style={NumberPadStyle}>
        <NumberKey number={props.numbers[0]}/>
        <NumberKey number={props.numbers[1]}/>
        <NumberKey number={props.numbers[2]}/>
        <NumberKey number={props.numbers[3]}/>
        <NumberKey number={props.numbers[4]}/>
        <NumberKey number={props.numbers[5]}/>
        <NumberKey number={props.numbers[6]}/>
        <NumberKey number={props.numbers[7]}/>
        <NumberKey number={props.numbers[8]}/>
        <NumberKey number={props.numbers[9]}/>
        </div>
    )
}



export default NumberPad;