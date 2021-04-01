import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import Link from "next/link";
import cx from "classnames";
import styles from "./Header.module.scss";

const Header: FC = () => (
  <div className="grid grid-cols-12 md:px-20 pt-7 pb-10 bg-white flex items-center ">
    <Link href="/">
      <a className={cx(styles.logo, "col-start-6 lg:col-start-auto")}>
        <img src="/assets/img/logo.png" alt="company logo" />
      </a>
    </Link>
    <div
      className={cx(
        "flex items-center hidden lg:flex col-start-3",
        styles.inputWrapper
      )}
    >
      <FontAwesomeIcon icon={faSearch} className={styles.icon} />
      <input
        placeholder="Search for a celebrity"
        className={cx("outline-none", styles.input)}
      />
    </div>
    <div className="lg:hidden col-start-12 text-xl">
      <FontAwesomeIcon icon={faSearch} />
    </div>
    <button
      className={cx(
        styles.buttonLogin,
        "hidden lg:block lg:col-end-10 focus:outline-none xl:col-end-11"
      )}
    >
      Log in
    </button>
    <button
      className={cx(
        styles.buttonDiscover,
        "hidden lg:block focus:outline-none text-white"
      )}
    >
      Discover celebrities
    </button>
  </div>
);

export default Header;
