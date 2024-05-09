import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faF, faLink, faRobot } from "@fortawesome/free-solid-svg-icons";

export function Cardmember({ imgUrl, name, profession, links }) {
  const pathImage = "url(" + imgUrl + ")";
  return (
    <div className="relative">
      <div className="w-40 h-40 border-2 rounded-3xl border-orange-500 bg-orange-500 absolute top-12 left-9 "></div>
      <div
        className="bg-cover scale-75 w-[400px] h-[480px] rounded-3xl bg-blend-multiply hover:bg-amber-700 backdrop-opacity-50 items-center grid justify-center z-50"
        style={{ backgroundImage: pathImage }}
      >
        <div className="text-white">
          <h4 className="font-bold text-3xl text-center">{name}</h4>
          <p className="text-xl text-center">{profession}</p>
          <div className="text-center mt-8 flex justify-center text-xl">
            <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex justify-center items-center">
              <a href={links.facebook}>
                <FontAwesomeIcon icon={faF} />
              </a>
            </div>
            <div className="mx-5 w-10 h-10 border-2 border-blue-500 rounded-full flex justify-center items-center">
              <a href={links.linkedin}>
                <FontAwesomeIcon icon={faLink} />
              </a>
            </div>
            <div className="w-10 h-10 border-2 border-blue-500 rounded-full flex justify-center items-center">
              <a href={links.github}>
                <FontAwesomeIcon icon={faRobot} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
