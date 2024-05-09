import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLightbulb, faPhotoFilm, faAtom, faAngleRight } from '@fortawesome/free-solid-svg-icons';


export function Card({ icon, title, description }) {
  return (
    <div className="w-64 border-2 border-[#13194F] rounded-xl py-10 px-5 shadow-lg shadow-black mx-1">
      <div className="bg-orange-500 rounded-2xl w-1/3 flex justify-center py-3 mb-3">
        {(icon == 'graduate' ? <FontAwesomeIcon className="text-white text-4xl" icon={faGraduationCap} /> : null)}
        {(icon == 'idea' ? <FontAwesomeIcon     className="text-white text-4xl"  icon={faLightbulb} /> : null)}
        {(icon == 'video' ? <FontAwesomeIcon    className="text-white text-4xl"   icon={faPhotoFilm} /> : null)}
        {(icon == 'world' ? <FontAwesomeIcon    className="text-white text-4xl"   icon={faAtom} /> : null)}
      </div>
      <div className="text-white">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="mt-4 text-sm mb-3">{description}</p>
        <a className="text-orange-500" href="">Read More <FontAwesomeIcon  className='ml-2 text-sm text-[#4755d8]' icon={faAngleRight}/> </a>
      </div>
    </div>
  );
}
