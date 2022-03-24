// Next.js에서는 마크업 정의를 건너뛴다. 서버에서만 렌더링되고 onClick과 같은 이벤트핸들러는 작동하지 않는다. CSS도 사용하지 않는다
// html, head, body 태그를 만지려면 document 페이지를 필수적으로 갖고 있어야 한다.
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
