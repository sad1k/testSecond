import styles from "./CardItem.module.css";
import { Like } from "components/Like/Like";
import Delete from "components/Delete/Delete";
import { Detail } from "lib/features/types";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

interface ICardItemProps {
  person: Detail;
}

export const CardItem = ({ person }: ICardItemProps) => {
  const navigate = useNavigate();

  const likeRef = useRef<HTMLDivElement>(null);
  const deleteRef = useRef<HTMLButtonElement>(null);

  const goToPerson = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      likeRef.current?.contains(target) ||
      deleteRef.current?.contains(target)
    )
      return;
    if (e.target) navigate(`person/${person.name}`);
  };
  return (
    <div onClick={goToPerson} className={styles.person}>
      <span>
        <h2>Имя: {person.name}</h2>
      </span>
      <div className={styles.buttonsPanel}>
        <Like ref={likeRef} person={person} />
        <Delete ref={deleteRef} person={person} />
      </div>
      <span>
        <h3>Рост: {person.height} см</h3>
      </span>
      <span>
        <h3>Вес: {person.mass} кг</h3>
      </span>
      <span>
        <h3>Цвет волос: {person.hair_color}</h3>
      </span>
    </div>
  );
};
