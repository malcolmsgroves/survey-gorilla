import React from 'react';
import TextField from 'material-ui/TextField';
import List, { ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { questionOptions } from './questions';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const MultipleChoiceConstructor = ({ question, changeOption, addOption, deleteOption }) => {

    const optionElements = question.options.map((option, i) => {
        const handleChange = (event) => {
            changeOption(i, event.target.value);
        };
        // i is always the last index
        const deleteFunction = (index => deleteOption(index))(i);
        const icon = <ActionDelete onClick={deleteFunction}/>;
        
        return (
            <ListItem leftIcon={icon} key={i}>
              <TextField index={i}
                         onChange={handleChange}
                         name="add_option"/>
            </ListItem>
        );
    });

    return (
        <List>
          { optionElements }
          <RaisedButton type="addOption"
                        label="Add Option"
                        secondary={true}
                        onClick={addOption}/>
        </List>
    );
    
};



const QuestionConstructor = ({ question, changeQuestion, addOption, deleteOption, changeOption }) => {

    const handleChange = (event) => {
        changeQuestion(event.target.value);
    };
    
    const element = (type => {
        const props = { addOption, changeOption, question, deleteOption };
        switch(type) {
        case questionOptions['Multiple Choice']:
            return (
                <MultipleChoiceConstructor {...props}/>
            );
        default:
            return null;
        }
    })(question.type);

    return (
        <div className="question_constructor">
          <TextField onChange={handleChange} name="addQuestion"/>
          { element }
        </div>
    );
};

export default QuestionConstructor;
