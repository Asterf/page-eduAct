import { Opinion } from "./Opinion";

export function Feedback() {
  const opinions = [
    {
      opinion:
        "Flexible Classes refers to the process of acquiring knowledge, skills, and competencies through technology or the Internet. This type of learning is often called e-learning or online learning.",
      name: "Anatham Franklin",
      profession: "Web Developer",
      imgUrl: "../../public/userf.jpg",
    }
  ];

  return (
    <div className="bg-[#121534] py-20 px-40">
      <div className="font-bold text-center">
        <h2 className="text-xl text-[#4450C8]">Testimonial</h2>
        <h3 className="text-3xl text-white mt-2 mb-5">
          What Our Student Feedback
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          {opinions.map((opinion, index) => (
            <Opinion
            key={index}
            opinion={opinion.opinion}
            name={opinion.name}
            profession={opinion.profession}
            imgUrl={opinion.imgUrl}
            />
          ))}
        </div>
        <img className="rounded-full z-10 scale-90" src="../../public/testimonial1.png" alt="" />
      </div>
    </div>
  );
}
