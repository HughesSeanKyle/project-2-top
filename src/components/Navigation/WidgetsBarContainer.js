import '../../App.css';

function WidgetsBarContainer() {
	return (
		<>
			<div className="widgets-bar-container">
				<div className="profile-info-box">
					<img
						src="./niftyswap-assets/nft-one-prim-no-bg-trimmy.png"
						alt="profile-pic"
						width="81px"
						height="81px"
						className="user-profile-pic"
					/>
					<div className="user-info">
						<p>Hi there,</p>
						<h3>Morgan Oakley (@morgan)</h3>
					</div>
				</div>
				<div class="action-btns-box">
					<ul class="button-list">
						<li>
							<button>New</button>
						</li>
						<li>
							<button>Upload</button>
						</li>
						<li>
							<button>Share</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default WidgetsBarContainer;
