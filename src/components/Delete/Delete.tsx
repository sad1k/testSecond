import { AiOutlineDelete } from "react-icons/ai";
import styles from "./Delete.module.css";
import { useAppDispatch } from "lib/hooks";
import { removeCard } from "lib/features/cardsSlice";
import { Detail } from "lib/features/types";
import { forwardRef } from "react";

interface IDeleteProps {
  person: Detail;
}

const Delete = forwardRef<HTMLButtonElement, IDeleteProps>(
  ({ person }, ref) => {
    const dispatch = useAppDispatch();
    const handleDelete = () => {
      dispatch(removeCard(person));
    };

    return (
      <div className={styles.deleteButton}>
        <button ref={ref} onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </div>
    );
  }
);

export default Delete;
