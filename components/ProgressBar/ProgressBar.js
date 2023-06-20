import styles from "./ProgressBar.module.css";

const ProgressBar = ({ calories, emissions, carbohidrates, fat }) => {
  let ratio;
  if (calories) ratio = calories / 172;
  if (emissions) ratio = emissions / 350;
  if (carbohidrates) ratio = carbohidrates / 50;
  if (fat) ratio = fat / 9.5;
  return (
    <div className={styles.bar}>
      <div className={styles.progress} style={{ transform: `scaleX(${ratio})` }}></div>
    </div>
  );
};

export default ProgressBar;
