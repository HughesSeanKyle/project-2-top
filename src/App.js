import './App.css';
import {
	FaHome,
	FaUserCircle,
	FaEnvelope,
	FaHistory,
	FaFile,
	FaUsers,
	FaCog,
	FaQuestionCircle,
	FaShieldAlt,
} from 'react-icons/fa';

function App() {
	return (
		<>
			<div className="dashboard-container">
				{/* Sidenav - To be refactored and extracted to own component. nav links to be added to data structure and mapped. Link name + icon */}
				<nav className="dashboard--side-nav">
					<h3 className="side-nav-header">{'LOGO<><<'} Company Name</h3>
					<ul className="side-nav-link-items">
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaHome /> Home{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaUserCircle /> Profile{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaEnvelope /> Messages{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaHistory /> History{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaFile /> Tasks{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaUsers /> Community{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaCog /> Settings{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaQuestionCircle /> Support{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaShieldAlt /> Privacy{' '}
							</h3>
						</li>
					</ul>
				</nav>

				{/* Main consists of two child comps. Main to be refacored and child comps as well */}
				<main className="dashboard-main">
					<div className="main-nav"></div>
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
