import { faGift, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faDotCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FC, useState } from "react";
import { RECIPIENT_MYSELF, RECIPIENT_SOMEONE } from "./constants";
import cx from "classnames";
import styles from "./Recipient.module.scss";

interface Props {
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setVideoFor: (option: string) => void;
  recipient: string;
}

const Recipient: FC<Props> = ({
  name,
  handleChange,
  recipient,
  setVideoFor,
}) => (
  <div>
    <h4 className={cx(styles.title, "font-bold")}>Who is this video for?</h4>
    <div className="flex justify-center items-center mt-8 flex-wrap md:justify-start sm:flex-nowrap ">
      <button
        type="button"
        className={cx(
          styles.button,
          { [styles.active]: recipient === RECIPIENT_SOMEONE },
          "flex flex-row items-center focus:outline-none mr-3 w-80 md:w-60"
        )}
        onClick={() => setVideoFor(RECIPIENT_SOMEONE)}
      >
        <FontAwesomeIcon
          icon={recipient === RECIPIENT_SOMEONE ? faDotCircle : faCircle}
          className={styles.circleIcon}
        />
        <FontAwesomeIcon icon={faGift} className={styles.icon} />
        <span className={styles.text}>Someone else</span>
      </button>
      <button
        type="button"
        className={cx(
          styles.button,
          { [styles.active]: recipient === RECIPIENT_MYSELF },
          "flex flex-row items-center focus:outline-none mr-3 w-80 mt-4 sm:mt-0 md:w-60"
        )}
        onClick={() => setVideoFor(RECIPIENT_MYSELF)}
      >
        <FontAwesomeIcon
          icon={recipient === RECIPIENT_MYSELF ? faDotCircle : faCircle}
          className={styles.circleIcon}
        />
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <span className={styles.text}>Myself</span>
      </button>
    </div>
    <div>
      <div className={cx(styles.toText, "text-sm mt-8")}>To</div>
      <input
        name="videoTo"
        value={name}
        onChange={handleChange}
        placeholder="Molly"
        className={cx(styles.input, "focus:outline-none mt-2")}
      />
    </div>
  </div>
);

export default Recipient;
