import React from 'react'

const LoginPage = () => {
  return (
    <>
    <div className='flex items-center justify-center bg-[#23242a] h-screen w-screen font-serif flex-col'>
      <h1 class="text-center text-2xl font-bold text-cyan-500">Login Form</h1>
      <div className='h-[450px] w-[370px] flex items-center justify-center relative bg-[#1c1c1c] 
      rounded-br-[50px] rounded-tl-[50px] rounded-bl-[10px] rounded-tr-[10px] overflow-hidden'> 
      <div class="w-[370px] h-[450px] absolute top-[-50%] left-[-50%] bg-cyan-600 transform origin-bottom-right animate-spin"></div>
      <div class="w-[370px] h-[450px] absolute top-[50%] left-[50%] bg-pink-600 transform origin-top-left animate-spin"></div>
      <form action="" className='absolute inset-2 bg-[#28292d] rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] overflow-hidden flex flex-col items-center justify-center'>
      <div className='group relative w-full pb-4 flex items-center justify-center'>
        <input type="text" required='true' className=' group relative w-[300px] p-[2px] bg-transparent text-xl z-10 tracking-tight text-[#23242a] outline-none bg-white rounded-full my-5 px-4'/>
        <span class="absolute left-5 m-[10px] font-bold tracking-tight text[#8f8f8f] group-focus-within:text-cyan-700 transform translate-y-[-30px] ">User-name</span>
      </div>
      <div className='group relative w-full pb-4 flex items-center justify-center'>
        <input type="password" required='true' className=' group relative w-[300px] p-[2px] bg-transparent text-xl z-10 tracking-tight text-[#23242a] outline-none bg-white rounded-full my-5 px-4'/>
        <span class="absolute left-5 m-[10px] font-bold tracking-tight text[#8f8f8f] group-focus-within:text-cyan-700 transform translate-y-[-30px] ">Password</span>
      </div>
      <input type="submit" value="Login" className='text-[20px] border-none outline-none bg-cyan-700 w-[300px] rounded-[90px] font-bold p-[1px] mt-2 active:bg-gradient-to-tr active:from-cyan-700 active:to-pink-700 cursor-pointer' />
      <div class=" flex items-center justify-center font-bold mt-7 gap-4"> 
         <a href="#">Forgot password</a>
         <a href="#">SignUp </a>
       </div>
      </form> 
      </div>
      
    </div>
    </>
  )
}

export default LoginPage
