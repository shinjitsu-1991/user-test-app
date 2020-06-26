import styled from 'styled-components';

export const TestItemWrap = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    margin-bottom: 50px;
    
    @media screen and (max-width: 1080px){
        width: 100%;
    }
`;

export const TestItemImg = styled.img`
    max-width: 95%;
    height: auto;
    max-height: 50vh;
`;