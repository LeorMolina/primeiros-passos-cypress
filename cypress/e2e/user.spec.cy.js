import userData from '../fixtures/user/user_data.json'
import LoginPage from '../pages/loginPage.js'
import DeshboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyinfoPage from '../pages/myinfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DeshboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()

describe('Orange HRM Tests', () => {

  
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashbiardPage()

    menuPage.acesseMyInfo()
         
    myinfoPage.fillPersonalDetails('First Name', 'Last Name', 'Nick Name')
    myinfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29', '123456', '7891011')
    myinfoPage.fillStatus()
    myinfoPage.saveForm() 
  })

})