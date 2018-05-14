import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RadioButton, { RadioButtonGroup } from 'material-ui/RadioButton';
import { MenuItem } from 'material-ui/Menu';
import Toggle from 'material-ui/Toggle';

const MultipleChoice = ({ options, id, value, changeValue }) =>  {

    const handleChange = (event) => {
        changeValue(id, event.target.value);
    };
    
    const optionElements = options.map((option, i) => {
        return (
            <RadioButton key={i}
                         label={option}
                         value={i}/>
        );
    });
    return (
        <RadioButtonGroup onChange={handleChange}
                          name={id}
                          labelPosition="right">
          { optionElements }
        </RadioButtonGroup>
    );
};

const TextArea = ({ id, value, changeValue }) => {
    const handleChange = (event) => {
        changeValue(id, event.target.value);
    };


    return (
        <TextField onChange={handleChange}
                   name={id}/>
    );
};

const Select = ({ options, id, value, changeValue }) => {
    const handleChange = (event) => {
        changeValue(id, event.target.value);
    };

    const menuElements = options.map((option, i) => {
        return (
            <MenuItem key={i}
                      label={option}
                      value={i}/>
        );
    });
    
    return (
        <SelectField>
          { menuElements }
        </SelectField>
    );
};

const Switch = ({ id, value, changeValue }) => {
    const handleChange = (event, isInputChecked) => {
        changeValue(id, isInputChecked);
    };

    return (
        <Toggle onToggle={handleChange}/>
    );
};

export { MultipleChoice, TextArea };
