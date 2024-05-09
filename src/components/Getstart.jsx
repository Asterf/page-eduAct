import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Getstart() {
  return (
    <div className="bg-[#121534] py-16 relative">
      <img
        className="scale-95 absolute right-10 bottom-[20px]"
        src="../../public/cta1.png"
        alt=""
      />
      <div className="pl-36 flex items-center bg-[#000324] p-8 rounded-tl-3xl rounded-bl-3xl h-96">
        <div className="">
          <h2 className="text-orange-500 text-6xl mb-6 ml-32 font-mono font-bold uppercase">
            Get your quality
          </h2>
          <h3 className="font-bold text-5xl text-white text-left">
            Skills Certificate
          </h3>
          <h3 className="font-bold text-5xl text-white text-left">
            From the Edulerns
          </h3>
          <button className="font-bold text-white bg-orange-500 h-11 w-48 rounded mt-6 text-lg">
            Get Start Now <FontAwesomeIcon className="ml-1" icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
