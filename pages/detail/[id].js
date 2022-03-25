import axios from "axios";
import Head from "next/head";
import Item from "../../src/components/item";

const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>HOME | ywtechit</title>
            <meta name="title" content={item.name} />
            <meta name="description" content={item.description} />
          </Head>
          {name}환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}

export default Post;
