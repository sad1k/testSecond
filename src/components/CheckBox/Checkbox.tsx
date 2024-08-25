import styles from "./Checkbox.module.css";

interface ICheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({ onChange }: ICheckboxProps) => {
  return (
    <div className={styles.main}>
      <label className={styles.checkbox}>
        <input
          onChange={(e) => onChange(e)}
          type="checkbox"
          className={styles.checkboxInput}
        />
        <div className={styles.checkboxDiv}></div>
      </label>
    </div>
  );
};
