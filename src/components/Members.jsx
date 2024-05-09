import { Cardmember } from "./Cardmember";

export function Members() {
  const members = [
    {
      name: "Aleshaa Brown",
      profession: "Web Developer",
      imgUrl: "../../public/team1.jpg",
      links: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Devon Lane",
      profession: "UI/UX Designer",
      imgUrl: "../../public/team2.jpg",
      links: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Mike Hardson",
      profession: "Designer",
      imgUrl: "../../public/team3.jpg",
      links: {
        facebook: "https://facebook.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
  ];

  return (
    <div className="bg-[#13194F] px-40 py-20">
      <div className="font-bold text-center">
        <h2 className="text-[#4450C8] text-xl">Team Member</h2>
        <h3 className="text-white text-4xl mt-2">Meet Our Professional Team Members</h3>
      </div>
      <div className="flex justify-around items-center">
        {members.map((member, index) => (
          <Cardmember
            key={index}
            name={member.name}
            profession={member.profession}
            imgUrl={member.imgUrl}
            links={member.links}
          />
        ))}
      </div>
    </div>
  );
}
