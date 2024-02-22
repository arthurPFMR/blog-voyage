import React from "react";
import Header from "../components/Header";
import CopernicImg from "../assets/images/copernic.webp"

const Copernic = () => {
  return (
    <div>
      <Header />
      <div className="article">
        <img className="article-img" src={CopernicImg} alt="" />
      <p>
        Je vais vous raconter l'une des aventures les plus incroyables que j'ai
        vécues lors de mes voyages à travers le temps. Un jour, alors que je me
        trouvais à l'époque de la Renaissance, j'ai décidé de rendre visite à
        l'un des esprits les plus brillants de cette période : Nicolas Copernic.{" "}
        <br />
        J'ai atterri dans la ville de Frombork, en Pologne, au XVIe siècle, où
        Copernic vivait et travaillait. Curieux de voir comment il progressait
        dans ses recherches révolutionnaires sur l'astronomie, je me suis dirigé
        vers son observatoire. Là, je l'ai trouvé plongé dans ses calculs,
        observant le mouvement des étoiles avec une intensité passionnée. <br />
        Approchant avec précaution, j'ai abordé Copernic et lui ai expliqué qui
        j'étais et d'où je venais. Au début, il était sceptique, mais ma
        connaissance des événements futurs et ma détermination à l'aider l'ont
        convaincu de m'écouter. <br />
        Je lui ai parlé de l'héliocentrisme, de la théorie selon laquelle la
        Terre tourne autour du Soleil. À ma grande surprise, Copernic était déjà
        en train d'explorer cette idée, mais il avait besoin d'une confirmation
        supplémentaire pour l'affirmer avec certitude. <br />
        Avec l'aide de mes connaissances modernes, nous avons examiné ses
        calculs et discuté des observations astronomiques. Ensemble, nous avons
        analysé les preuves qui soutenaient l'héliocentrisme, confrontant les
        idées traditionnelles de l'époque. <br />
        Finalement, Copernic a été convaincu de la validité de sa théorie. Avec
        une excitation palpable, il a réalisé que la Terre n'était pas le centre
        de l'univers, mais qu'elle orbitait autour du Soleil, tout comme les
        autres planètes. C'était un moment extraordinaire, où l'ancien et le
        futur se sont rencontrés pour façonner l'histoire de la science. <br />
        Ensemble, nous avons travaillé sur la formulation de ses idées et sur la
        publication de son chef-d'œuvre, "De revolutionibus orbium coelestium"
        ("Des révolutions des sphères célestes"). Cette œuvre allait
        révolutionner notre compréhension de l'univers et ouvrir la voie à une
        nouvelle ère de pensée scientifique. <br />
        Quand il fut temps pour moi de partir, Copernic m'a remercié pour mon
        aide précieuse et m'a souhaité bon voyage dans mes futures aventures.
        Alors que je reprenais mon voyage à travers le temps, je me sentais
        honoré d'avoir contribué, même modestement, à l'avancement de la
        connaissance humaine. Et ainsi, une nouvelle page de l'histoire était
        écrite, grâce à notre rencontre inattendue dans les méandres du temps.
      </p>
      </div>
    </div>
  );
};

export default Copernic;
