import Ul from '../UI/Ul.jsx';
import MenuProductChild from './MenuProductChild.jsx';

export default function MenuProduct() {

  return (
    <>
      <Ul
        url="http://localhost:8000/products/"
        className="grid md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] mt-[1.5rem] gap-[1.5rem]"
        component={MenuProductChild}
      />
    </>
  );
}