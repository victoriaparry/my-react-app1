import './Calc.css';
import { useState } from 'react';

function Button({value, onButtonClick, buttonType}) {
    let className = 'calc-buttons';
    if (buttonType === 'operator') {
        className += ' operator';
    } else if (buttonType === 'equals') {
        className += ' equals';
    } else if (buttonType === 'clear') {
        className += ' clear';
    }
    return (
      <button className= {className} onClick={onButtonClick}>
        {value}
      </button>
    );
}

function Display({value}){
    return(
        <div className='display-number'>{value}</div>
    );
}

export default function Panel(){
    const [number, setNumber] = useState('');

    function saveNum(i){

        const lastChar = number[number.length - 1];
        if ((number === '' && ['+', '*', '/'].includes(i)) ||
            (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(i))){
            return; 
        }

        const newNum = number.concat(i)
        setNumber(newNum);
    }

    function equals(){
        let lastChar = number[number.length - 1];

        if (['+', '*', '/', '-'].includes(lastChar)) {
            return;
        }

        const newNum = eval(number)
        setNumber(newNum.toString());
    }

    function clear(){
        setNumber('');
    }
    console.log(number);

    return(
        <>
        <div className='calc-container'>
            <Display value={number}/>
            <div className="calc-row">
                <Button value={1} onButtonClick ={() => saveNum(1)}/>
                <Button value={2} onButtonClick ={() => saveNum(2)}/>
                <Button value={3} onButtonClick ={() => saveNum(3)}/>
                <Button value={'+'} onButtonClick ={() => saveNum('+')} buttonType="operator"/>  
            </div>
            <div className="calc-row">
                <Button value={4} onButtonClick ={() => saveNum(4)}/>
                <Button value={5} onButtonClick ={() => saveNum(5)}/>
                <Button value={6} onButtonClick ={() => saveNum(6)}/>
                <Button value={'-'} onButtonClick ={() => saveNum('-')} buttonType="operator"/>   
            </div>
            <div className="calc-row">
                <Button value={7} onButtonClick ={() => saveNum(7)}/>
                <Button value={8} onButtonClick ={() => saveNum(8)}/>
                <Button value={9} onButtonClick ={() => saveNum(9)}/>
                <Button value={'*'} onButtonClick ={() => saveNum('*')} buttonType="operator"/>
            </div>
            <div className="calc-row">
            <Button value={'C'} onButtonClick={() => clear()} buttonType="clear"/>
                <Button value={0}  onButtonClick ={() => saveNum(0)}/>
                <Button value={'='} onButtonClick={() => equals()} buttonType="equals"/>
                <Button value={'/'} onButtonClick ={() => saveNum('/')} buttonType="operator"/>  
            </div>
        </div>
        </>
    );
}
