import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/* Layout props에서 받는 children이 아래 컴포넌트 */}
      <Component {...pageProps} />
    </Layout>
  );
}
