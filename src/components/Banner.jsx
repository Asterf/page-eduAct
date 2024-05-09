import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export function Banner() {
  return (
    <div className="flex items-center mt-16 pb-20">
      <div className="mw-2/4 mr-28 pl-12">
        <div className="text-6xl font-bold">
          <h1>A Better</h1>
          <h1 className="mt-2">Learning Journey</h1>
          <h1 className="mt-2">Future Start Here</h1>
        </div>
        <p className="mt-5 text-sm">
          All the Lorem ipsum generators on the Internet tend to repeat
          predefined chunks as necessary.
        </p>
        <div className="mt-8">
          <button className=" rounded w-32 h-10 bg-[#F57005] mr-5 font-bold">Take Now <FontAwesomeIcon className="text-sm ml-1" icon={faArrowRight} /></button>
          <button className="border-2 rounded w-44 h-10 font-bold">Find The Course <FontAwesomeIcon className="text-sm ml-1" icon={faArrowRight} /></button>
        </div>
      </div>
      <div className="mw-2/4">
        <img className="scale-90 border-[25px] border-orange-400 rounded-full " src="../../public/banner.png" alt="" />
      </div>
    </div>
  );
}
