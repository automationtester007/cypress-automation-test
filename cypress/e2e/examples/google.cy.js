

describe("etsy", () => {

    it("etsy - social login", () => {

        Cypress.config('defaultCommandTimeout', 80000);
        const username = 'Cypress.Automation.Tester4043@gmail.com'
        const password = 'D!ngdong321'
        const loginUrl = 'https://www.etsy.com/'
        const cookieName = Cypress.env('cookieName')
        const socialLoginOptions = {
            username,
            password,
            loginUrl,
            usernameField: '#input_username',
            passwordFiedl: '#input_password',
            passwordSubmitBtn: '#login_btn_sign',
            headless: false,
            logs: false,
            preLoginSelector: 'button[class*="signin"]',
            loginSelector: 'button[class*="wt-btn wt-btn--secondary wt-width-full"]',
            loginSelectorDelay: 8000,
            postLoginClick: "div[role='button'] > .flag.sa",
            popupDelay: 8000,
            isPopup: true,


        }

        return cy.task('GoogleSocialLogin', socialLoginOptions).then(({ cookies }) => {
            cy.clearCookies()
            const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
            if (cookie) {
                cy.setCookie(cookie.name, cookie.value, {
                    domain: cookie.domain,
                    expiry: cookie.expires,
                    httpOnly: cookie.httpOnly,
                    path: cookie.path,
                    secure: cookie.secure
                })

                Cypress.Cookies.defaults({
                    preserve: cookieName
                })
            }
        })



    });
});
