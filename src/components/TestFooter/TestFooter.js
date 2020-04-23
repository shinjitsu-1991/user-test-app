import React from "react";
import {editCurQuestion} from "../../redux/actions";
import {connect} from "react-redux";

const TestFooter = (props) => {
    const buttonText = () => {
        if(props.test.cur_question+1 < props.test.cur_test_data.length) {
            return 'Next question'
        }
        return 'Finish test';
    }
    return(
        <button onClick={()=>props.goToNextQuestion(props.test.cur_question+1)}>{buttonText()}</button>
    )
}

const mapStateToProps = state => {
    return {
        test: state.cur_test,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        goToNextQuestion: (questionNumber) => dispatch(editCurQuestion(questionNumber))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestFooter);