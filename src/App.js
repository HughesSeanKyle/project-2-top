import './App.css';

/*
Three main components needed here 
1. Sidenav 
2. Nav 
- Icons in here can be amde in canva 
3. layout component 

- Targets 
- 1. Setup layout inside main 
  - Flex direction with two rows 
- 2. Setup nav in main 
  - Flexbox layout with two rows 
- 3. Setup layout component "Home"
  - parent two cols 
    - Children 
      - Your projects 
      - Announcements and Trending 

  - Mobile 
    - Side menu to hamburger
    - Your projects to one col 
    - Announcements 
      - Under your projects to one col 


*/

function App() {
	return (
		<>
			<div className="dashboard-container">
				<nav className="dashboard--side-nav"></nav>
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
					{/* <footer className="dashboard-footer">
						<p>Copyright © 2023</p>
					</footer> */}
				</main>
			</div>
		</>
	);
}

export default App;
