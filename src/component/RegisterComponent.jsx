import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

function RegisterComponent() {
    const[fileError,setfileError]=useState(false);
    const imageRef=useRef("");
    const {register,handleSubmit,watch,formState:{
        errors
    }}=useForm();

    
    const [preview,setPreview]=useState("")

    const onSubmit = (data) => {
       const formData= {profilePicture:preview,...data}
       if(formData.profilePicture===""){
        console.log(1)
        return setfileError(true)
       }
       console.log(formData)
    
    }

    const handleFileChange=(event)=>{
        const reader=new FileReader();
        const file=event.target.files[0];
        const urlImage=URL.createObjectURL(file);
        console.log(urlImage);
        setfileError(false)
        // const urlImage=console.log(reader.readAsDataURL(file));


        setPreview(urlImage)
    }

    const onUpload=()=>{
        imageRef.current.click();
    }

    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Flowbite
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                    <input type='text' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='John Doe'
                                        {...register('userName',{
                                            required:{value:true,message:'User name is required'}
                                        })}
                                    />
                                     {
                                    errors.userName && errors.userName.type==='required' && <p className='mt-2 text-[14px] text-red-500'>{errors?.userName?.message}</p>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                                        {...register('email',{
                                            required:{value:true,message:'Email is required'}
                                        })}
                                    />
                                     {
                                    errors.email && errors.email.type==='required' && <p className='mt-2 text-[14px] text-red-500'>{errors?.email?.message}</p>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input placeholder='Enter password' type='password' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        {...register('password',{
                                            required:{value:true,message:'Password is required'}
                                        })}
                                    />
                                    {
                                    errors.password && errors.password.type==='required' && <p className='mt-2 text-[14px] text-red-500'>{errors?.password?.message}</p>
                                    }
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                    <input type='password' placeholder='Confirm password'className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        {...register('confirmPassword',{
                                            required:{value:true,message:'Confirm password is required'},
                                            validate:(v)=>{
                                                return v===watch('password') || 'Passwords dont match'
                                            }
                                        })}
                                    />
                                    {
                                    errors.confirmPassword && errors.confirmPassword.type==='required' && <p className='mt-2 text-[14px] text-red-500'>{errors?.confirmPassword?.message}</p> ||
                                    errors.confirmPassword && errors.confirmPassword.type==='validate' && <p className='mt-2 text-[14px] text-red-500'>{errors?.confirmPassword?.message}</p>
                                    }
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex items-center gap-x-4'>
                                    <img src={preview||`https://placehold.co/600x400`} className='w-[65px] aspect-square rounded-full object-cover'/>
                                    <input type='file' className="hidden" ref={imageRef}  onChange={handleFileChange} />
                                    <p className='rounded-3xl px-5 py-3 bg-blue-500 text-white font-bold' onClick={onUpload}  >Select Image</p>
                                    </div>

                                  { fileError && <p className='mt-2 text-[14px] text-red-500'>Image is required</p>}
                                </div>
                              
                                <button className='w-full px-3 py-2 bg-blue-500 text-white uppercase' onSubmit={handleSubmit(onSubmit)}>Register</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="./login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterComponent