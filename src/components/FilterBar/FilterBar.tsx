import { Checkbox } from "components/CheckBox/Checkbox";
import styles from "./FilterBar.module.css";

interface IFilterBar {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterBar = ({ onChange }: IFilterBar) => {
  return (
    <div className={styles.filterBar}>
      Показать только понравившиеся карточки
      <Checkbox onChange={onChange} />
    </div>
  );
};
