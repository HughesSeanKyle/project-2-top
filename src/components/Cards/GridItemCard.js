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
					<ul className="card-items">
						<li className="card-item">
							<FaRegStar />
						</li>
						<li className="card-item" style={{ marginTop: '2px' }}>
							{' '}
							<FaRegEye />
						</li>
						<li className="card-item">
							<FaShareAlt />
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default GridCardItem;
