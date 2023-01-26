import '../../App.css';

function Trending() {
	return (
		<>
			<h3 className="aside-heading">Trending</h3>
			<div className="aside-content-container">
				<div className="announcement-card">
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginTop: '18px',
						}}
					>
						<img
							src="./niftyswap-assets/nft-two-no-bg-trimmy.png"
							alt="profile-pic"
							width="36px"
							height="36px"
							style={{ marginRight: '18px' }}
						/>

						<div className="user-info">
							<h6>@tegan</h6>
							<p style={{ opacity: '0.5' }}>World Peace Builder</p>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginTop: '18px',
						}}
					>
						<img
							src="./niftyswap-assets/nft-one-prim-no-bg-trimmy.png"
							alt="profile-pic"
							width="36px"
							height="36px"
							style={{ marginRight: '18px' }}
						/>
						<div className="user-info">
							<h6>@morgan</h6>
							<p style={{ opacity: '0.5' }}>Super Cool Project</p>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginTop: '18px',
						}}
					>
						<img
							src="./niftyswap-assets/nft-three-no-bg-trimmy.png"
							alt="profile-pic"
							width="36px"
							height="36px"
							style={{ marginRight: '18px' }}
						/>
						<div className="user-info">
							<h6>@kendall</h6>
							<p style={{ opacity: '0.5' }}>Life Changing App</p>
						</div>
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							marginTop: '18px',
						}}
					>
						<img
							src="./niftyswap-assets/nft-four-no-bg-trimmy.png"
							alt="profile-pic"
							width="36px"
							height="36px"
							style={{ marginRight: '18px' }}
						/>
						<div className="user-info">
							<h6>@alex</h6>
							<p style={{ opacity: '0.5' }}>No Traffic Maker</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Trending;
