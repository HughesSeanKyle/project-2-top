import '../../App.css';
import Announcements from '../Cards/Announcements';
import Trending from '../Cards/Trending';

function AsideContent() {
	return (
		<>
			<aside className="layout-aside">
				<Announcements />
				<Trending />
			</aside>
		</>
	);
}

export default AsideContent;
