import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  gap: 1em;
  @media (max-width: 420px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Input = styled.input`
  background-color: #e6f2e6; 
  width: 100%;
  padding: 10px;
  border: 2px solid #004d40; 
  border-radius: 12px;
  font-size: 1rem;

  :focus {
    border: 2px solid #00695c; 
    outline: none;
  }
`;

export const Button = styled.button`
  background: #004d40; 
  border-radius: 12px;
  border: 2px solid #004d40;
  color: #ffffff;
  margin-left: 1em;
  padding: 10px 25px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 700;
  transition: background-color 0.3s ease;

  &:hover {
    background: #00695c; 
  }

  @media (max-width: 420px) {
    margin-top: 10px;
    margin-left: 0;
    width: 100%;
  }
`;
