import NavBar from "./NavBar";

// children은 react.js에서 제공하는 prop
// 하나의 컴포넌트를 또 다른 컴포넌트안에 넣을 때 쓸 수 있음
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
