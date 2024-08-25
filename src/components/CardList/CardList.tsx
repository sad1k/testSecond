import { CardItem } from "components/CardItem/CardItem";
import { useAppSelector } from "lib/hooks";
import styles from "./CardList.module.css";

export const CardList = ({ showLiked }: { showLiked: boolean }) => {
  const results = useAppSelector((state) =>
    showLiked ? state.cards.likedCards : state.cards.cards
  );

  return (
    <div className={styles.personList}>
      {results.length === 0 && <p>Нет информации</p>}
      {results &&
        results.map((item) => <CardItem key={item.name} person={item} />)}
    </div>
  );
};
