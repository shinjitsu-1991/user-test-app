import React from "react";
import PropTypes from 'prop-types';
import {AnswersItem} from "./CurrentQuestionStyles";

const CurrentQuestion = (props) => {

    const clickOnAnswer = (e) => {
        let target = e.target;
        target.classList.add(props.isRightAnswer);
        setTimeout(() => {target.classList.remove(props.isRightAnswer);}, 600);
        setTimeout(() => props.giveAnAnswer(props.isRightAnswer) ,800)
    }

    return (
        <AnswersItem onClick={(e) => clickOnAnswer(e) }>{props.answerText}</AnswersItem>
    );
};

CurrentQuestion.defaultProps = {
    isRightAnswer: '',
    answerText: '',
    giveAnAnswer: () => {}
};

CurrentQuestion.propTypes = {
    isRightAnswer : PropTypes.string,
    answerText : PropTypes.string,
    giveAnAnswer : PropTypes.func
};

export default CurrentQuestion;