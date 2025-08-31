import * as React from 'react'

function Error() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 py-10 bg-richblack-900">
        <div className="text-richblack-5 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2">404 Not Found</div>
        <div className="text-richblack-100 text-base sm:text-lg text-center mb-4">Oops! The page you are looking for does not exist.</div>
        <Link to="/" className="mt-2 sm:mt-4 px-4 py-2 bg-yellow-50 text-richblack-900 rounded-md font-semibold text-sm sm:text-base hover:bg-yellow-100 transition">Go to Home</Link>
      </div>
    );
  }
  
  export default Error;