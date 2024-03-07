import React from 'react'
import { useForm } from 'react-hook-form'
import {LoginUser} from  "../actions/authActions"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import socket from '../socket';

function LoginComponent() {
  
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const { register, handleSubmit,reset, formState: {
    errors
  } } = useForm()

  async function onSubmit(data){
    // console.log("Data =>",data)
    const response=await dispatch(LoginUser(data))
    console.log(response)
    reset();
    if(response?.data?.status==="Success"){
      navigate("/messenger/chatapplication")
      socket.connect()
    }
    
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input type="text" className="px-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your email address'
                {...register('email', {
                  required: { value: true, message: 'Email is required' }
                })}
              />
              {errors.email && errors.email.type === 'required' &&
                <p className='text-red-400 mt-2 text-[13px]'>{errors.email.message} <sup>*</sup></p>
              }
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                {/* <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> */}
              </div>
            </div>
            <div className="mt-2">
              <input type="password" className="px-3 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder='Enter your password'
                {...register('password', {
                  required: { value: true, message: 'Password is required' }
                })}
              />
               {errors.password && errors.password.type === 'required' &&
                <p className='text-red-400 mt-2 text-[13px]'>{errors.password.message} <sup>*</sup></p>
              }

            </div>
          </div>

          <div>
            <button  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit(onSubmit)}>Sign in</button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="./register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">Sign up your account</a>
        </p>
      </div>
    </div>
  )
}

export default LoginComponent