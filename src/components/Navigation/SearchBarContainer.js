import '../../App.css';
import { FaSearch, FaBell } from 'react-icons/fa';

function SearchBarContainer() {
	return (
		<>
			<div className="search-bar-container">
				<div className="search-box">
					<div>
						<FaSearch className="search-box-icon" />
						<input
							className="search-input"
							type="text"
							// placeholder="Search..."
						/>
					</div>
				</div>
				<div class="notifications-box">
					<ul className="notification-items-container">
						<li className="notification-item">
							<FaBell className="notification-box-icon" />
						</li>
						<li className="notification-item">
							<img
								src="./niftyswap-assets/nft-one-prim-no-bg-trimmy.png"
								alt="profile-pic"
								width="50px"
							/>
						</li>
						<li className="notification-item">
							<h4 className="grid-heading">Morgan Oakley</h4>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default SearchBarContainer;
