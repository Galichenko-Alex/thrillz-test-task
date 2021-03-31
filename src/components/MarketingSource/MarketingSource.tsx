import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import cx from "classnames";
import styles from "./MarketingSource.module.scss";
import "rc-dropdown/assets/index.css";
import { FC } from "react";
import { SelectInfo } from "rc-menu/lib/interface";

interface Props {
  source: string;
  setSource: (option: string) => void;
}

const MarketingSource: FC<Props> = ({ source, setSource }) => {
  const handleSelect = ({ key }: SelectInfo) => {
    setSource(key as string);
  };

  const menu = (
    <Menu onSelect={handleSelect}>
      <MenuItem key="Google">Google</MenuItem>
      <MenuItem key="YouTube">YouTube</MenuItem>
      <MenuItem key="Facebook">Facebook</MenuItem>
    </Menu>
  );

  return (
    <div>
      <h4 className="font-sm text-charcoal">
        Where did you hear about Thrillz?
      </h4>
      <Dropdown trigger={["click"]} overlay={menu} animation="slide-up">
        <button
          className={cx(styles.dropdown, "focus:outline-none text-left pl-4")}
        >
          {source || "Please select"}
        </button>
      </Dropdown>
    </div>
  );
};

export default MarketingSource;
