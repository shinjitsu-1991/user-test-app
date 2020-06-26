import React, {useState} from "react";

const TestTimer = (props) => {
    const [time, editTime] = useState(null);

    const viewTime = () => {
        if(time === null) {
            editTime(props.timeLimit)
        } else {
            if(time > 0) {
                setTimeout(() => editTime(time - 1), 1000);
            } else {
                props.stopTest()
            }
            return(
                <>{time} sec left</>
            );
        }
    }

    return(
        <>{viewTime()}</>
    );
}

export default TestTimer;