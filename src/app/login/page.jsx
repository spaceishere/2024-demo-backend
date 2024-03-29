import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full   px-[100px]  h-screen flex flex-col justify-center items-center gap-10" style={{ backgroundColor: "#090520" }}>
      <div className="text-[32px] text-[white]">Нэвтрэх</div>
      <div className="flex flex-col gap-6">
        <div className="">
          <p className="px-[20px] text-[white]">Цахим хаяг</p>
          <input className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]" placeholder="••••••••••" />
        </div>
        <div className="">
          <p className="px-[20px] text-[white]">Нууц үг</p>
          <input className="shadow-2xl w-[300px] sm:w-[380px] h-[45px] outline-none rounded-full text-[20px] px-[20px]" placeholder="••••••••••" />
        </div>

        <div className="w-[100%] flex justify-between px-[10px] flex-col gap-6">
          <Link href={"/signUp"}>
            <p className="text-[white] ml-[10px] ">Шинэ хэрэглэгч бол энд дарна уу ?</p>
          </Link>
        </div>

        <button className="text-[20px] w-[280px] sm:w-[380px] h-[45px] rounded-full bg-[#1b1927] text-white">Нэвтрэх</button>
      </div>
    </div>
  );
};

export default Login;
