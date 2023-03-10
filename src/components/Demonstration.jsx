import * as React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

export default function Demonstration() {
	const htmlString = ``;

	return (
		<>
			<Helmet>
				<script src='../three/js/three.js' async="true"></script>
				<script src='../three/jsartoolkit5/artoolkit.min.js' async="true"></script>
				<script src='../three/jsartoolkit5/artoolkit.api.js' async="true"></script>
				<script src='../three/threex/threex-artoolkitsource.js' async="true"></script>
				<script src='../three/threex/threex-artoolkitcontext.js' async="true"></script>
				<script src='../three/threex/threex-arbasecontrols.js' async="true"></script>
				<script src='../three/threex/threex-armarkercontrols.js' async="true"></script>
			</Helmet>
			<div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
		</>
	);
}
