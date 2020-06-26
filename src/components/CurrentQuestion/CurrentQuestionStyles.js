import styled from 'styled-components';

export const AnswersItem = styled.p`
    cursor: pointer;
    margin-bottom: 10px;
    opacity: .6;
    transition: .3s;
    box-sizing: border-box;
    padding: 5px;
    max-width: 100%;
    
    &:hover {
        opacity: 1;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0, .75);
    }
    
    &.true {
        color: rgb(0,255,0);
        box-shadow: 0px 0px 10px 0px rgba(0,255,0, .75);
    }
    
    &.false {
        color: rgb(255,0,0);
        box-shadow: 0px 0px 10px 0px rgba(255,0,0, .75);
    }
`;