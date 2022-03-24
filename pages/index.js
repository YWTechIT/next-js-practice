import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import ItemList from "../src/components/itemList";
import { Divider, Header, Loader } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    function getData() {
      axios.get(API_URL).then((res) => {
        console.log(res.data);
        setList(res.data);
        setIsLoading(false);
      });
    }
    getData();
  }, [API_URL]);

  return (
    <div>
      <Head>
        <title>HOME | ywtechit</title>
        <meta name="description" content="ywtechit 홈입니다." />
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading...
          </Loader>
        </div>
      )}
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
    </div>
  );
}
