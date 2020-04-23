import React, {Component} from "react";
import { connect } from "react-redux";
import TestsList from "../TestsList/TestsList";
import TestPage from "../TestPage";

class App extends Component {

    getCurrentComponent() {
        if(this.props.cur_test.cur_test_data === null) {
            return (
              <TestsList />
            );
        }
        return (
            <TestPage />
        );
    }

    render() {
        return(
            <>
                {this.getCurrentComponent()}
            </>
        );
    }
};

const mapStateToProps = state => {
    return {
        cur_test: state.cur_test,
    };
};

export default connect(mapStateToProps, null)(App);