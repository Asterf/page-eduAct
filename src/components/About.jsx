import { Infobox } from "./Infobox";
import { Card } from "./Card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export function About() {
  const cardData = [
    {
      icon: "graduate",
      title: "Exclusive Coach",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit",
    },
    {
      icon: "idea",
      title: "Creative Minds",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit",
    },
    {
      icon: "video",
      title: "Video Tutorials",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit",
    },
    {
      icon: "world",
      title: "Worlds Record",
      description:
        "Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit",
    },
  ];

  const infoboxData = [
    {
      icon: "teacher",
      title: "Flexible Classes",
      description:
        "The generated Lorem Ipsum is therebefore always free from repetition, injected humour, or non.characterístic words etc",
    },
    {
      icon: "graduate",
      title: "Live Class From anywhere",
      description:
        "The generated Lorem Ipsum is therebefore always free from repetition, injected humour, or non.characterístic words etc",
    },
  ]

  return (
    <div className="bg-[#121534] px-40 pb-20">
      <div className="flex justify-around pt-24">
        {cardData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="flex items-center mt-24"> 
        <div className="mw-2/4 mr-10">
          <img src="../../public/about1.png" alt="" />
        </div>
        <div className="mx-2/4">
          <h2 className="text-xl text-[#4450C8] ml-3 font-bold">About Us</h2>
          <h3 className="text-4xl text-white font-bold mt-3">Creating a Lifelong Learning Best Community</h3>
          <p className="text-white text-sm mt-5">
            If uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures to generate Lorem Ipsum which
            looks
          </p>
          <div className="mt-6">
            {infoboxData.map((infobox, index) => (
              <Infobox
                key={index}
                icon={infobox.icon}
                title={infobox.title}
                description={infobox.description}
              />
            ))}
          </div>
          <button className="bg-[#4F5DE4] w-44 h-12 rounded mt-10 text-white font-bold">Discover More <FontAwesomeIcon className="ml-1" icon={faArrowRight}/></button>
        </div>
      </div>
    </div>
  );
}
