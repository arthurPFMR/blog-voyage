import React from "react";
import Header from "../components/Header";
import BioImg from "../assets/images/traveler.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bio">
        <img className="bio-img" src={BioImg} alt="" />
        <p className="bio-text">
          Bonjour je m'appelle Alexander Kram, je suis un jeune homme dans la
          trentaine, plutôt ordinaire en apparence. Jusqu'à récemment, ma vie
          était banale et monotone. Travaillant dans un bureau grisâtre, je me
          sentait étouffé par la routine quotidienne et cherchais désespérément
          une échappatoire à ma vie terne. <br />
          Un jour, par hasard, je découvre une fiole mystérieuse cachée dans un
          vieux coffret dans le grenier de ma grand-mère. Étiquetée "Élixir
          Temporel", cette potion ancestrale aurait le pouvoir de permettre à
          celui qui la boit de voyager à travers les époques. Intrigué et
          désireux d'échapper à mon ennui, je décide de boire le contenu de la
          fiole. <br />
          Plongez-vous dans mes péripéties temporelles en explorant davantage
          mon voyage fascinant sur ce blog personnel. Suivez mes aventures
          captivantes à travers les époques, découvrez les personnages
          historiques que je rencontre et explorez les dilemmes éthiques
          auxquels je suis confronté. Préparez-vous pour un voyage
          extraordinaire au-delà des limites du temps et de l'espace !
        </p>
      </div>
    </div>
  );
};

export default Home;
