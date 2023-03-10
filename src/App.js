import "./App.css";
import "./css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import TaskPage from "./pages/task";
import HtmlPage from "./pages/html";
import Header from "./components/Header";
import DemonstrationPage from './pages/demonstration';

function App() {
	return (
		<>
			
			<BrowserRouter>
      <Header></Header>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/task' element={<TaskPage />} />
					<Route path='/html' element={<HtmlPage />} />
					<Route path='/demonstration' element={<DemonstrationPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
