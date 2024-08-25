import { useAppSelector } from "lib/hooks";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./PersonPage.module.css";

export const PersonPage = () => {
  const { personId } = useParams();
  const navigate = useNavigate();

  const person = useAppSelector((state) =>
    state.cards.cards.find((card) => card.name === personId)
  );

  return (
    <div>
      {" "}
      <div className={styles.detailSection}>
        {person ? (
          <>
            {" "}
            <h2 role="heading">{person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin color: {person.skin_color}</p>
            <p>Eye color: {person.eye_color}</p>
            <p>Birth year: {person.birth_year}</p>
            <p>Gender: {person.gender}</p>
            <button onClick={() => navigate("/")}>Вернуться к списку</button>
          </>
        ) : (
          <p>Нет информации</p>
        )}
      </div>
    </div>
  );
};
