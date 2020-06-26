import styled from 'styled-components';

export const RemoveToListWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const RemoveToListButton = styled.button`
    width: auto;
    min-width: 80px;
    box-sizing: border-box;
    height: 40px;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    margin-top: 20px;
    cursor: pointer;
    transition: .3s;
    &:hover {
        border: 1px solid #000;
    }
`;

export const CurrentTestWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 100%;
`;