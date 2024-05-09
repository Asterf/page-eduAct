import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';

export function Infobox({ icon, title, description }) {
  return (
    <div className="border-r-2 border-l-2 border-b-2 border-orange-400 rounded-2xl mt-5 flex items-center py-5 px-5"> 
      <div className="w-32 bg-[#13194F] flex justify-center py-5 rounded-2xl mr-8">
        {(icon == 'teacher' ? <FontAwesomeIcon  className='text-4xl text-white' icon={faPersonChalkboard} /> : null)}
        {(icon == 'graduate' ? <FontAwesomeIcon className='text-4xl text-white'  icon={faUserGraduate} /> : null)}
      </div>
      <div className="text-white">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
