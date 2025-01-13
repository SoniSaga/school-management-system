import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/*SEARCH BAR*/}  
      <div className="hidden md:flex border border-2 rounded-full text-xs flex items-center p-1 gap-2 px-2 ">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search.."
          className="bg-inherit w-[200px] outline-none"
        ></input>
      </div>
      {/*ICONS AND USERS*/}
      <div className="w-full flex items-center justify-end gap-6">
        <div className="bg-white rounded-full w-7 h-7 flex justify-center items-center cursor-pointer">
        <Image src="/message.png" alt="" width={20} height={20} />
        </div>

         <div className="relative">
            <Image src="/announcement.png" alt="" width={20} height={20}/>
            <div className="absolute -top-3 -right-3 w-5 h-5 bg-purple-500 p-2 rounded-full text-white text-xs flex items-center justify-center">1</div>
         </div>
         <div className="flex flex-col">
            <span className="text-xs  leading-3 font-medium">John Doe</span>
            <span className="text-[10px] text-gray-500 text-right">Admin</span>
         </div>
         <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full"/>
      </div>
    </div>
  );
};

export default Navbar;
