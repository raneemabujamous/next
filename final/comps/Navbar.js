import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <>
      <h1> nav bar </h1>
      <Image src="/TOH_39.jpg" width={128} height={77} />
      <Link href="/raneem/houses">
        <a>raneem </a>
      </Link>
      <Link href="/raneem/fav">
        <a>Favaroite </a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <a></a>
    </>
  );
};

export default Navbar;
