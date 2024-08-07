import { useLogin } from "../../hooks/useAuth";
import useForm from "../../hooks/useForm";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import {Link, useNavigate} from 'react-router-dom';
import Preloader from "../Preloader/Preloader";
import styles from './Login.module.css';

const initialData = {
  email: '',
  password: ''
}

export default function Login() {

    const [login, errors, isFetching] = useLogin();
    const navigate = useNavigate();

    const formSubmitHandler = async (formData) => {
        const success = await login(formData.email, formData.password)

        if(success) {
          clearData();
          navigate('/');
        }
    }

    const {formData, onChangeHandler, onSubmitHandler, clearData} = useForm(initialData, formSubmitHandler);

    return (
      <>
        {isFetching && <Preloader />}
        <Breadcrumb title="Welcome back" page="Login" breadcrumbImage="img/breadcrumb-bg.jpg"/>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Pictute"
            src="https://static-00.iconduck.com/assets.00/muscle-man-icon-2048x1639-mc1wrpu9.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmitHandler}>
          <p className="text-red-600 text-center">{errors ? errors.serverError : ''}</p>
            <div>
              <label htmlFor="email" className={`block text-sm font-bold leading-6 text-white ${styles.requiredField}`}>
                Email address
              </label>
              <div className="mt-2">
                <p className="text-red-600">{errors ? errors.email : ''}</p>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="johncena@abv.bg"
                  className={`p-2 block w-full rounded-md border-2 ${errors.email ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm 
                    sm:leading-6`
                  }
                  value={formData.email}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className={`block text-sm font-bold leading-6 text-white ${styles.requiredField}`}>
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-orange-600 hover:text-orange-400">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-red-600">{errors ? errors.password : ''}</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`p-2 block w-full rounded-md border-2 ${errors.password ? 'border-red-600' : 'border-gray-300'} py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                    focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`
                  }
                  value={formData.password}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            Not a member?{' '}
            <Link to="/register" className="font-semibold leading-6 text-orange-600 hover:text-orange-400">
              Register
            </Link>
          </p>
        </div>
      </div>
      </>
    );
};