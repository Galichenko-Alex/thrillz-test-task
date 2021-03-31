import { BIRTHDAY, OCCASIONS_LIST } from "./constants";
import cx from "classnames";
import styles from "./Occasion.module.scss";
import { FC, useState } from "react";

interface Props {
  setOccasion: (option: string) => void;
  selectedOccasion: string;
}

const Occasion: FC<Props> = ({ setOccasion, selectedOccasion }) => (
  <div>
    <h4 className={cx(styles.title, "font-bold mb-8")}>What’s the occasion?</h4>
    <div className="flex flex-wrap">
      {OCCASIONS_LIST.map((occasion) => (
        <button
          className={cx(
            styles.item,
            { [styles.selected]: occasion === selectedOccasion },
            "flex justify-center items-center text-sm focus:outline-none"
          )}
          type="button"
          onClick={() => setOccasion(occasion)}
          key={occasion}
        >
          {occasion}
        </button>
      ))}
    </div>
  </div>
);

export default Occasion;
