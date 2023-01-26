import '../../App.css';
import { FaRegStar, FaRegEye, FaShareAlt } from 'react-icons/fa';

function GridCardItem({ heading }) {
	return (
		<>
			<div className="grid-item-card">
				<div>
					<h4 className="card-heading">{heading}</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
						mollitia, molestiae quas vel sint commodi.
					</p>
					<ul
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
							marginTop: '27px',
						}}
					>
						<li style={{ marginRight: '18px' }}>
							<FaRegStar />
						</li>
						<li style={{ marginRight: '18px', marginTop: '2px' }}>
							{' '}
							<FaRegEye />
						</li>
						<li style={{ marginRight: '18px' }}>
							<FaShareAlt />
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default GridCardItem;
