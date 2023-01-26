import './App.css';
import Sidebar from './components/Navigation/Sidebar';
import SearchBarContainer from './components/Navigation/SearchBarContainer';
import WidgetsBarContainer from './components/Navigation/WidgetsBarContainer';
import ProjectsGrid from './components/Grids/ProjectsGrid';
import AsideContent from './components/Aside/AsideContent';

function App() {
	return (
		<>
			<div className="dashboard-container">
				<Sidebar />
				<main className="dashboard-main">
					<div className="main-nav">
						<div className="nav-container">
							<SearchBarContainer />
							<WidgetsBarContainer />
						</div>
					</div>

					<div className="main-content">
						<div className="content-layout">
							<ProjectsGrid />
							<AsideContent />
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
