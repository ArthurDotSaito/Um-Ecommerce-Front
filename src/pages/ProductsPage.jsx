import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import HeaderPage from "../components/HeaderPage";
import PopularFoodCard from "../components/PopularFoodCard";
import TitleCategory from "../components/TitleCategory";

export default function ProductsPage() {
  const pizzasPopulares = [
    {
      _id: 1,
      title: "Pizza Italiana",
      description:
        "Uma pizza clássica feita com molho de tomate, queijo mozzarella, presunto, champignon e orégano.",
      score: 4.2,
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/a7c7e20ef55b9c6f68541bcec8a4cfb6_XL.jpg",
    },
    {
      _id: 2,
      title: "Pizza Calabresa",
      description:
        "Uma pizza recheada com molho de tomate, queijo mozzarella, calabresa defumada e cebola.",
      score: 4.5,
      img: "https://cdn0.tudoreceitas.com/pt/posts/9/8/3/pizza_calabresa_e_mussarela_4389_600.jpg",
    },
    {
      _id: 3,
      title: "Pizza Portuguesa",
      description:
        "Uma pizza recheada com molho de tomate, queijo mozzarella, presunto, ovo, azeitona e cebola.",
      score: 4.7,
      img: "https://www.comidaereceitas.com.br/wp-content/uploads/2020/06/Pizza-portuguesa-de-frigideira-freeepik.jpg",
    },
    {
      _id: 4,
      title: "Pizza de Pepperoni",
      description:
        "Uma pizza de massa fina recheada com molho de tomate, queijo mozzarella e fatias de pepperoni.",
      score: 4.8,
      img: "https://www.comidaereceitas.com.br/wp-content/uploads/2019/08/pizza_fritadeira-780x520.jpg",
    },
  ];
  const pizzas = [
    {
      _id: 5,
      title: "Pizza Margherita",
      description:
        "Uma pizza clássica feita com molho de tomate, queijo mozzarella, manjericão fresco e azeitonas.",
      score: 4.7,
      img: "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita.jpg?fit=1200%2C675&ssl=1",
      category: "pizza",
      price: 39.9,
    },
    {
      _id: 6,
      title: "Pizza de Vegetais",
      description:
        "Uma pizza recheada com brócolis, cogumelos, tomate, cebola, queijo mozzarella e orégano.",
      score: 4.0,
      img: "https://claudia.abril.com.br/wp-content/uploads/2020/02/pizza-brocolis-caboclo.jpg",
      category: "pizza",
      price: 45.9,
    },
    {
      _id: 7,
      title: "Pizza de Frango Grelhado",
      description:
        "Uma pizza com frango grelhado, cebola, pimentão verde, tomate, queijo mozzarella e orégano.",
      score: 4.6,
      img: "http://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_333724454.jpg",
      category: "pizza",
      price: 45.9,
    },
    {
      _id: 8,
      title: "Pizza de Bacon",
      description:
        "Uma pizza com queijo mozzarella, bacon, cebola, tomate, orégano e azeitona.",
      score: 4.8,
      img: "https://www.comidaereceitas.com.br/wp-content/uploads/2019/08/pizza_fritadeira-780x520.jpg",
      category: "pizza",
      price: 52.9,
    },
  ];

  function getPizzasOptions() {
    const numRows = Math.ceil(pizzas.length / 2);
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      const indexOne = 0 + i * 2;
      const indexTwo = 1 + i * 2;

      if (!pizzas[indexOne] || !pizzas[indexTwo]) break;

      rows.push(
        <div className="row">
          <FoodCard
            key={pizzas[indexOne]._id}
            title={pizzas[indexOne].title}
            description={pizzas[indexOne].description}
            img={pizzas[indexOne].img}
            price={pizzas[indexOne].price}
            score={pizzas[indexOne].score}
          />
          <FoodCard
            key={pizzas[indexTwo]._id}
            title={pizzas[indexTwo].title}
            description={pizzas[indexTwo].description}
            img={pizzas[indexTwo].img}
            price={pizzas[indexTwo].price}
            score={pizzas[indexTwo].score}
          />
        </div>
      );
    }

    console.log(rows);
    return rows;
  }
  return (
    <ProductPageStyle>
      <HeaderPage />

      <section className="popular_pizzas">
        <header>
          <TitleCategory text="Populares" />
        </header>

        <div className="popular_pizzas__options">
          {pizzasPopulares.map((pizza) => {
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

        <div className="pizzas__options">{getPizzasOptions()}</div>
      </section>
    </ProductPageStyle>
  );
}

const ProductPageStyle = styled.div`
  width: 1250px;
  padding-top: 32px;

  section > header > h2 {
    margin-top: 60px;
    margin-bottom: 24px;
  }

  .popular_pizzas {
    width: 100%;
  }

  .popular_pizzas__options {
    display: flex;
    width: 100%;
  }

  .pizzas__options {
    width: 100%;
  }

  .row {
    display: flex;
    margin-bottom: 28px;
  }

  .row:last-child {
    margin-bottom: 0;
  }
`;
