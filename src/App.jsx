import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import data from "./data"
import "./App.css";

function App() {
  const cards = data.map(item => {
    return (
        <Cards 
            key={item.id}
            item={item}
        />
    )
})
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
                {cards}
      </section>
    </>
  );
}

export default App;
