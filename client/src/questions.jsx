import React from 'react';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import RadioButton, { RadioButtonGroup } from 'material-ui/RadioButton';
import { MenuItem } from 'material-ui/Menu';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';

const questionOptions = {
    'Multiple Choice': 'mc',
    'Toggle': 'tog',
    'Text Field': 'txt',
    'Calendar': 'date',
    'Select': 'sel'
};

const Calendar = ({ index, value, changeValue }) => {
    const handleChange = (event) => {
        changeValue(index, event.target.value);
    };
    return (
        <DatePicker onChange={handleChange}
                    name={index}/>
    );
};


const MultipleChoice = ({ options, index, value, changeValue }) =>  {
    console.log(index);
    const handleChange = (event) => {
        changeValue(index, event.target.value);
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
                          name={index}
                          labelPosition="right"
                          className="mc">
          { optionElements }
        </RadioButtonGroup>
    );
};

const TextArea = ({ index, value, changeValue }) => {
    const handleChange = (event) => {
        changeValue(index, event.target.value);
    };


    return (
        <TextField onChange={handleChange}
                   name={index}/>
    );
};

const Select = ({ options, index, value, changeValue }) => {
    const handleChange = (event) => {
        changeValue(index, event.target.value);
    };

    const menuElements = options.map((option, i) => {
        return (
            <MenuItem key={i}
                      label={option}
                      value={i}/>
        );
    });
    
    return (
        <SelectField onChange={handleChange}>
          { menuElements }
        </SelectField>
    );
};

const Switch = ({ index, value, changeValue }) => {
    const handleChange = (event, isInputChecked) => {
        changeValue(index, isInputChecked);
    };

    return (
        <Toggle onToggle={handleChange}/>
    );
};

const Question = ({ question, index, value, changeValue, options, type }) => {

    const element = (type => {
        const props = { index: index, value: value, changeValue: changeValue };
        
        switch(type) {
        case questionOptions['Multiple Choice']:
            return (
                <MultipleChoice options={options} {...props}/>
            );
        case questionOptions['Toggle']:
            return (
                <Switch {...props}/>
            );
        case questionOptions['Text Field']:
            return (
                <TextArea {...props}/>
            );
        case questionOptions['Calendar']:
            return (
                <Calendar {...props}/>
            );
        case questionOptions['Select']:
            return (
                <Select options={question.options} {...props}/>
            );
        default:
            return null;
        }
    })(type);

    return (
        <div className="question">
          <label>{question}</label>
          {element}
        </div>
    );
};


export {
    MultipleChoice,
    TextArea,
    Switch,
    Calendar,
    Select,
    Question,
    questionOptions
};
