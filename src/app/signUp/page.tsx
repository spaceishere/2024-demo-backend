import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Signup = () => {
  return (
    <div className="w-full h-screen  flex flex-col justify-center items-center px-[100px] gap-10" style={{ backgroundColor: "#090520" }}>
      <div className="text-[32px] text-white">Бүртгүүлэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Цахим хаяг</p>
          <input className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]" placeholder="••••••••••" />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Хэрэглэгчийн нэр</p>
          <input className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]" placeholder="••••••••••" />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Нууц үг</p>
          <input className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]" placeholder="••••••••••" />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Нууц үгээ давтна уу?</p>
          <input className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]" placeholder="••••••••••" />
        </div>
        <div style={{ display: "flex" }}></div>

        <button className="text-[20px] w-[280px] sm:w-[380px] h-[55px] rounded-full bg-[#1b1927] text-white">Бүртгүүлэх</button>
      </div>
    </div>
  );
};

export default Signup;
