import React from "react";
import { connect } from "react-redux";
import {getTests} from "redux/actions";
import Spinner from "containers/Spiner";
import TestsListItem from "containers/TestsListItem";

class TestsList extends React.Component {

    componentDidMount() {
        this.props.onRequestData();
    }

    isLoading() {
        if(this.props.loading) {
            return <Spinner />;
        }
        if (this.props.tests.testsList !== null) {
            let counter = 1;
            return this.props.tests.testsList.map((item) => {
                return <TestsListItem {...item} key={counter++}/>
            });
        }
    }

    render() {
        return(
            <>
                {this.isLoading()}
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        tests: state.tests,
        loading: state.loading.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestData: () => dispatch(getTests())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestsList);