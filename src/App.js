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
				<nav className="dashboard-nav"></nav>
				<main className="dashboard-main">
					<div className="main-nav"></div>
					<div className="main-content"></div>
					{/* <footer className="dashboard-footer">
						<p>Copyright © 2023</p>
					</footer> */}
				</main>
			</div>
		</>
	);
}

export default App;
