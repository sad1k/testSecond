import { CardList } from "components/CardList/CardList";
import { FilterBar } from "components/FilterBar/FilterBar";
import { useGetPeoplesQuery } from "lib/features/apiSlice";
import { addCards } from "lib/features/cardsSlice";
import { useAppDispatch } from "lib/hooks";
import { useEffect, useState } from "react";
import styles from "./MainPage.module.css";

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
      <CardList showLiked={showLiked} />
    </div>
  );
};
