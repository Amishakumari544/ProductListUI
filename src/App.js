import React from "react";
import Banner from "./Banner";
import "./styles.css";

const characters = [
  {
    id: 1,
    productName: "Wonder Woman",
    price: 678,
    discountPrice: 345
  },
  {
    id: 2,
    productName: "Poison Ivy",
    price: 345,
    discountPrice: 67
  },
  {
    id: 3,
    productName: "Black Canary",
    price: 45,
    discountPrice: 67
  },
  {
    id: 4,
    productName: "Catwoman",
    price: 45,
    discountPrice: 42
  }
];

const CardListItem = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="card p-2">
            <img src={props.character.image} alt="product-image" />
            <strong>{props.character.productName}</strong>
            <p className="display-3">{props.character.price}</p>
            <p>{props.character.discountPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return (
    <div className="">
      {characters.map((character) => {
        return <CardListItem character={character} key={character.id} />;
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
