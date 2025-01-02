import { clerk, dashboardPagePath, loginPagePath } from "./login"

const signup = async () => {
	try {
		await clerk.load()		
		const user = clerk?.user
		if (user) {
			window.location.href = dashboardPagePath
		} else {
			document.getElementById('app').innerHTML = `
				<div id="sign-up"></div>
			`
			const signUpDiv = document.getElementById('sign-up')
			clerk.mountSignUp(signUpDiv, {
				afterSignInUrl: dashboardPagePath,
				afterSignUpUrl: dashboardPagePath,
				signInUrl: loginPagePath
			})
		}
	} catch (e) {
		console.error(e)
	}
}

(async () => {
	await signup()
})()