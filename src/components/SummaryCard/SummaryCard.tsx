import cx from "classnames";
import styles from "./SummaryCard.module.scss";

const SummaryCard = () => (
  <div
    className={cx(
      "p-6 bg-white lg:mt-14 m-2.5 flex justify-center lg:block lg:mx-5 xl:mx-20 2xl:mx-32",
      styles.wrapper
    )}
  >
    <div className="w-72">
      <h3 className={styles.title}>Order Summary</h3>
      <div className="flex flex-row mt-7">
        <img src="/assets/img/avatar.png" className={styles.avatar} />
        <div className="flex flex-col ml-6">
          <span className={styles.name}>Michael McIntyre</span>
          <span className={styles.package}>Shout out package</span>
        </div>
      </div>
      <div className="flex flex-col mt-3.5 pr-5 ">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>£25</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Standard delivery</span>
          <span>FREE</span>
        </div>
        <div className="flex justify-between mt-4 font-bold">
          <span>TOTAL</span>
          <span>£20</span>
        </div>
      </div>
      <div className="mt-6 text-sm">
        You will receive your video no later than{" "}
        <span className={styles.date}>26th January 2021</span>
      </div>
    </div>
  </div>
);

export default SummaryCard;
