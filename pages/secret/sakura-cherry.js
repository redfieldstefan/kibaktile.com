import sakuraCherry from "../../data/catalog/sakura-cherry";
import React from "react";
import FeaturePage from "../../components/feature-page";
import processA1 from "../../data/catalog/sakura-cherry/Cherry-Tree-process-A1.png";
import processA2 from "../../data/catalog/sakura-cherry/Cherry-Tree-process-A2.png";
import processA3 from "../../data/catalog/sakura-cherry/Cherry-Tree-process-A3.png";

const SakuraCherry = () => {
	return (
		<FeaturePage className="sakura-cherry" pattern={sakuraCherry}>
			<span className="feature-page-steps">
				<ul>
					<li className="sakura-step">
						<span className="sakura-step-img-container">
							<img src={processA1} className="sakura-step-1-img sakura-step-img" />
						</span>
						<span className="sakura-step-text sakura-step-1-text">
							<p className="sakura-step-number">1.</p>
							<p className="sakura-step-description">Send us dimensions of your project</p>
						</span>
					</li>
					<li className="sakura-step">
						<span className="sakura-step-img-container">
							<img src={processA2} className="sakura-step-2-img sakura-step-img" />
						</span>
						<span className="sakura-step-text sakura-step-2-text">
							<p className="sakura-step-number">2.</p>
							<p className="sakura-step-description">We will create a concept layout and work with you to make it fit perfectly with your project</p>
						</span>
					</li>
					<li className="sakura-step">
						<span className="sakura-step-img-container">
							<img src={processA3} className="sakura-step-3-img sakura-step-img" />
						</span>
						<span className="sakura-step-text sakura-step-3-text">
							<p className="sakura-step-number">3.</p>
							<p className="sakura-step-description">Together we will create an exceptional tile mural for your space</p>
						</span>
					</li>
				</ul>
			</span>
		</FeaturePage>
	);
} 

export default SakuraCherry;
