import React, { Component } from 'react';
import { MultipleChoice } from './questions.jsx';

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = { questions: [] };
        this.getQuestions();
        this.changeValue = this.changeValue.bind(this);
        this.getQuestions = this.getQuestions.bind(this);
    }

    getQuestions() {
        fetch('/api/surveys/' + this.props.id)
            .then((res) => res.json())
            .then((response) => {
                console.log(response);
                const answers = response.questions.map((item, i) => {
                    return { value: null, index: i };
                });
                this.setState(Object.assign(response, { answers }));
            });
    }

    changeValue(index, value) {
        this.setState((prev) => {
            let newState = prev;
            newState.answers[index].value = value;
            return newState;
        });
    }

    render() {
        const QuestionElements = this.state.questions.map((question, index) => {
            return (
                <MultipleChoice question={question.question}
                                options={question.options}
                                index={index}
                                value={this.state.answers[index].value}
                                changeValue={this.changeValue}
                                key={index}/>
            );
        });
        console.log(QuestionElements);
        return (
            <form onSubmit={this.onSubmit}>
              { QuestionElements }
              <input type="submit" value="Submit"/>
            </form>
        );
    }
}
 
export default Survey;
