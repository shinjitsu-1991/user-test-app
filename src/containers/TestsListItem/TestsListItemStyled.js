import styled from "styled-components";

export const ListItemWrap = styled.div`
    width:250px;
    height: auto;
    cursor: pointer;
`;

export const ListItemImg = styled.div`
    width: 100%;
    height: 150px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;

export const ListItemLabel = styled.p`
    width: 100%;
    text-align: center;
`;