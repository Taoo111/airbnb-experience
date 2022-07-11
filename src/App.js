import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const dataCards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {dataCards}
      </section>
    </div>
  );
}
