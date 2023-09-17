import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./Context";

const Input = () => {
  const inp1 = useRef();
  const inp2 = useRef();
  const inp3 = useRef();
  const inp4 = useRef();
  const { wrongPassword, setWrongPassword } = useGlobalContext();

  const checkInputs = () => {
    const values = [
      inp1.current.value,
      inp2.current.value,
      inp3.current.value,
      inp4.current.value,
    ];
    if (values.every((value) => value === "2")) {
      setWrongPassword(false);
    } else {
      setWrongPassword(true);
    }
  };

  useEffect(() => {
    checkInputs();
  }, []);

  return (
    <div className="flex w-[210px] h-[30px] items-center gap-[10px] m-[20]">
      <input
        ref={inp1}
        type="text"
        maxLength={1}
        placeholder="2"
        className={`bg-gray-50 border ${
          !wrongPassword ? "border-green-500" : "border-red-500"
        } text-gray-900 text-sm rounded-lg
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
        onChange={() => {
          checkInputs();
          inp2.current.focus();
        }}
      />
      <input
        ref={inp2}
        type="text"
        maxLength={1}
        placeholder="2"
        onChange={() => {
          checkInputs();
          inp3.current.focus();
        }}
        className={`bg-gray-50 border ${
          !wrongPassword ? "border-green-500" : "border-red-500"
        } text-gray-900 text-sm rounded-lg
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
      />
      <input
        ref={inp3}
        type="text"
        maxLength={1}
        placeholder="2"
        onChange={() => {
          checkInputs();
          inp4.current.focus();
        }}
        className={`bg-gray-50 border ${
          !wrongPassword ? "border-green-500" : "border-red-500"
        } text-gray-900 text-sm rounded-lg
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
      />
      <input
        ref={inp4}
        maxLength={1}
        type="text"
        placeholder="2"
        onChange={() => {
          checkInputs();
        }}
        className={`bg-gray-50 border ${
          !wrongPassword ? "border-green-500" : "border-red-500"
        } text-gray-900 text-sm rounded-lg
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`}
      />
    </div>
  );
};

export default Input;
