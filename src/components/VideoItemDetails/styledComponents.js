import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 12px;
`

export const FailureImg = styled.img`
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
  margin-top: 12px;
  border-radius: 6px;
`
export const LoaderContainer = styled.div`
  text-align: center;
`

export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  flex-grow: 1;
  padding: 16px;
  padding-bottom: 26px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const VideoDetailContainer = styled.div`
  height: 100%;
`

export const PlayerContainer = styled.div`
  height: 40%;
  @media screen and (min-width: 768px) {
    height: 70%;
    padding: 20px 20px 0px 20px;
  }
`

export const VideoTextContainer = styled.div`
  margin: 0;
  @media screen and (min-width: 768px) {
    padding-left: 24px;
  }
`

export const VideoTitle = styled.p`
  margin: 0;
  margin-top: 8px;
  font-weight: 500;
  font-size: 24px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`

export const LikesAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  color: #475569;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 24px;
  }
`

export const ViewsAndPostedContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewsText = styled.p`
  margin: 0px 10px 0px 0px;
`
export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 0;
  margin-right: 12px;
  margin-top: 12px;
  padding-bottom: 14px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`

export const ChannelLogo = styled.img`
  width: 50px;
`
export const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
`

export const ChannelDetailsText = styled.p`
  margin: 0;
  padding-left: 16px;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
`
export const ChannelDetailsText2 = styled(ChannelDetailsText)`
  color: #64748b;
`
export const VideoDescriptionText = styled.p`
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  margin-bottom: 24px;
`
