import { CardList } from "components/CardList/CardList";
import { FilterBar } from "components/FilterBar/FilterBar";
import { useGetPeoplesQuery } from "lib/features/apiSlice";
import { addCards } from "lib/features/cardsSlice";
import { useAppDispatch } from "lib/hooks";
import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";
import loader from "assets/loader.gif";

export const MainPage = () => {
  const { data, isLoading } = useGetPeoplesQuery();
  const dispatch = useAppDispatch();
  const [showLiked, setShowLiked] = useState(false);
  useEffect(() => {
    if (!isLoading) {
      dispatch(addCards(data?.results));
    }
  }, [data?.results, dispatch, isLoading]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowLiked(!!e.target.checked);
  };

  return (
    <div className={styles.mainPage}>
      <FilterBar onChange={handleChange} />
      {!isLoading ? (
        <CardList showLiked={showLiked} />
      ) : (
        <div className={styles.loader}>
          <img src={loader} alt="Загрузка" />
        </div>
      )}
    </div>
  );
};
