import React from 'react';
import ContentLoader from 'react-content-loader';
const Skeleton = (props) => {
	return (
		<ContentLoader
			speed={2}
			width={300}
			height={500}
			viewBox="0 0 280 500"
			backgroundColor="#e0e0e0"
			foregroundColor="#b5b0b0"
			{...props}>
			<rect x="-1" y="282" rx="0" ry="0" width="280" height="27" />
			<rect x="0" y="321" rx="0" ry="0" width="280" height="88" />
			<rect x="0" y="435" rx="0" ry="0" width="60" height="40" />
			<circle cx="140" cy="140" r="140" />
			<rect x="104" y="435" rx="0" ry="0" width="180" height="40" />
		</ContentLoader>
	);
};

export default Skeleton;
