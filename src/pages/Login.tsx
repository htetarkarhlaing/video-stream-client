import { useState } from "react";
import logo from "./../assets/logo.svg";
const Login = ({ onChange }: any) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="mt-20">
      <img src={logo} alt="" className="mx-auto w-[110px]" />
      <div className="mt-6">
        <input
          type="text"
          className="border border-[#dedede] w-[300px] outline-none px-3 py-[9px] rounded-md text-[#444] placeholder:text-[#44444450] text-[15px]"
          placeholder="Paste Your ID"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (value === "") return alert("Enter Your Video ID");
              onChange(value);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Login;
