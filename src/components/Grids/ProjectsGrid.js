import '../../App.css';
import GridCardItem from '../Cards/GridItemCard';

function ProjectsGrid() {
	return (
		<>
			<div className="layout-grid">
				<h3 className="grid-heading">Your Projects</h3>
				<div className="grid-items">
					<GridCardItem heading="Super Cool Project" />
					<GridCardItem heading="Less Cool Project" />
					<GridCardItem heading="Impossible App" />
					<GridCardItem heading="Easy Peasy App" />
					<GridCardItem heading="Ad Blocker" />
					<GridCardItem heading="Money Maker" />
				</div>
			</div>
		</>
	);
}

export default ProjectsGrid;
