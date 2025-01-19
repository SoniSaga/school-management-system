import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import "react-calendar/dist/Calendar.css";

const TeacherPage = () => {
  return (
    <div className="flex  flex-col xl:flex-row gap-4 p-4 h-[1000px]">
      <div className="w-full xl:w-2/3 bg-white rounded-md ">
        <div className="h-full flex flex-col p-4">
          <h1 className="font-bold">Schedule(4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/*Right*/}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
