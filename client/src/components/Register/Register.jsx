import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

export default function Register() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // You can add code here to handle the file, such as uploading it to a server
    }
  };

  return (
    <>
      <Breadcrumb title="Thanks for joining us" page="Register" breadcrumbImage="img/breadcrumb-bg.jpg"/>

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
        <form action="#" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  placeholder="johncena"
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="johncena@abv.bg"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="repassword" className="block text-sm font-medium leading-6 text-white">
              Confirm password
            </label>
            <div className="mt-2">
              <input
                id="repassword"
                name="repassword"
                type="password"
                required
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
              About
            </label>
            <p className="mt-3 text-sm leading-1 text-white">Write a few sentences about yourself.</p>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                Country
              </label>
              <div className="mt-2">
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  placeholder="Which country are you from?"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  placeholder="Which city are you from?"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">
              Photo
            </label>
            <div className="mt-2 flex items-center gap-x-3">
              <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />
              {/* <button
                type="button"
                onClick={handleButtonClick}
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Add
              </button> */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="text-white"
              />
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
