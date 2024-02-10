import { BlockElements } from "../../../../components/Experience/BlockElements";
import { BlocksArray } from "../../../../js/Experience/BlocksArray";

export const Experience = () => {
  return (
    <section className="experience">
      {BlocksArray.map((item, index) => (
        <div key={index} className="experience__block">
          <h2 className="title experience__title">{item.title}</h2>
          <p className="desc experience__desc">{item.desc}</p>
          <BlockElements blockArray={item.blockArray} />
        </div>
      ))}
    </section>
  );
};
