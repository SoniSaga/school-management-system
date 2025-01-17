import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";
import FinanceChart from "@/components/FinanceChart";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import "react-calendar/dist/Calendar.css";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row h-screen gap-4">
      {/*Left*/}
      <div className="flex flex-col w-full lg:w-2/3 gap-8">
        {/*USER CARDS*/}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" color="bg-lamaPurple" />
          <UserCard type="teacher" color="bg-lamaYellow" />
          <UserCard type="parent" color="bg-lamaPurple" />
          <UserCard type="staff" color="bg-lamaYellow" />
        </div>
        {/*MIDDLE CHARTS*/}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART */}
          <div className="w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/*ATTENDANCE CHART*/}
          <div className="w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHART */}
        <div className="w-full h-[700px]">
          <FinanceChart />
        </div>
      </div>

      {/*Right*/}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage;
