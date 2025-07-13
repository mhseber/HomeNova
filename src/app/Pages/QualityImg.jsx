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
      <section className="pt-10 flex w-[225px]">
        <Image src={q1}></Image>
        <Image src={q2}></Image>
        <Image src={q3}></Image>
        <Image src={q4}></Image>
        <Image src={q5}></Image>
        <Image src={q6}></Image>
      </section>
    </div>
  );
};

export default QualityImg;
