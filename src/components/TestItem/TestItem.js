import React from "react";
import PropTypes from 'prop-types';
import {TestItemImg, TestItemWrap} from "./TestItemStyles";


const TestItem = (props) => {
    return(
        <TestItemWrap onClick={() => props.editCurTest(props.testFile)}>
            <TestItemImg src={props.imgSrc} alt=""/>
            <p>{props.testName}</p>
        </TestItemWrap>
    )
}

TestItem.defaultProps = {
    testName: '',
    imgSrc: '',
    editCurTest: () => {},
    testFile: ''
};

TestItem.propTypes = {
    testName : PropTypes.string,
    imgSrc : PropTypes.string,
    testFile : PropTypes.string,
    editCurTest : PropTypes.func,

};

export default TestItem;