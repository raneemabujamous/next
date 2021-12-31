import Link from "next/link";
import Image from "next/image";
import { addToCart } from "../../store/actions/action";
import { useSelector, useDispatch } from "react-redux";

export const getStaticProps = async () => {
  const res = await fetch("https://toto-do-7.herokuapp.com/homes/house");
  const data = await res.json();
  console.log(data);
  return {
    props: { houses: data },
  };
};

const Houses = ({ houses }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function handleFav(house) {
    dispatch(addToCart(house));
  }
  return (
    <>
      <h1>all ninjas</h1>
      {houses.map((house) => (
        <>
          <Link href={"/raneem/" + house.id} key={house.id}>
            <a>
              <Image src={house.imgHero} width={500} height={500} />
            </a>
          </Link>
          <button
            onClick={() => {
              handleFav(house);
            }}
          >
            add to fav
          </button>
          <button>rent</button>
          <h3>{house.location}</h3>
          <h3>{house.price}</h3>
          <h3>{house.state}</h3>
        </>
      ))}
    </>
  );
};

export default Houses;
