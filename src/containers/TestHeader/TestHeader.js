import React from "react";
import {connect} from "react-redux";
import Spinner from "../Spiner";

const TestHeader = (props) => {
    let data = props.test;
    if(data.cur_test_data[data.cur_question]) {
        return (
            <>
                {data.cur_question+1}/{data.cur_test_data.length}:{data.cur_test_data[data.cur_question]["question"]}
            </>
        );
    } else {
        return <Spinner />
    }

}

const mapStateToProps = state => {
    return {
        test: state.cur_test,
    };
};

export default connect(mapStateToProps, null)(TestHeader);