import { GoogleLogin } from '@react-oauth/google';

export default function LoginForm({ onGoogleSuccess, onGoogleFailure }) {
    return (
        <div>

            <div className="relative left-11 max-w-md mx-auto w-full justify-center">
                <form className="m-4 bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your email</label>
                        <input type="email" id="email"
                            className="shadow appearance-none border rounded w-full h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="name@flowbite.com"
                            required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Your password</label>
                        <input type="password" id="password"
                            className="shadow appearance-none border rounded w-full h-12 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox"
                                className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                required />
                        </div>
                        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                    </div>
                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-3 text-center">
                        Sign in
                    </button>
                    <div className="flex items-center justify-center mt-4">
                        <div className="border-t border-gray-300 flex-grow"></div>
                        <span className="px-4 text-gray-500">or</span>
                        <div className="border-t border-gray-300 flex-grow"></div>
                    </div><br />

                    {/* Google Login Button */}
                    <GoogleLogin 
                        onSuccess={onGoogleSuccess}
                        onError={onGoogleFailure}
                    />
                </form>
            </div>
        </div>
    );
}
