import { LANG } from "../../utils/langConstant";

const About = ({ lang }) => {
  // console.log(lang);
  const data = LANG[lang];
  return (
    <div>
      <div>
        <h1 className="my-5 text-2xl font-bold">{data.title}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="my-5 text-2xl font-bold">{data.title2}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="my-5 text-2xl font-bold">{data.title3}</h1>
        <p>{data.desc}</p>
      </div>
      <div>
        <h1 className="my-5 text-2xl font-bold">{data.title4}</h1>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};
export default About;
