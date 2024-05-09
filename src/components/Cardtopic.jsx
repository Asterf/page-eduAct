import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRocket, faBusinessTime, faPeopleGroup, faChartPie, faFlaskVial} from "@fortawesome/free-solid-svg-icons";

export function Cardtopic({ title, number_courses, icon, imgUrl }) {
  return (
    <div className="relative bg-cover w-60 h-72 mx-5 rounded-tl-3xl rounded-tr-3xl shadow-lg shadow-black" style={{'backgroundImage': 'url(../../public/business2.jpg)'}} >
      <div className="w-60 h-60 bg-[#121534] absolute top-28 left-[2px] rounded-tl-full rounded-br-3xl scale-y-[0.5] ">

      </div>
      <div className="absolute inset-x-0 bottom-4 text-center grid justify-center">
        <div className="bg-orange-500 rounded-full w-16 h-16 flex justify-center items-center ml-11">
          {icon == "rocket" ? <FontAwesomeIcon className="text-white text-3xl" icon={faRocket} /> : null}
          {icon == "business" ? <FontAwesomeIcon className="text-white text-3xl" icon={faBusinessTime} /> : null}
          {icon == "marketing" ? <FontAwesomeIcon className="text-white text-3xl" icon={faPeopleGroup} /> : null}
          {icon == "data" ? <FontAwesomeIcon className="text-white text-3xl" icon={faChartPie} /> : null}
          {icon == "science" ? <FontAwesomeIcon className="text-white text-3xl" icon={faFlaskVial} /> : null}
        </div>
        <div className="font-bold mt-3">
          <h4 className="text-white text-xl">{title}</h4>
          <p className="text-orange-500 text-sm">{number_courses} Courses</p>
        </div>
      </div>
    </div>
  );
}
