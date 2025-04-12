import Nav from "../Nav/Nav";
import HeaderSection from "../HeaderSection/HeaderSection";
import { ProductContextProvider } from "../../context/productContext";

export default function Header(){
  return (
    <header className="max-w-[1180px] mx-auto mt-[1rem] h-full">
      <ProductContextProvider>
        <Nav />
        <HeaderSection />
      </ProductContextProvider>
    </header>
  );
}