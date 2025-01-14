import UserCard from "@/components/UserCard";
const AdminPage = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/*Left*/}
      <div className="w-full lg:w-2/3 ">
        {/*USER CARDS*/}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" color="bg-lamaPurple" />
          <UserCard type="teacher" color="bg-lamaYellow" />
          <UserCard type="parent" color="bg-lamaPurple" />
          <UserCard type="staff" color="bg-lamaYellow" />
        </div>
        {/*MIDDLE CHARTS*/}
        <div className="">
           <div>
           </div>
           <div>
           </div>  
        </div> 


      </div>

      {/*Right*/}
      <div className="bg-pink-100 w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
