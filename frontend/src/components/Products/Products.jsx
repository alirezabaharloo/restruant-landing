import MenuProduct from './MenuProduct.jsx'


export default function Products(){

  return (
    <section className="md:mt-0  mt-[2rem] max-w-[1180px] mx-auto">
        <div className="relative w-max">
          <h3 className="uppercase  font-bold text-[3rem] text-red1">
            MENU
        </h3> 
        <span className="block w-full h-[9px] absolute bg-[#FFF6A3] bottom-[1rem] z-[-1]"></span>
        </div>
        <MenuProduct />
    </section>
  );
}