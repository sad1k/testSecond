import { IoIosHeart } from "react-icons/io";
import styles from "./Like.module.css";
import { useAppDispatch } from "lib/hooks";
import { addLikedCard, removeLikedCard } from "lib/features/cardsSlice";
import { Detail } from "lib/features/types";
import { forwardRef } from "react";

interface ILikeProps {
  person: Detail;
}

export const Like = forwardRef<HTMLDivElement, ILikeProps>(
  ({ person }, ref) => {
    const likedId = `liked ${person.name}`;
    const dispatch = useAppDispatch();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        dispatch(addLikedCard(person));
      } else {
        dispatch(removeLikedCard(person));
      }
    };

    return (
      <div ref={ref} className={styles.likeButton}>
        <input
          onChange={(e) => handleChange(e)}
          className={styles.checkbox}
          type="checkbox"
          id={likedId}
        />
        <label className={styles.button} htmlFor={likedId}>
          <IoIosHeart className={styles.icon} />
        </label>
      </div>
    );
  }
);
