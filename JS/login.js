import { Clerk } from '@clerk/clerk-js'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
export const clerk = new Clerk(clerkPubKey)

export const loginPagePath = "/"
export const dashboardPagePath = "/Dashboard.html"
export const signUpPagePath = "/signup"

export const login = async () => {
	try {
		await clerk.load()
		
		const user = clerk?.user
		const currentPath = window.location.pathname
		
		if (user) {
			if (currentPath === loginPagePath) {
				window.location.href = dashboardPagePath
			} else {
				const userButtonDiv = document.getElementById('user-button')
				clerk.mountUserButton(userButtonDiv)
			}
		} else {
			if (currentPath !== loginPagePath && currentPath !== signUpPagePath) {
				window.location.href = loginPagePath
			}
			else {
				document.getElementById('app').innerHTML = `
					<div id="sign-in"></div>
				`
				const signInDiv = document.getElementById('sign-in')
				clerk.mountSignIn(signInDiv, {
          afterSignInUrl: dashboardPagePath,
          afterSignUpUrl: dashboardPagePath,
					signUpUrl: signUpPagePath
        })
			}
		}
	} catch (e) {
		console.error(e)
	}
}

(async () => {
	await login()
})()