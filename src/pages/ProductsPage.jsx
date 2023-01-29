import axios from "axios";
import { useEffect, useState } from "react";

import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
import HeaderPage from "../components/HeaderPage";
import PopularFoodCard from "../components/PopularFoodCard";
import TitleCategory from "../components/TitleCategory";
import { PacmanLoader } from "react-spinners";
import { API_BASE_URL } from "../constants/params";
import { PRIMARY_COLOR } from "../constants/colors";

export default function ProductsPage() {
  const [popularPizzas, setPopularPizzas] = useState();
  const [pizzas, setPizzas] = useState();
  const [drinks, setDrinks] = useState();

  useEffect(() => {
    axios.get(API_BASE_URL + "/products").then((res) => {
      const products = res.data;
      const pizzas = products.filter((product) => product.category === "pizza");
      const popularPizzas = pizzas.filter((_, index) => index < 4);
      const drinks = products.filter((product) => product.category === "drink");

      setPopularPizzas(popularPizzas);
      setPizzas(pizzas);
      setDrinks(drinks);
    });
  }, []);

  function getRowsOptions(arr) {
    const numRows = Math.ceil(arr.length / 2);
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      const indexOne = 0 + i * 2;
      const indexTwo = 1 + i * 2;

      if (!arr[indexOne] || !arr[indexTwo]) break;

      rows.push(
        <div className="row" key={arr[indexOne]._id + arr[indexTwo]._id}>
          <FoodCard
            key={arr[indexOne]._id}
            title={arr[indexOne].title}
            description={arr[indexOne].description}
            img={arr[indexOne].img}
            price={`R$ ${arr[indexOne].price.toFixed(2)}`}
            score={arr[indexOne].score.toFixed(1)}
          />
          <FoodCard
            key={arr[indexTwo]._id}
            title={arr[indexTwo].title}
            description={arr[indexTwo].description}
            img={arr[indexTwo].img}
            price={`R$ ${arr[indexTwo].price.toFixed(2)}`}
            score={arr[indexTwo].score.toFixed(1)}
          />
        </div>
      );
    }

    return rows;
  }

  if (!popularPizzas || !pizzas || !drinks) {
    return (
      <ContentLoading>
        <PacmanLoader color={PRIMARY_COLOR} />
      </ContentLoading>
    );
  }

  return (
    <ProductPageStyle>
      <HeaderPage />

      <section className="popular_pizzas">
        <header>
          <TitleCategory text="Populares" />
        </header>

        <div className="popular_pizzas__options">
          {popularPizzas.map((pizza) => {
            return (
              <PopularFoodCard
                key={pizza._id}
                img={pizza.img}
                title={pizza.title}
                score={pizza.score}
              />
            );
          })}
        </div>
      </section>

      <section className="pizzas">
        <header>
          <TitleCategory text="Pizzas" />
        </header>

        <div className="pizzas__options">{getRowsOptions(pizzas)}</div>
      </section>

      <section className="drinks">
        <header>
          <TitleCategory text="Bebidas" />
        </header>

        <div className="drinks__options">{getRowsOptions(drinks)}</div>
      </section>

      <Footer />
    </ProductPageStyle>
  );
}

const ContentLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;
`;

const ProductPageStyle = styled.div`
  width: 1250px;
  padding-top: 32px;
  padding-bottom: 100px;

  section > header > h2 {
    margin-top: 60px;
    margin-bottom: 24px;
  }

  .popular_pizzas__options {
    display: flex;
    width: 100%;
  }

  .pizzas__options,
  .drinks__options,
  .popular_pizzas {
    width: 100%;
  }

  .row {
    display: flex;
    margin-bottom: 28px;
  }

  .row:last-child {
    margin-bottom: 0;
  }

  footer {
    margin-top: 150px;
  }
`;
