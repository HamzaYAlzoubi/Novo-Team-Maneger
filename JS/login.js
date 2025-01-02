import { Clerk } from '@clerk/clerk-js'

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const clerk = new Clerk(clerkPubKey)

const loginPagePath = "/"
const dashboardPagePath = "/Dashboard.html"

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
			if (currentPath !== loginPagePath) {
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