import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { MultipleChoice, TextArea } from './questions.jsx';

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = { questions: [] };
        this.getQuestions();
        this.changeValue = this.changeValue.bind(this);
        this.getQuestions = this.getQuestions.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.putAnswers = this.putAnswers.bind(this);
    }

    getQuestions() {
        fetch('/api/surveys/' + this.props.id)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                const answers = response.questions.map((question, i) => {
                    return { value: null, question_id: question.id, question_type: question.question_type };
                });
                this.setState(Object.assign(response, { answers }));
            });
    }

    changeValue(index, value) {
        this.setState((prev) => {
            let newState = prev;
            newState.answers[index].value = value;
            return newState;
        }, () => console.log(this.state));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.putAnswers();
    }

    putAnswers() {
        const data = Object.assign({ answers: this.state.answers }, { survey_id: this.props.id });
        fetch('/api/responses/', {
            body: JSON.stringify({ response: data }),
            headers: { 'content-type': 'application/json' },
            method: 'POST'
        });
            
    }

    render() {
        const QuestionElements = this.state.questions.map((question, index) => {
            const QuestionElement = (type => {
                switch(type) {
                case "mc":    
                    return (
                        <MultipleChoice question={question.question}
                                        options={question.options}
                                        index={index}
                                        value={this.state.answers[index].value}
                                        changeValue={this.changeValue}
                                        key={index}/>
                    );
                case "txt":
                    return (
                        <TextArea question={question.question}
                                  index={index}
                                  value={this.state.answers[index].value}
                                  changeValue={this.changeValue}
                                  key={index}/>
                    );
                default:
                    return null;
                }
            })(question.question_type);

            return (
                <div className="question">
                  <label>{ question.question }</label>
                  { QuestionElement }
                </div>
            );
        });
        console.log(QuestionElements);
        return (
            <form onSubmit={this.handleSubmit}>
              { QuestionElements }
              <RaisedButton type="submit" label="Submit"/>
            </form>
        );
    }
}
 
export default Survey;
