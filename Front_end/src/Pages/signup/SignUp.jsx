import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
   
  return (
    <div className='flex flex-col items-center justify-center minw-w-96 mx-auto'>
      <div className='w-full p-6 founded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
    <h1 className='text-3x1 font-semiboldtext-center text-gray-300'>
      SignUp <span className='text-blue-500'>ChatApp</span>

    </h1>

    <form>
      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Full Name</span>
        </label>
        <input type="text"  placeholder='Hari' className='w-full input inout-bordered h-10'/>
      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>UserName</span>
        </label>
        <input type="text"  placeholder='Hari@1234' className='w-full input inout-bordered h-10'/>
      </div>

      <div>
        <label className='label p-2'>
          <span className='text-base label-text'>Password</span>
        </label>
        <input type="text"  placeholder='********' className='w-full input inout-bordered h-10'/>
      </div>

      <div>

        <label className='label p-2'>
          <span className='text-base label-text'>Confirm Password</span>
        </label>
        <input type="text"  placeholder='********' className='w-full input inout-bordered h-10'/>
      </div>

    {/* gender check */}
    <GenderCheckbox/>
      
      <link to='{/Login}' className='text-sm hover;underline hover:text-blue-600 mt-2 inline-block'> Already have an account?</link>
    <div>
                  <button className='btn btn-block btn-sm mt-2'>LOGIN</button>
                </div>
    </form>
      </div>

    </div>
  )
}

export default SignUp



//            starter code for signup


// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center minw-w-96 mx-auto'>
//       <div className='w-full p-6 founded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//     <h1 className='text-3x1 font-semiboldtext-center text-gray-300'>
//       SignUp <span className='text-blue-500'>ChatApp</span>

//     </h1>

//     <form>
//       <div>
//         <label className='label p-2'>
//           <span className='text-base label-text'>Full Name</span>
//         </label>
//         <input type="text"  placeholder='Hari' className='w-full input inout-bordered h-10'/>
//       </div>

//       <div>
//         <label className='label p-2'>
//           <span className='text-base label-text'>UserName</span>
//         </label>
//         <input type="text"  placeholder='Hari@1234' className='w-full input inout-bordered h-10'/>
//       </div>

//       <div>
//         <label className='label p-2'>
//           <span className='text-base label-text'>Password</span>
//         </label>
//         <input type="text"  placeholder='********' className='w-full input inout-bordered h-10'/>
//       </div>

//       <div>

//         <label className='label p-2'>
//           <span className='text-base label-text'>Confirm Password</span>
//         </label>
//         <input type="text"  placeholder='********' className='w-full input inout-bordered h-10'/>
//       </div>

//     {/* gender check */}
//     <GenderCheckbox/>
      
//       <a href="#" className='text-sm hover;underline hover:text-blue-600 mt-2 inline-block'> Already have an account?</a>
//     <div>
//                   <button className='btn btn-block btn-sm mt-2'>LOGIN</button>
//                 </div>
//     </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp