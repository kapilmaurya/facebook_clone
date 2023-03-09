import React, { useState } from 'react';

function RadioButtons(props) {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedValue, setSelectedValue] = useState('');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelectedValue(event.target.value);

    }



    return (
        <div className='w-full border-2 border-gray-200 rounded-md py-[6px] px-2 flex justify-around items-center'>
            <label htmlFor={props.Value}>
                {props.Value}
            </label>
            <input
                type="radio"
                value={props.Value}
                id={props.Value}
                checked={selectedOption === props.Value}
                onChange={handleOptionChange}
                name="options"
            />
        </div>
        
    );
}

export default RadioButtons;