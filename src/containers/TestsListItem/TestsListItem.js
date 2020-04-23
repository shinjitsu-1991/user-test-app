import React from "react";
import {useDispatch} from 'react-redux'
import * as ListItem from './TestsListItemStyled';
import {curTest} from "redux/actions";

const TestsListItem = (props) => {
    const dispatch = useDispatch();
    const payloads = [props.questions_file_name, props.time_limit]
    return(
        <ListItem.ListItemWrap onClick={() => dispatch(curTest(payloads))}>
            <ListItem.ListItemImg img={props.img} />
            <ListItem.ListItemLabel>{props.label}</ListItem.ListItemLabel>
        </ListItem.ListItemWrap>
    );
};

export default TestsListItem;