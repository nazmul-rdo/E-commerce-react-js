
import Navbar from "../Navbar"
import Categories from "./Categories"
import Featured from "./Featured"
import Offer from "./Offer"
import Products from "./Products"
import Subscribe from "./Subscribe"
import TrandyProduct from "./TrandyProduct"
import Vendor from "./Vendor"


const Home = () => {
  return (
    <>
    <Navbar />
      <Featured />
      <Categories />
      <Offer />
      <TrandyProduct />s
      <Subscribe />
      <Products />
      <Vendor />
    </>
  )
}

export default Home