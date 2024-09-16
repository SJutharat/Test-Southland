
// eslint-disable-next-line no-unused-vars
import React  from "react";

function test_2() {



    let x=1
    let i=1

    const sum = () => {

        while ( x <= 1000 ){
          console.log("x : " + x)
          console.log("i : " + i)

          x = Math.pow(2,x)
          i = i+1

        }
        const summaryI = i
        console.log("summaryI : " + summaryI)

        return summaryI
    }



  return (
    <div className="md:ml-8 my-6">
      <h1 className="text-xl font-bold underline">Test 2</h1>

      <h3 className="mt-4 text-l">
        จากส่วนของโปรแกรมที่กำหนดให้ต่อไปนี้ หลังจากจบการทำงานแล้ว ค่าของ i
        มีค่าเท่าใด
      </h3>

      <h1 className="text-l"> i = {sum()}</h1>

        <button className="btn bg-indigo-600 text-white py-1 px-3 md:ml-0 mt-4 rounded"
        onClick={sum}>
         ผลลัพธ์
        </button>





   
    </div>
  );
}

export default test_2;
