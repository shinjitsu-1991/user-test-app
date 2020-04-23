import React from "react";
import { connect } from "react-redux";
import { editTestTime } from "../../redux/actions";
import TestEndPage from "../TestEndPage/TestEndPage";
import TestTime from "../../containers/TestTime";
import TestFooter from "../TestFooter/TestFooter";
import TestHeader from "../../containers/TestHeader/TestHeader";

const TestPage = (props) => {

    const getCurrentComponent = () => {
        if(props.test.test_time > 0 && props.test.cur_question < props.test.cur_test_data.length) {
            setTimeout(() => {props.onEditTime(Number(props.test.test_time) - 1)},1000)
            return (
                <>
                    <div>
                        <TestTime time={props.test.test_time} />
                    </div>
                    <div>
                        <TestHeader />
                    </div>
                    <div>
                        <TestFooter />
                    </div>

                </>

            );
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