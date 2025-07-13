import Image from "next/image";
import q1 from "../../../public/assets/q1.jpg";
import q2 from "../../../public/assets/q2.jpg";
import q3 from "../../../public/assets/q3.jpg";
import q4 from "../../../public/assets/q4.jpg";
import q5 from "../../../public/assets/q5.jpg";
import q6 from "../../../public/assets/q6.jpg";

const QualityImg = () => {
  return (
    <div>
      <section className="pt-10 grid grid-cols-2 md:grid-cols-3 lg:flex  w-full lg:w-[225px]">
        <Image src={q1} alt="q1" />
        <Image src={q2} alt="q2" />
        <Image src={q3} alt="q3" />
        <Image src={q4} alt="q4" />
        <Image src={q5} alt="q5" />
        <Image src={q6} alt="q6" />
      </section>
    </div>
  );
};

export default QualityImg;
