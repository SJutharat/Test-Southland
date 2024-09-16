
// eslint-disable-next-line no-unused-vars
import React from "react";

const sum = () => {
  console.log("Sum");
  let i = 256;
  let r = 0;

  while (i >= 1) {
    for (let j = 1; j <= 256; j++) {
      console.log("r : " + r);
      console.log("i : " + i);
      r = r + 1;
      i = i / 2;
    }
  }
  console.log("R: " + r);
  const summaryR = r;
  console.log("summaryR : " + summaryR);

  return summaryR;
};

function test_3() {
  return (
    <div className="md:ml-8 my-6">
      <h1 className="text-xl font-bold underline">Test 3</h1>
      <h3 className="mt-4 text-l">
        ถ้า n มีค่าเท่ากับ 256 หลังจากจบการทำงานแล้ว r มีค่าเท่าไร
      </h3>

      <h1 className="text-l"> r = {sum()}</h1>

      <button
        className="btn bg-indigo-600 text-white py-1 px-3 md:ml-0 mt-4 rounded"
        onClick={sum}
      >
        ผลลัพธ์
      </button>
    </div>
  );
}

export default test_3;
