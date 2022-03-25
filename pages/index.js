import axios from "axios";
import Head from "next/head";
import ItemList from "../src/components/itemList";
import { Divider, Header } from "semantic-ui-react";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>HOME | ywtechit</title>
        <meta name="description" content="ywtechit 홈입니다." />
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.apiUrl;
  const res = await axios.get(API_URL);
  const { data } = res;

  return {
    props: {
      list: data,
    },
  };
}
