import React, {useEffect, useState} from "react";
import UserTestService from "services/user-test-service";
import Spinner from "containers/Spiner";
import TestItem from "components/TestItem";
import CurrentTest from "components/CurrentTest";
import {TestsListWrap} from "./UserTestComponentStyles";


const UserTestComponent = () => {
    const [testsLists, editTestList] = useState(null);
    const [curTest, editCurrTest] = useState(null);

    const userTestService = new UserTestService();

    useEffect(() => {
        if(!testsLists && !curTest) {
            userTestService.getTestData()
                .then((response) => {
                    editTestList(response)
                });
        }
    })

    const cleanCurrentTest = () => {
        editCurrTest(null);
    }

    const userTestView = () => {
        if(!testsLists && !curTest) {
            return <Spinner />;
        }
        if(testsLists && !curTest) {
            let listItems = testsLists.map((item) => {
                return <TestItem
                    testFile={item.questions_file_name}
                    key={item.questions_file_name}
                    editCurTest={editCurrTest}
                    imgSrc={item.img}
                    testName={item.label} />
            })
            return(
                <TestsListWrap>
                    {listItems}
                </TestsListWrap>
            );
        }
        if(curTest) {
            return <CurrentTest cleanCurrentTest={cleanCurrentTest} currentTestFileName={curTest} />
        }
    }

    return (
        <>{userTestView()}</>
    );
}

export default UserTestComponent;