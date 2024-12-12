import styled from 'styled-components';

export const Container = styled.div`
    background-color: #add8e6; 
    color: #2d313f;
    border-radius: 15px;
    padding: 20px 30px;
`;

export const Dropdown = styled.select`
    padding: 8px 12px;
    font-size: 1em;
    border: 2px solid #004d40;
    border-radius: 8px;
    background-color: #e0f7fa; 
    color: #004d40;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease, border-color 0.3s ease;

    &:hover {
        background-color: #b2ebf2; 
        border-color: #00695c;
    }

    &:focus {
        background-color: #80deea; 
        border-color: #004d40;
    }
`;
