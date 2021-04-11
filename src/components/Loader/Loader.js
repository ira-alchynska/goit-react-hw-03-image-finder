import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";

const SpinnerLoader = () => {
  return (
    <div className={styles.Loader}>
      <Loader type="Circles" color="#00BFFF" height={100} width={100} timeout={3000} />
    </div>
  );
};

export default SpinnerLoader;
