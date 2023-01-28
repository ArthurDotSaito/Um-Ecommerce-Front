import styled from "styled-components";
import FoodCard from "../components/FoodCard";
import Footer from "../components/Footer";
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
  const drinks = [
    {
      _id: "a1b2c3d4",
      title: "Coca-Cola 2 litros",
      description: "A famosa e icônica bebida gaseificada criada em 1886.",
      price: 12.9,
      score: 4.8,
      img: "https://v5j9q4b5.rocketcdn.me/wp-content/uploads/2015/06/destaque17.jpg",
      type: "drink",
    },
    {
      _id: "e5f6g7h8",
      title: "Fanta Laranja 2 litros",
      description:
        "Uma bebida gaseificada de sabor de laranja criada pela Coca-Cola em 1941.",
      price: 7.9,
      score: 4,
      img: "https://static.clubeextra.com.br/img/uploads/1/522/24915522.jpg",
      type: "drink",
    },
    {
      _id: "i9j0k1l2",
      title: "Sprite 2 litros",
      description:
        "Uma bebida gaseificada sabor limão adicionado criada pela Coca-Cola em 1961.",
      price: 7.9,
      score: 4.5,
      img: "https://s2.glbimg.com/3hj73tEH8AozogZAuyn4r84FL5Q=/620x430/e.glbimg.com/og/ed/f/original/2022/08/25/imagem_hero_campanha_2.png",
      type: "drink",
    },
    {
      _id: "m3n4o5p6",
      title: "Pepsi 2 litros",
      description:
        "Uma bebida gaseificada criada em 1893 e que é uma das principais concorrentes da Coca-Cola.",
      price: 8.5,
      score: 4.6,
      img: "https://www.tricurioso.com/wp-content/uploads/2018/10/curiosidades-interessantes-sobre-a-pepsi.jpg",
      type: "drink",
    },
    {
      _id: "q7r8s9t0",
      title: "Água mineral 1.5 litros",
      description: "Uma água potável e mineralizada.",
      price: 2.5,
      score: 4.5,
      img: "https://mambodelivery.vtexassets.com/arquivos/ids/184967/agua-mineral-sem-gas-minalba-15-litros.jpg?v=637884009104670000",
      type: "drink",
    },
    {
      _id: "u1v2w3x4",
      title: "Suco de laranja 1 litro",
      description:
        "Um suco natural feito a partir da pressão de laranjas frescas. 100% natural, sem adição de açucares, sem conservantes e sem corantes.",
      price: 8.5,
      score: 4,
      img: "https://www.sabornamesa.com.br/media/k2/items/cache/b018fd5ec8f1b90a1c8015900c2c2630_XL.jpg",
      type: "drink",
    },
  ];

  function getRowsOptions(arr) {
    const numRows = Math.ceil(arr.length / 2);
    const rows = [];

    for (let i = 0; i < numRows; i++) {
      const indexOne = 0 + i * 2;
      const indexTwo = 1 + i * 2;

      if (!arr[indexOne] || !arr[indexTwo]) break;

      rows.push(
        <div className="row">
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

        <div className="pizzas__options">{getRowsOptions(pizzas)}</div>
      </section>

      <section className="drinks">
        <header>
          <TitleCategory text="drinks" />
        </header>

        <div className="drinks__options">{getRowsOptions(drinks)}</div>
      </section>

      <Footer />
    </ProductPageStyle>
  );
}

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
