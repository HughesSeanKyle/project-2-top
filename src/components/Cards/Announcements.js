import '../../App.css';

function Announcements() {
	return (
		<>
			<h3 className="aside-heading">Announcements</h3>
			<div className="aside-content-container">
				<div className="announcement-card">
					<h5 className="card-heading">Site Maintenance</h5>
					<p style={{ fontSize: '14px' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi.
					</p>
					<hr style={{ margin: '18px 0px' }} className="divider-style" />
					<h5 className="card-heading">Community Share Day</h5>
					<p style={{ fontSize: '14px' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi.
					</p>
					<hr style={{ margin: '18px 0px' }} className="divider-style" />
					<h5 className="card-heading">Updated Privacy Policy</h5>
					<p style={{ fontSize: '14px' }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi.
					</p>
					<hr style={{ margin: '18px 0px' }} className="divider-style" />
				</div>
			</div>
		</>
	);
}

export default Announcements;
