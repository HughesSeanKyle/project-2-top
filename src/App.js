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
	FaChevronLeft,
	FaChevronRight,
	FaCode,
} from 'react-icons/fa';

function App() {
	return (
		<>
			<div className="dashboard-container">
				{/* Sidenav - To be refactored and extracted to own component. nav links to be added to data structure and mapped. Link name + icon */}
				<nav className="dashboard-side-nav">
					<div className="side-nav-logo">
						<img
							src="./niftyswap-low-resolution-logo-color-on-transparent-background.png"
							alt="logo"
							width="162px"
						/>
					</div>
					<div className="divider">
						<hr className="divider-style" />
					</div>
					<ul className="side-nav-link-items">
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaHome className="item-icon" /> Home{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaUserCircle className="item-icon" /> Profile{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaEnvelope className="item-icon" /> Messages{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaHistory className="item-icon" /> History{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaFile className="item-icon" /> Tasks{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaUsers className="item-icon" /> Community{' '}
							</h3>
						</li>
						<div className="divider">
							<hr className="divider-style" />
						</div>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaCog className="item-icon" /> Settings{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaQuestionCircle className="item-icon" /> Support{' '}
							</h3>
						</li>
						<li className="side-nav-container-item">
							<h3>
								{' '}
								<FaShieldAlt className="item-icon" /> Privacy{' '}
							</h3>
						</li>
					</ul>
					<div className="divider">
						<hr className="divider-style" />
					</div>
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
