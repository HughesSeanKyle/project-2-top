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
		<div className="dashboard-container">
			<nav className="dashboard-nav">
				{/* <a href="#">Home</a>
				<a href="#">Reports</a>
				<a href="#">Settings</a> */}
			</nav>
			<main className="dashboard-main">
				{/* <a href="#">Home</a>
				<a href="#">Reports</a>
				<a href="#">Settings</a> */}
			</main>

			{/* <header className="dashboard-header">
				<h1>Dashboard</h1>
			</header> */}
			{/* <nav className="dashboard-nav">
				<a href="#">Home</a>
				<a href="#">Reports</a>
				<a href="#">Settings</a>
			</nav>
			<main className="dashboard-main">
				<section className="dashboard-main-section">
					<h2>Welcome!</h2>
					<p>This is your dashboard.</p>
				</section>
			</main>
			<aside className="dashboard-aside">
				<section className="dashboard-aside-section">
					<h3>Recent Reports</h3>
					<ul>
						<li>Report 1</li>
						<li>Report 2</li>
						<li>Report 3</li>
					</ul>
				</section>
			</aside>
			<footer className="dashboard-footer">
				<p>Copyright © 2023</p>
			</footer> */}
		</div>
	);
}

export default App;
