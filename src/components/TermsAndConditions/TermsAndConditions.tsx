import cx from "classnames";
import styles from "./TermsAndConditions.module.scss";
import { ChangeEvent, FC } from "react";

interface Props {
  checked: boolean;
  handleChange: () => void;
}

const TermsAndConditions: FC<Props> = ({ checked, handleChange }) => (
  <>
    <label
      className={cx(
        styles.container,
        "flex items-center text-charcoal text-sm"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        name="termsAccepted"
      />
      I agree to{" "}
      <a href="#" className="font-bold underline">
        terms of service
      </a>{" "}
      and{" "}
      <a href="#" className="font-bold underline">
        privacy conditions
      </a>
      <span className={styles.checkmark} />
    </label>
  </>
);

export default TermsAndConditions;
