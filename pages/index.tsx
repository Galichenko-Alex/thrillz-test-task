import Header from "src/components/Header";
import SummaryCard from "src/components/SummaryCard";
import Recipient from "src/components/Recipient";
import Occasion from "../src/components/Occasion";
import Instructions from "../src/components/Instructions";
import MarketingSource from "../src/components/MarketingSource";
import TermsAndConditions from "../src/components/TermsAndConditions";
import { Formik } from "formik";
import { SummaryValues } from "../src/types/types";
import { RECIPIENT_MYSELF } from "../src/components/Recipient/constants";
import { BIRTHDAY } from "../src/components/Occasion/constants";
import cx from "classnames";
import styles from "styles/Home.module.scss";

export default function Home() {
  const handleSubmit = ({
    videoFor,
    videoTo,
    occasion,
    instructions,
    marketing_source,
  }: SummaryValues) => {
    console.log(
      JSON.stringify(
        {
          videoFor,
          videoTo,
          occasion,
          instructions,
          marketing_source,
        },
        null,
        2
      )
    );
  };

  return (
    <>
      <Header />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="col-span-2 bg-white w-full mt-0.5 xl:pt-24 lg:pt-12 xl:pl-20 lg:pl-10 pt-3.5">
          <Formik
            initialValues={{
              videoFor: RECIPIENT_MYSELF,
              videoTo: "",
              occasion: BIRTHDAY,
              instructions: "",
              marketing_source: "",
              termsAccepted: false,
            }}
            onSubmit={handleSubmit}
          >
            {({ values, handleSubmit, setValues, handleChange }) => (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center lg:block"
              >
                <div className={styles.contentWrapper}>
                  <Recipient
                    setVideoFor={(option: string) => {
                      setValues({ ...values, videoFor: option });
                    }}
                    handleChange={handleChange}
                    name={values.videoTo}
                    recipient={values.videoFor}
                  />
                </div>
                <hr className={styles.divider} />
                <div className={styles.contentWrapper}>
                  <Occasion
                    setOccasion={(option: string) => {
                      setValues({ ...values, occasion: option });
                    }}
                    selectedOccasion={values.occasion}
                  />
                </div>
                <hr className={styles.divider} />
                <div className={styles.contentWrapper}>
                  <Instructions
                    instructions={values.instructions}
                    handleChange={handleChange}
                  />
                </div>
                <hr className={styles.divider} />
                <div className={styles.contentWrapper}>
                  <MarketingSource
                    source={values.marketing_source}
                    setSource={(option: string) => {
                      setValues({ ...values, marketing_source: option });
                    }}
                  />
                  <TermsAndConditions
                    checked={values.termsAccepted}
                    handleChange={() =>
                      setValues({
                        ...values,
                        termsAccepted: !values.termsAccepted,
                      })
                    }
                  />
                </div>
                <div
                  className={cx(
                    styles.contentWrapper,
                    "flex justify-center mt-12"
                  )}
                >
                  <button
                    className="next-button bg-charcoal text-white mb-8"
                    disabled={
                      !values.videoTo.length ||
                      !values.instructions.length ||
                      !values.marketing_source ||
                      !values.termsAccepted
                    }
                  >
                    Next
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <SummaryCard />
      </div>
    </>
  );
}
