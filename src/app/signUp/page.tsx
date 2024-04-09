"use client";

import { gql, useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

import { useRouter } from "next/navigation";
const REGISTER_MANAGER = gql`
  mutation RegisterManager($input: GymManagerRegisterInput!) {
    registerManager(input: $input) {
      id
      email
      password
      name
    }
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const [registerManager, { data: createdData, loading: createLoading, error: createError }] = useMutation(REGISTER_MANAGER);

  const handleSubmit = () => {
    console.log("working");
    registerManager({
      variables: {
        input: {
          email: email,
          password: password,
          name: name,
        },
      },
      onCompleted: (data) => {
        console.log(data);
        router.push("/");
        alert("login succelful");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div className="w-full h-screen  flex flex-col justify-center items-center px-[100px] gap-10" style={{ backgroundColor: "#090520" }}>
      <div className="text-[32px] text-white">Бүртгүүлэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Цахим хаяг</p>
          <input
            className="shadow-2xl text-black w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Хэрэглэгчийн нэр</p>
          <input
            className="shadow-2xl text-black w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="">
          <p className="px-[20px] text-[16px] text-white">Нууц үг</p>
          <input
            className="shadow-2xl text-black w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <p className="px-[20px]  text-[16px] text-white">Нууц үгээ давтна уу?</p>
          <input
            className="shadow-2xl text-black w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]"
            placeholder="••••••••••"
          />
        </div>
        <div style={{ display: "flex" }}></div>

        <button className="text-[20px] w-[280px] sm:w-[380px] h-[55px] rounded-full bg-[#1b1927] text-white" onClick={handleSubmit}>
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};

export default Signup;
