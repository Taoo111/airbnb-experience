import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Card
        image="katie.png"
        rating="5.0"
        review={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
