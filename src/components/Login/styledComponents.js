import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CardContainer = styled.div`
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  box-shadow: 0px 0px 5px #00000050;
  border-radius: 15px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 768px) {
    min-width: 25%;
    max-width: 30%;
  }
`

export const WebsiteLogo = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`

export const Label = styled.label`
  text-align: left;
  align-self: flex-start;
  font-size: 14px;
  padding: 0px 20px 15px 0px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? 'white' : '#475569')};
  font-weight: 600;
`

export const LoginInput = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 12px;
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  border: 1px solid #94a3b8;
  border-radius: 6px;
  margin-top: 6px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  margin-bottom: 12px;
  outline: none;
`
export const Form = styled.form`
  padding-top: 12px;
`
export const ShowPasswordLabel = styled.label`
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
`

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 7px 0px 7px 0px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  margin: 0;
  font-size: 14px;
  padding-top: 6px;
  font-weight: 400;
`
