import "./App.css";
import { SliderData } from "./components/SliderData";
import ImageSlider from "./ImageSlider";

function App() {
  return <ImageSlider slides={SliderData} />;
}

export default App;
