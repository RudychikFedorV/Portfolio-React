import Developers from './Developers';
import developersData from '../../../../js/Developers/DevInfo';

export const Recommend = () => {
  return (
    <section className="recommend">
      <div className="recommend-info">
        <h2 className="title recommend-info__title">Recommendations</h2>
        <p className="desc recommend-info__desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
      </div>
      <Developers developers={developersData} />
    </section>
  );
};
