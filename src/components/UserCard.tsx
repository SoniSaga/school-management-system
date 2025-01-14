import Image from "next/image";
const UserCard = ({ type, color }: { type: string; color: string }) => {
  return (
    <div className={"p-4 flex-1 rounded-md flex flex-col " + color}>
      <div className="flex justify-between">
        <span className="bg-white text-[10px] rounded-full text-green-600 px-2 py-1">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20}></Image>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h1 className="capitalize text-sm font-medium text-gray-500">1,234</h1>
    </div>
  );
};

export default UserCard;
