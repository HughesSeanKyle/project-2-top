import './App.css';
import Sidebar from './components/Navigation/Sidebar';
import SearchBarContainer from './components/Navigation/SearchBarContainer';

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
							<SearchBarContainer />
							<div className="widgets-bar-container">
								<div
									className="profile-info-box"
									style={{
										'background-color': 'red',
										height: '100%',
										flex: '2.1',
										display: 'flex',
										alignItems: 'center',
										justifyItems: 'flex-start',
									}}
								>
									<img
										src="./niftyswap-assets/nft-one-prim-no-bg-trimmy.png"
										alt="profile-pic"
										width="81px"
										height="81px"
										className="user-profile-pic"
										style={{
											margin: '9px 27px 9px 3px',
										}}
									/>
									<div className="user-info">
										<p>Hi there,</p>
										<h3>Morgan Oakley (@morgan)</h3>
									</div>
								</div>
								<div
									class="action-btns-box"
									style={{
										'background-color': 'blue',
										height: '100%',
										flex: '1.9',
									}}
								></div>
							</div>
						</div>
					</div>

					<div className="main-content">
						<div className="content-layout">
							<div className="layout-grid">
								<h3 className="grid-heading">Your Swaps</h3>
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
