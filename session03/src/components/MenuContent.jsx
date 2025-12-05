import { Matieres } from "./Matieres.jsx";
import {StudentList} from "./students/StudentList.jsx";

function MenuContent({ selectedMenu }) {
  switch (selectedMenu) {
    case "Notes":
      return <h2>Gestion des Notes</h2>;

    case "Etudiants":
      return (
        <>
           <h2>Liste des Étudiants</h2>
           <StudentList/>
         </>
      );
    case "Matières":
      return (
        <>
          <h2>Liste des Matières</h2>
          <Matieres />
        </>
      );

    case "A propos":
      return <h2>À propos de l'application</h2>;

    default:
      return <h2>Veuillez choisir un menu</h2>;
  }
}

export { MenuContent };