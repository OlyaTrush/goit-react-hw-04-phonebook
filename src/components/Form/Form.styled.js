import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 400px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #ffefef;
  border-radius: 4px;
  outline: none;
`;

export const FormDiv = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormBtn = styled.button`
  max-width: 120px;
  border-radius: 5px;
  padding: 10px;
  border: none;
  margin: auto;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  color: darkcyan;
  font-size: 20px;
  outline: none;
`;

export const Input = styled.input`
  padding: 5px;
  height: 24px;
  border: none;
  background-color: lightgrey;
  font-size: 20px;
  border-radius: 4px;
  outline: none;
`;
