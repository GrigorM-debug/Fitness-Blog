import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'
import {useState} from 'react'
import useForm from '../../../hooks/useForm'
import useSendContacts from '../../../hooks/useContacts'
import Preloader from '../../Preloader/Preloader'
import emailjs from '@emailjs/browser';
import SuccessfullySubmittedContacts from '../../SuccesfullySubmittedContactsModal/SuccessfullySubmittedContacts'

const initialData ={
  firstName: '',
  lastName: '',
  email: '',
  country: 'BG',
  phoneNumber: '',
  message: ''
}

export default function ContactForm() {
    const [agreed, setAgreed] = useState(false)
    const [showNotCheckedMessage, setShowNotCheckedMessagee] = useState(false)
    
    const [isSuccessfullySubmittedContactOpen, setIsSuccessfullySubmittedContactOpen] = useState(false)

    const openSuccessfullySubmittedContact = () => setIsSuccessfullySubmittedContactOpen(true)
    const closeSuccessfullySubmittedContact = () => setIsSuccessfullySubmittedContactOpen(false);

    const [isLoading, sendContacts] = useSendContacts();

    const onSubmit = async (formData) => {
      if(!agreed) {
        setShowNotCheckedMessagee(true);
      } else{
        setShowNotCheckedMessagee(false)
        // const success = await sendContacts(formData);
        await emailjs.send('service_q5x0lkb', 'template_5iidqtj', formData, '9cJKUpCy22i2zOOIA')
        
        if(success) {
          openSuccessfullySubmittedContact();
        }
      }
    }

    const {formData, onChangeHandler, onSubmitHandler} = useForm(initialData, onSubmit)


    return (
      <>
        {isLoading ? <Preloader />
        :  
        <>
        <form onSubmit={onSubmitHandler} className="mx-auto mt-16 max-w-xl sm:mt-20 bg-blacj">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={onChangeHandler}
                value={formData.firstName}
              />
            </div>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={onChangeHandler}
                value={formData.lastName}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={onChangeHandler}
                value={formData.email}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm"
                  onChange={onChangeHandler}
                  value={formData.country}
                >
                  <option value={'BG'}>BG</option>
                  <option value={'US'}>US</option>
                  <option value={'CA'}>CA</option>
                  <option value={'EU'}>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                />
              </div>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={onChangeHandler}
                value={formData.phoneNumber}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                onChange={onChangeHandler}
                value={formData.message}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-orange-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-white">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-white">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <p className='text-red-600 font-medium'>{showNotCheckedMessage ? 'To proceed with your submission, you need to agree to our privacy policy.' : ''}</p>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </form>

      <SuccessfullySubmittedContacts 
        isOpen={isSuccessfullySubmittedContactOpen}
        onClose={closeSuccessfullySubmittedContact}
      />

      </>
      }
      </>
    );
};