// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Test_1 from './components/test_1'
import Test_2 from './components/test_2'
import Test_3 from './components/test_3'
import Test_4 from './components/test_4'
import Test_5 from './components/test_5'

function App() {
  // const [count, setCount] = useState(0)
  // const [count2, setCount2] = useState(0)

  return (
    <div className="bg-gray-200 max-w-screen min-h-screen font-semibold">

<div className="shadow-md w-full top-0 left-0">
      <div className="md:px-10 py-4 px-10 md:flex justify-between items-center bg-white">
        <div className="flex text-2xl cursor-pointer gap-2">
          <span className="font-bold">Test</span>
        </div>
        </div>
        </div>



       <div className="ml-8 mt-4 mr-8 mb-4 ">
        <div className="grid grid-cols-1 gap-6">
          
          {/* test_1 */}
          <div className=" bg-white rounded-lg">
          <Test_1 />
          </div>

          {/* test_2 */}
          <div className=" bg-white rounded-lg">
          <Test_2 />
          </div>

           {/* test_3 */}
           <div className=" bg-white rounded-lg">
          <Test_3 />
          </div>

          {/* test_4 */}
          <div className=" bg-white rounded-lg">
          <Test_4 />
          </div>

           {/* test_5 */}
           <div className=" bg-white rounded-lg">
          <Test_5 />
          </div>



        
        </div>
        </div>


       

    </div>
     
      

  )
}

export default App
