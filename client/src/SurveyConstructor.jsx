import React, { Component } from 'react';
import { MenuItem } from 'material-ui/Menu';
import SelectField from 'material-ui/SelectField';
import QuestionConstructor from './question_constructors';
import { Question, questionOptions } from './questions.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const foo = () => {};



class SurveyConstructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addQuestion: {
                type: null,
                question: null,
                options: [""]
            },
            questions: [],
        };
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleChangeQuestion = this.handleChangeQuestion.bind(this);
        this.handleChangeOption = this.handleChangeOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    handleAddClick() {

    }
    
    handleAddQuestion(event, key, value) {
        this.setState(prev => {
            let newState = prev;
            newState.addQuestion.type = value;
            return newState;
        });
    }    

    handleChangeQuestion(question) {
        this.setState((prev) => {
            let newState = prev;
            newState.addQuestion.question = question;
            return newState;
        });
    }

    handleChangeOption(index, option) {
        this.setState((prev) => {
            let newState = prev;
            newState.addQuestion.options[index] = option;
            return newState;
        });
    }

    handleAddOption() {
        this.setState((prev) => {
            let newState = prev;
            newState.addQuestion.options.push("");
            return newState;
        });
    }

    handleDeleteOption(i) {
        this.setState((prev) => {
            let newState = prev;
            newState.addQuestion.options.splice(i, 1);
            return newState;
        });
    }

    render() {
        let questionOptionElements = [];

        for(let name in questionOptions) {
            questionOptionElements.push(
                <MenuItem key={name}
                          value={questionOptions[name]}
                          primaryText={name}/>
            );
        }

        const questionElements = this.state.questions.map((question, i) => {            
            return (
                <Question question={question.question}
                          index={i}
                          value={null}
                          changeValue={foo}
                          type={question.question_type}/>
            );
        });
        console.log(this.handleDeleteOption);
        return (
            <div className="survey_constructor">
              <SelectField onChange={this.handleAddQuestion}
                           children={questionOptionElements}
                           value={this.state.addQuestion.type}/>
              { this.state.addQuestion.type &&
                  <QuestionConstructor changeOption={this.handleChangeOption}
                                           changeQuestion={this.handleChangeQuestion}
                                           addOption={this.handleAddOption}
                                           question={this.state.addQuestion}
                                           deleteOption={this.handleDeleteOption}/>
              }
              <RaisedButton type="addQuestion"
                            label="Add"
                            secondary={true}
                            onClick={this.handleAddClick}/>
              { questionElements }
            </div>
        );
    }
}

export default SurveyConstructor;
