import Nav from "../Nav/Nav";
import HeaderSection from "../HeaderSection/HeaderSection";
import { CartProgressContextProvider } from "../../context/CartProgressContext";

export default function Header(){
  return (
    <header className="max-w-[1180px] mx-auto mt-[1rem] h-full">
      <CartProgressContextProvider>
        <Nav />
        <HeaderSection />
      </CartProgressContextProvider>
    </header>
  );
}