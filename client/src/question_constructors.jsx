import React from 'react';
import TextField from 'material-ui/TextField';
import List, { ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { questionOptions } from './questions';
import ActionDelete from 'material-ui/svg-icons/action/delete';

const OptionConstructor = ({ question, changeOption, addOption, deleteOption }) => {

    const optionElements = question.options.map((option, i) => {
        const handleChange = (event) => {
            changeOption(i, event.target.value);
        };

        const deleteFunction = ((i) => {
            return () => deleteOption(i);
        })(i);
                               
        const icon = <ActionDelete onClick={deleteFunction}/>;
        
        return (
            <ListItem leftIcon={icon} key={i}>
              <TextField index={i}
                         onChange={handleChange}
                         name="add_option"
                         value={question.options[i]}
                         placeholder={"option " + (i+1)}/>
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
                <OptionConstructor {...props}/>
            );
        case questionOptions['Select']:
            return (
                <OptionConstructor {...props}/>
            );
        default:
            return null;
        }
    })(question.type);

    return (
        <div className="question_constructor">
          <TextField onChange={handleChange} name="addQuestion" placeholder="Question..."/>
          { element }
        </div>
    );
};

export default QuestionConstructor;
