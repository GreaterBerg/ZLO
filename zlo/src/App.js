import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainPage from './components/MainPage/MainPage';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <SpeedInsights/>
    </div>
  );
}

export default App;
