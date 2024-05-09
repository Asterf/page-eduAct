import { Cardtopic } from "./Cardtopic";

export function Topics() {
  //Crear arreglo de objetos para cartasTopics
  const topics = [
    { title: "Business Ideas", number_courses: 9, icon: "rocket" },
    { title: "Business Analysis", number_courses: 8, icon: "business" },
    { title: "Digital Marketing", number_courses: 8, icon: "marketing" },
    { title: "Data Science", number_courses: 8, icon: "data" },
    { title: "Science", number_courses: 9, icon: "science" },
  ];

  return (
    <div className="bg-[#131746] py-20">
      <div className="text-center font-bold">
        <h2 className="text-[#4450C8] text-xl mb-2">Category</h2>
        <h2 className="text-4xl text-white mb-10">Favorite Topics To Learn</h2>
      </div>
      <div className="flex justify-center items-center">
        {topics.map((topic, index) => (
          <Cardtopic
            key={index}
            title={topic.title}
            number_courses={topic.number_courses}
            icon={topic.icon}
          />
        ))}
      </div>
    </div>
  );
}
