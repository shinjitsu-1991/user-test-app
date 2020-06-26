import styled, {keyframes} from 'styled-components';

export const SpinnerWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const rotate = keyframes`
    from {
        transform: rotate(0deg);   
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SpinnerItem = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border-left: 3px solid #000;
    border-bottom: 3px solid #000;
    animation: ${rotate} 1.5s linear infinite;
`;