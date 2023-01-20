import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SavedVideosMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const SavedVideosContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  flex-grow: 1;
  padding: 16px;
`

export const SavedMenuContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  @media screen and (min-width: 768px) {
    padding-left: 24px;
  }
  background-color: ${props =>
    props.theme === 'dark' ? '#424242' : '#f8fafc'};
`
export const IconContainer = styled.div`
  padding: 12px;
  border-radius: 40px;
  margin-right: 10px;
  margin-left: 12px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
`
export const MenuHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`
export const VideosList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 12px;
`

export const NoVideosImg = styled.img`
  width: 80%;
  padding-top: 16px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const FailureText = styled.h1`
  margin: 0;
  padding: 6px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #fff;
  border: none;
  cursor: pointer;
  width: 100px;
  height: 30px;
  margin-top: 14px;
  border-radius: 6px;
`
