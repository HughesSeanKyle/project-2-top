import '../../App.css';
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
	FaGithub,
} from 'react-icons/fa';

function Sidebar() {
	return (
		<>
			{/* Sidenav - To be refactored and extracted to own component. nav links to be added to data structure and mapped. Link name + icon */}
			<nav className="dashboard-side-nav">
				<div className="side-nav-logo">
					<a href="#" target="_blank">
						<img
							src="./niftyswap-low-resolution-logo-color-on-transparent-background.png"
							alt="logo"
							width="162px"
						/>
					</a>
				</div>
				<div className="divider">
					<hr className="divider-style" />
				</div>
				<ul className="side-nav-link-items">
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaHome className="item-icon" /> Home{' '}
							</h3>
						</a>
					</li>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaUserCircle className="item-icon" /> Profile{' '}
							</h3>
						</a>
					</li>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaEnvelope className="item-icon" /> Messages{' '}
							</h3>
						</a>
					</li>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaHistory className="item-icon" /> History{' '}
							</h3>
						</a>
					</li>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaFile className="item-icon" /> Tasks{' '}
							</h3>
						</a>
					</li>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaUsers className="item-icon" /> Community{' '}
							</h3>
						</a>
					</li>
					<div className="divider">
						<hr className="divider-style" />
					</div>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaCog className="item-icon" /> Settings{' '}
							</h3>
						</a>
					</li>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaQuestionCircle className="item-icon" /> Support{' '}
							</h3>
						</a>
					</li>
					<li className="side-nav-container-item">
						<a href="#" target="_blank" className="container-item-link">
							<h3>
								{' '}
								<FaShieldAlt className="item-icon" /> Privacy{' '}
							</h3>
						</a>
					</li>
				</ul>
				<div className="divider">
					<hr className="divider-style" />
				</div>
				<footer className="dashboard-footer">
					<a
						href="https://github.com/HughesSeanKyle"
						target="_blank"
						className="container-item-link"
					>
						<h3>
							<FaGithub />
						</h3>
					</a>
				</footer>
			</nav>
		</>
	);
}

export default Sidebar;
