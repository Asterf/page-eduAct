export function Opinion({ opinion, name, profession, imgUrl }) {
  return (
    <div className=" my-5 shadow-lg shadow-black border-l-2 border-t-2 border-b-2 border-[#13194F] w-[110%]  rounded-tl-3xl rounded-bl-3xl relative">
      <img
        className="rounded-full absolute -top-7 z-10 ml-12"
        src={imgUrl}
        alt="User"
      />
      <div className="text-white mt-28 pl-10 w-11/12">
        <p className="text-lg mt-5">{opinion}</p>
        <h4 className="text-lg font-bold mt-5">{name}</h4>
        <p className="text-sm uppercase pb-8">{profession}</p>
      </div>
    </div>
  );
}
