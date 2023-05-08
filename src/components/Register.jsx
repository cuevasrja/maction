import PropTypes from "prop-types"

const Register = ({ darkMode }) => {
    const textColor = darkMode ? "dark:text-white-600" : "text-gray-900"

    const h2Classes = `mt-5 text-center text-2xl font-bold leading-9 tracking-tight ${textColor}`
    const labelClasses = `block text-sm font-medium leading-1 ${textColor}`
    const inputClasses = `block w-full rounded-md border-0 py-1.5 px-2 ${textColor} shadow-sm ring-1 ring-inset ring-gray-300 placeholder:${textColor} focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-1`
    const buttonClasses = "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    const paragraphClasses = `mt-5 text-center text-sm ${textColor}`
    const anchorClasses = "font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    const coloredLogo = `https://tailwindui.com/img/logos/mark.svg?color=${darkMode ? "red" : "indigo"}&shade=600`
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src={coloredLogo}
                    alt="Your Company"
                />
                <h2 className={h2Classes}>
                    Register for an account
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="name" className={labelClasses}>
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className={labelClasses}>
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className={labelClasses}>
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className={labelClasses}>
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password2"
                                name="password2"
                                type="password"
                                required
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={buttonClasses}
                        >
                            Register
                        </button>
                    </div>
                </form>

                <p className={paragraphClasses}>
                    Already have an account?{" "}
                    <a href="#" className={anchorClasses}>
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    )
}

Register.propTypes = {
    darkMode: PropTypes.bool.isRequired
}

export default Register