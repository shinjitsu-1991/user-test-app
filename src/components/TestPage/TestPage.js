import React from "react";
import { connect } from "react-redux";
import { editTestTime } from "../../redux/actions";
import TestEndPage from "../TestEndPage/TestEndPage";

const TestPage = (props) => {

    const getCurrentComponent = () => {
        if(props.test.test_time > 0 && props.test.cur_question <= props.test.cur_test_data.length) {
            setTimeout(() => {props.onEditTime(Number(props.test.test_time) - 1)},1000)
            return props.test.test_time;
        } else {
            return <TestEndPage />
        }
    };

    return(
        <>{getCurrentComponent()}</>
    );

};

const mapStateToProps = state => {
    return {
        test: state.cur_test,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onEditTime: (testTime) => dispatch(editTestTime(testTime))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);