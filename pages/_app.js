// _app은 Global CSS 혹은 Layout을 잡을 때 사용한다.
// meta 태그는 _app이나 각 페이지의 <Head />에 넣는다.
import "../styles/global.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/components/footer";
import Top from "../src/components/Top";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ width: 1024, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

/*
  페이지 전환 시 레이아웃을 유지할 수 있습니다.
  페이지 전환 시 상태값을 유지할 수 있습니다.
  componentDidCatch를 이용해 커스텀 에러 핸들링을 할 수 있습니다.
  추가적인 데이터를 페이지로 주입시켜주는게 가능합니다.
  글로벌 CSS를 이곳에 선언합니다.
*/
