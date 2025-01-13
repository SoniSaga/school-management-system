import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/*LEFT*/}
      <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex flex-row gap-2 justify-center items-center lg:justify-start mb-5"
        >
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Picture of the author"
          />
          <span className="hidden lg:block font-bold">SchoolLama</span>
        </Link>
        <Menu />
      </div>
      {/*RIGHT*/}
      <div className="bg-[#F7F8FA] w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  flex flex-col overflow-scroll">
        <Navbar/>
      </div>
    </div>
  );
}
