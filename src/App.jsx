import { Navbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Topics } from "./components/Topics";
import { Feedback } from "./components/Feedback";
import { Members } from "./components/Members";
import { Getstart } from "./components/Getstart";
import { Footter } from "./components/Footter";

function App() {
  return (
    <div>
      <div className="bg-[#000324] text-white px-40">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Topics />
      <Feedback />
      <Members />
      <Getstart />
      <Footter />
    </div>
  );
}

export default App;
