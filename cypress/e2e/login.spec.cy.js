import userData from '../fixtures/user/user_data.json'
import LoginPage from '../pages/loginPage.js'
import DeshboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DeshboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessIvalid()
  })

  it('Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashbiardPage()
  })
})