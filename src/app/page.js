import Banner from "./Pages/Banner";
import HowTo from "./Pages/HowTo";
import Img from "./Pages/Img";
import QualityImg from "./Pages/QualityImg";
import Testimonials from "./Pages/Testimonials";
import Video from "./Pages/Video";



export default function Home() {
  return (
    <div>
     
      <Banner></Banner>
      <Video></Video>
      <Img></Img>
      <HowTo></HowTo>
      <QualityImg></QualityImg>
      <Testimonials></Testimonials>
    </div>
  );
}
