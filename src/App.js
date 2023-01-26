import './App.css';
import Sidebar from './components/Navigation/Sidebar';
import SearchBarContainer from './components/Navigation/SearchBarContainer';
import WidgetsBarContainer from './components/Navigation/WidgetsBarContainer';
import ProjectsGrid from './components/Grids/ProjectsGrid';

function App() {
	return (
		<>
			<div className="dashboard-container">
				<Sidebar />
				<main className="dashboard-main">
					{/* Search bar to own comp,  */}
					<div className="main-nav">
						<div className="nav-container">
							<SearchBarContainer />
							<WidgetsBarContainer />
						</div>
					</div>

					<div className="main-content">
						<div className="content-layout">
							<ProjectsGrid />
							<aside className="layout-aside">
								<h3 className="aside-heading">Announcements</h3>
								<h3 className="aside-heading">Trending</h3>
							</aside>
						</div>
					</div>

					{/* Branch to be created for footer. Refactor and to own comp */}
					{/* <footer className="dashboard-footer">
						<p>Copyright © 2023</p>
					</footer> */}
				</main>
			</div>
		</>
	);
}

export default App;
