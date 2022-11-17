import classes from "./About.module.css";

const QUALITIES = [
  {
    id: "q1",
    aboutQuality: "Reliable",
    iconName: "thumbs-up",
  },
  {
    id: "q2",
    aboutQuality: "Affordable",
    iconName: "cash",
  },
  {
    id: "q3",
    aboutQuality: "Secured",
    iconName: "lock",
  },
  {
    id: "q4",
    aboutQuality: "User-friendly",
    iconName: "people",
  },
];

const About = () => {
  return (
    <section className={classes["section-about"]}>
      <div className="container">
        <p className="subheading">About us &mdash; Marketplace</p>
        <h2 className="heading-secondary border-bottom">
          We provide a platform to Buy/Sell your products within your university
          campus.
        </h2>
      </div>

      <div
        className={`container grid grid--2-cols ${classes["grid-about"]} ${classes["container--about"]}`}
      >
        <div className={`${classes.about} border-right`}>
          <h3 className="heading-tertiary">About the marketplace</h3>
          <p className={classes["about-description"]}>
            In our marketplace, we are providing you all students a common
            platform where one can buy some items from other business, or you
            can post about old school supplies, which will help other student to
            buy the supplies on cheap/affordable prices.
          </p>
        </div>
        <div className={classes.qualities}>
          <h3 className="heading-tertiary center-text">
            What makes us different
          </h3>
          <div className={classes.quality}>
            <ul className={classes["quality-items"]}>
              {QUALITIES.map((quality) => {
                return (
                  <li className={classes.item} key={quality.id}>
                    <ion-icon name={quality.iconName}></ion-icon>
                    {quality.aboutQuality}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
