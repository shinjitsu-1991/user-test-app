import React from "react";
import { connect } from "react-redux";
import { cleanTest } from "../../redux/actions";

const TestEndPage = (props) => {
    return (
        <>
            <h1>Your result:</h1>
            <h2>{props.test.correct_answers}/{props.test.cur_test_data.length}</h2>
            <button onClick={()=>props.cleanTest()}>Return to Tests List</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        test: state.cur_test,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        cleanTest: () => dispatch(cleanTest())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestEndPage);