import styled, { css } from "styled-components";

export const StyledModal = styled.div` 
    width: ${(props) => props.width}rem;
    height: ${(props) => props.height}rem;
    padding: ${(props) => props.padding}rem;

    border-radius: ${(props) => props.borderRadius}rem;

    position: absolute;
    top: ${(props) => props.top}rem;
    left: ${(props) => props.left}rem;

    background-color: var(${(props) => props.backColor});

    box-shadow: 0px 0px 30px 1px rgba(0, 0, 0, 0.25);
`