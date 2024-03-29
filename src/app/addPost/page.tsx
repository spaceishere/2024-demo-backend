const Add_merch = () => {
  const uploadimg = "https://i.ibb.co/h1v2j5g/Screen-Shot-2023-05-17-at-19-30-05.png";

  return (
    <div className="w-full bg-[#0E0528] py-[50px] gap-16 flex flex-col items-center">
      <p className="text-[white] text-[45px] font-bold px-[10%]">Create a new gym</p>
      <div className="w-[70%]  flex flex-col  gap-[20px] ">
        <p className="text-[white] text-[25px] font-bold px-[10%]">Name</p>
        <div className="w-[100%] flex flex-col gap-[20px] items-center">
          <input
            type="text"
            placeholder="write name here"
            className="w-[900px] rounded-[12px] h-[50px] border-dashed border-2 border-sky-500 bg-[#15122A] px-[30px] outline-none relative"
          />
        </div>
      </div>
      <div className="w-[70%]  flex flex-col  gap-[20px] ">
        <p className="text-[white] text-[25px] font-bold px-[10%]">Medeelel</p>
        <div className="w-[100%] flex flex-col gap-[20px] items-center">
          <input
            type="text"
            placeholder="write name here"
            className="w-[900px] rounded-[12px] h-[50px] border-dashed border-2 border-sky-500 bg-[#15122A] px-[30px] outline-none relative"
          />
        </div>
      </div>
      <div className="w-[70%]  flex flex-col  gap-[20px] ">
        <p className="text-[white] text-[25px] font-bold px-[10%]">bairshil</p>
        <div className="w-[100%] flex flex-col gap-[20px] items-center">
          <input
            type="text"
            placeholder="write name here x-"
            className="w-[900px] rounded-[12px] h-[50px] border-dashed border-2 border-sky-500 bg-[#15122A] px-[30px] outline-none relative"
          />
          <input
            type="text"
            placeholder="write name here y-"
            className="w-[900px] rounded-[12px] h-[50px] border-dashed border-2 border-sky-500 bg-[#15122A] px-[30px] outline-none relative"
          />
        </div>
      </div>
      <div className="w-[100%] flex  items-center gap-[30px] flex-col">
        <div className="w-[70%]  flex flex-col  gap-[20px] ">
          <p className="text-[white] text-[25px] font-bold px-[10%]">Upload photos</p>
          <div className="w-[100%] flex flex-col gap-[20px] items-center">
            <div className="w-[900px] rounded-[12px] h-[400px] border-dashed border-2 border-sky-500 bg-[#15122A] relative">
              <img src={uploadimg} className="absolute w-[99%] h-[99%]  object-cover object-center top-0 left-0 ml-[4px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_merch;
