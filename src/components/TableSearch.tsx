import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="flex border border-2 rounded-full text-xs flex items-center p-1 gap-2 px-2 ">
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        placeholder="Search.."
        className="bg-inherit w-[200px] outline-none"
      ></input>
    </div>
  );
};

export default TableSearch;
