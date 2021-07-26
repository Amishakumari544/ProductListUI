import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import "./styles.css";

const products = [
  {
    id: 1,
    productName: "Wonder Woman",
    image: "https://source.unsplash.com/weekly?water",
    price: 678,
    discountPrice: 345
  },
  {
    id: 2,
    productName: "Poison Ivy",
    image: "https://source.unsplash.com/weekly?water",
    price: 345,
    discountPrice: 67
  },
  {
    id: 3,
    productName: "Black Canary",
    price: 45,
    image: "https://source.unsplash.com/weekly?water",
    discountPrice: 67
  },
  {
    id: 4,
    productName: "Catwoman",
    price: 45,
    discountPrice: 42
  }
];

const CardList = (props) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <Cards
            image={product.image}
            productName={product.productName}
            price={product.price}
            key={product.id}
          />
        );
      })}
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Banner />
      <CardList />
    </div>
  );
}
