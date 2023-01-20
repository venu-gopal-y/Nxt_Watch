import styled from 'styled-components'

export const MenuList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
`

export const MenuLink = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  padding-left: 24px;
`

export const MenuHeading = styled.p`
  font-weight: 500;
  padding-left: 16px;
  text-decoration: none;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 16px;
`
