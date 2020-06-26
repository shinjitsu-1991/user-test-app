import React, {useEffect, useState} from "react";
import UserTestService from "services/user-test-service";
import PropTypes from 'prop-types';
import Spinner from "containers/Spiner";
import TestTimer from "components/TestTimer";
import CurrentQuestion from "components/CurrentQuestion";
import {CurrentTestWrap, RemoveToListButton, RemoveToListWrap} from "./CurrentTestStyles";

const CurrentTest = (props) => {
    const [currentTestObj, editCurrentTestObj] = useState({
        time: null,
        questions: null,
        currentQuestion: null,
        rightAnswers: null
    })
    const userTestService = new UserTestService();

    useEffect(() => {
        if(currentTestObj.questions === null && currentTestObj.rightAnswers === null) {
            userTestService.getTestData(props.currentTestFileName)
                .then((response) => {
                    editCurrentTestObj({
                        ...currentTestObj,
                        time: response[0].time_limit,
                        questions: response[0].questions,
                        currentQuestion: 0,
                        rightAnswers: 0
                    })
                })
        }
    })

    const StopTest = () => {
        editCurrentTestObj({
            ...currentTestObj,
            time: null,
            questions: null,
            currentQuestion: null
        })
    }

    const CurrentTestView = () => {
        if(currentTestObj.questions === null && currentTestObj.rightAnswers !== null) {
            return(
                <RemoveToListWrap>
                    <p>Right answers: <strong>{currentTestObj.rightAnswers}</strong></p>
                    <RemoveToListButton onClick={() => props.cleanCurrentTest()}>Return to list</RemoveToListButton>
                </RemoveToListWrap>
            );
        }

        if(currentTestObj.questions === null && currentTestObj.rightAnswers === null) {
            return(
                <Spinner />
            );
        }

        if(currentTestObj.questions !== null && currentTestObj.questions.length === currentTestObj.currentQuestion) {
            StopTest();
            return(
                <Spinner />
            );
        }

        if(currentTestObj.questions !== null && currentTestObj.rightAnswers !== null) {
            let currentQuestion = currentTestObj.questions[currentTestObj.currentQuestion];
            let counter = 0;
            let answersList = currentQuestion.answers.map((item) => {
                return <CurrentQuestion key={counter++} answerText={item.option} isRightAnswer={item.is_true} giveAnAnswer={editRightAnswers} />;
            });
            return(
                <CurrentTestWrap>
                    <TestTimer stopTest={StopTest} timeLimit={currentTestObj.time} />
                    <p>Current question: {currentTestObj.currentQuestion + 1} / {currentTestObj.questions.length}</p>
                    <p><strong>{currentQuestion.question}</strong></p>
                    {answersList}
                </CurrentTestWrap>
            )
        }
    }

    const editRightAnswers = (answer) => {
        if(answer === 'true') {
            editCurrentTestObj({
                ...currentTestObj,
                currentQuestion: currentTestObj.currentQuestion + 1,
                rightAnswers: currentTestObj.rightAnswers + 1
            })
        } else {
            editCurrentTestObj({
                ...currentTestObj,
                currentQuestion: currentTestObj.currentQuestion + 1,
            })
        }
    }

    return(
        <>{CurrentTestView()}</>
    );
}

CurrentTest.defaultProps = {
    currentTestFileName: '',
    cleanCurrentTest: () => {}
};

CurrentTest.propTypes = {
    currentTestFileName : PropTypes.string,
    cleanCurrentTest : PropTypes.func
};

export default CurrentTest;