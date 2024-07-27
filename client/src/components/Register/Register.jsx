import { UserCircleIcon } from '@heroicons/react/24/solid';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useRegister } from '../../hooks/useAuth';

export default function Register() {
  const initialData = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
    description: '',
    country: '',
    city: '',
    imageUrl: '',
  };

  const [register, errors] = useRegister();
  const navigate = useNavigate();

  const formSubmit = async (formData) => {
    const success = await register(formData);

    if (success) {
      navigate('/');
    }
  };

  const { formData, onChangeHandler, onSubmitHandler } = useForm(initialData, formSubmit);

  return (
    <>
      <Breadcrumb title="Thanks for joining us" page="Register" breadcrumbImage="img/breadcrumb-bg.jpg" />

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-neutral-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://static-00.iconduck.com/assets.00/muscle-man-icon-2048x1639-mc1wrpu9.png"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            <p className="text-red-600 text-center">{errors ? errors.serverError : ''}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="username" className="block text-sm font-bold leading-6 text-white">
                  Username
                </label>
                <div className="mt-2">
                  <p className="text-red-600">{errors ? errors.username : ''}</p>
                  <input
                    id="username"
                    name="username"
                    placeholder="johncena"
                    className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                      ${errors.username ? 'border-red-600' : 'border-gray-300'} 
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    value={formData.username}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold leading-6 text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <p className="text-red-600">{errors ? errors.email : ''}</p>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    placeholder="johncena@abv.bg"
                    className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                      ${errors.email ? 'border-red-600' : 'ring-gray-300'} 
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    value={formData.email}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold leading-6 text-white">
                Password
              </label>
              <div className="mt-2">
                <p className="text-red-600">{errors ? errors.password : ''}</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ${errors.password ? 'border-red-600' : 'ring-gray-300'} 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  value={formData.password}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div>
              <label htmlFor="repassword" className="block text-sm font-bold leading-6 text-white">
                Confirm password
              </label>
              <div className="mt-2">
                <p className="text-red-600">{errors ? errors.rePassword : ''}</p>
                <input
                  id="repassword"
                  name="rePassword"
                  type="password"
                  className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ${errors.rePassword ? 'border-red-600' : 'ring-gray-300'} 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  value={formData.rePassword}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-bold leading-6 text-white">
                About
              </label>
              <div className="mt-2">
                <p className="text-red-600">{errors ? errors.description : ''}</p>
                <textarea
                  id="about"
                  name="description"
                  rows={3}
                  className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                    ${errors.description ? 'border-red-600' : 'ring-gray-300'} 
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                  placeholder="Write a few sentences about yourself."
                  value={formData.description}
                  onChange={onChangeHandler}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="country" className="block text-sm font-bold leading-6 text-white">
                  Country
                </label>
                <div className="mt-2">
                  <p className="text-red-600">{errors ? errors.country : ''}</p>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="USA"
                    className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                      ${errors.country ? 'border-red-600' : 'ring-gray-300'} 
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    value={formData.country}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-bold leading-6 text-white">
                  City
                </label>
                <div className="mt-2">
                  <p className="text-red-600">{errors ? errors.city : ''}</p>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="New York"
                    className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                      ${errors.city ? 'border-red-600' : 'ring-gray-300'} 
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    value={formData.city}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="photo" className="block text-sm font-bold leading-6 text-white">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
                <div className="mt-2">
                  <p className="text-red-600">{errors ? errors.imageUrl : ''}</p>
                  <input
                    id="photo"
                    name="imageUrl"
                    type="text"
                    className={`p-2 block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                      ${errors.imageUrl ? 'border-red-600' : 'ring-gray-300'} 
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
                    value={formData.imageUrl}
                    onChange={onChangeHandler}
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-white">
            Already a member?
            <Link to="/login" className="p-2 font-semibold leading-6 text-orange-600 hover:text-orange-400">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
