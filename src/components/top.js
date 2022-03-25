import { Header } from "semantic-ui-react";
import Gnb from "./gnb";
import Img from "next/image";
import styles from "./top.module.css";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <Img
            src="/images/logo.jpeg"
            alt="logo"
            width="80"
            height="80"
            layout="intrinsic"
            className={styles.logo_img}
          />
        </div>
        <Header as="h1">ywtechit</Header>
      </div>
      <Gnb />
    </div>
  );
}
