import React from 'react';

const MultipleChoice = ({ question, options, index, value, changeValue }) =>  {

    const handleChange = (event) => {
        changeValue(index, event.target.value);
    };
    
    const optionElements = options.map((option, i) => {
        return (
            <div className="option">
              <input type="radio" name={index} key={i} value={i}/>
              {option}
            </div>
        );
    });
    return (
        <div className="MultipleChoice" onChange={handleChange}>
          <label>{question}</label>
          {optionElements}
        </div>
    );
};

export { MultipleChoice };
