import cx from "classnames";
import styles from "./Instructions.module.scss";
import { PLACEHOLDER_TEXT } from "./constants";
import { ChangeEvent, FC } from "react";

interface Props {
  instructions: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Instructions: FC<Props> = ({ instructions, handleChange }) => (
  <div>
    <h4 className={cx(styles.title, "mb-4 font-bold")}>Instructions</h4>
    <h5 className={cx(styles.subtitle, "mb-2 text-sm")}>
      My instructions for the talent are :{" "}
    </h5>
    <textarea
      className={cx(styles.textarea, "focus: outline-none")}
      placeholder={PLACEHOLDER_TEXT}
      onChange={handleChange}
      maxLength={500}
      value={instructions}
      name="instructions"
    />
    <div
      className={cx(styles.textWrapper, "flex flex-row justify-end text-xs")}
    >
      <span>max characters 500</span>
    </div>
  </div>
);

export default Instructions;
