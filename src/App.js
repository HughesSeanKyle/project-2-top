import './App.css';
import { FaSearch } from 'react-icons/fa';
import Sidebar from './components/Navigation/Sidebar';

function App() {
	return (
		<>
			<div className="dashboard-container">
				<Sidebar />

				{/* Main consists of two child comps. Main to be refacored and child comps as well */}
				<main className="dashboard-main">
					{/* Search bar to own comp,  */}
					<div className="main-nav">
						<div className="nav-container">
							<div className="search-bar-container">
								<div className="search-box">
									{' '}
									<FaSearch className="search-box-icon" />
									<input
										className="search-input"
										type="text"
										placeholder="Search..."
									/>{' '}
								</div>
								<div class="notifications-box"></div>
							</div>
							<div className="widgets-bar-container"></div>
						</div>
					</div>

					<div className="main-content">
						<div className="content-layout">
							<div className="layout-grid">
								<h3 className="grid-heading">Your Projects</h3>
								<div
									className="grid-items"
									// style={{ height: '720px', 'background-color': 'pink' }}
								>
									{/* The cards in this div should have it's own comp. It will be mapped, and should be resusable */}

									<div className="grid-item-card"></div>
									<div className="grid-item-card"></div>
									<div className="grid-item-card"></div>
									<div className="grid-item-card"></div>
									<div className="grid-item-card"></div>
									<div className="grid-item-card"></div>
								</div>
							</div>
							<aside className="layout-aside">
								<h3 className="aside-heading">Announcements</h3>
								<h3 className="aside-heading">Trending</h3>
							</aside>
						</div>
					</div>

					{/* Branch to be created for footer. Refactored and to own comp */}
					{/* <footer className="dashboard-footer">
						<p>Copyright © 2023</p>
					</footer> */}
				</main>
			</div>
		</>
	);
}

export default App;
