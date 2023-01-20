import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../Context/ThemeContext'

import {
  LoginContainer,
  CardContainer,
  WebsiteLogo,
  Label,
  LoginInput,
  Form,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    passwordType: 'password',
    errorMsg: '',
    showSubmitErr: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickCheckbox = event => {
    this.setState({passwordType: event.target.checked ? 'text' : 'password'})
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitErr: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
    this.setState({showSubmitErr: false})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      passwordType,
      showSubmitErr,
      errorMsg,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const websiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          const theme = isDark ? 'dark' : 'light'
          return (
            <LoginContainer theme={theme}>
              <CardContainer theme={theme}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <Form onSubmit={this.submitForm}>
                  <Label htmlFor="username" theme={theme}>
                    USERNAME
                  </Label>
                  <LoginInput
                    type="text"
                    id="username"
                    placeholder="Username"
                    theme={theme}
                    value={username}
                    onChange={this.onChangeUsername}
                  />
                  <Label htmlFor="password" theme={theme}>
                    PASSWORD
                  </Label>
                  <LoginInput
                    type={passwordType}
                    id="password"
                    placeholder="Password"
                    theme={theme}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <input
                    type="checkbox"
                    id="showPassword"
                    onClick={this.onClickCheckbox}
                  />
                  <ShowPasswordLabel theme={theme} htmlFor="showPassword">
                    Show Password
                  </ShowPasswordLabel>
                  <div>
                    <LoginButton type="submit">Login</LoginButton>
                  </div>
                  <ErrorMsg>{showSubmitErr && `* ${errorMsg}`}</ErrorMsg>
                </Form>
              </CardContainer>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
