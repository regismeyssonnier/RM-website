import './main.css';
import './main.js';
import React from 'react';

function Home() {

	const stylevimeo = { position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%", title:"Untitled" };
	const stylevimeo1 = { padding: "56.25% 0 0 0", position: "relative" };

	return (

		<div>
		<div className="navcontent">

			<div className="navleft" id="idnavleft" style={{ height: "5000px" }}>
				<div className="innavleft">
					<div className="menu_princ_element">
						<h2><a href="#navpage">WELCOME</a></h2>
					</div>
					<br /><br />

					<div style={{ textAlign: "center" }}>
						<h3><a href="#coding_stats">Coding stats</a></h3>
						<h3><a href="#activity_stats">Activity stats</a></h3>
						<h3><a href="#experienceskills">Experience</a></h3>
						<h3><a href="#portfolio">Portfolio</a></h3>
						<h3><a href="#experience">Job</a></h3>
						<h3><a href="#formation">Formation</a></h3>

					</div>
				</div>
			</div>

			<div className="navcenter" id="idnavcenter" style={{ height: "5000px" }}>
		
					<p>
						<div style={ stylevimeo1 }><iframe src="https://player.vimeo.com/video/812067428?h=8226b25cfa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={ stylevimeo }></iframe></div>
						<script src="https://player.vimeo.com/api/player.js"></script>

					</p><br /><br />
					<p>
						<img id="imghead" style={{ margin: "20px 20px", float: "left" }} src="Image/head2.png" width="150" height="200" />
						<h2> Hey, I am Régis Meyssonnier !!!</h2>
					</p>
					<p style={{ fontSize: "15px", fontFamily: "Arial, Helvetica, sans-serif" }}>
						C++ Developer - C - Python - PHP - Assembly - Web development
					</p>
					<p style={{ textAlign: "justify", textIndent: "10px", marginRight: "10px" }}>
						I am a young guy who live in France. I 'm looking for a full remote job. I  would like to work in Software Engineering. I know many technology who are a good base to work in the industry. I am looking for the type of opportunities where I am skilled but I am opened to all the jobs.
						I am sure that many opportunities can match my profile. I am very fast and very serious. Try to contact me at my email address, or by linkedin.
						<br /><br />
						contact: regis.meyssonnier@gmail.com
						<br />

					</p>


					<p>
						<br /><br /><br />
						<h1 style={{ textAlign: "center" }} id="coding_stats">My coding stats</h1>
						<codersrank-summary username="regismeyssonnier"
							show-header="false"></codersrank-summary>
						<br /><br />
						<h1 style={{ textAlign: "center" }} id="activity_stats">My activity stats</h1>
						<codersrank-activity username="regismeyssonnier" legend="false" labels tooltip step="5"></codersrank-activity>

					</p>
					<p>
						<br /><br />
						<h1 style={{ textAlign: "center" }} id="experienceskills">My experience skills</h1>
						<codersrank-skills-chart username="regismeyssonnier"
							labels
							tooltip
							skills="JavaScript,CSS,HTML, Assembly, C, C++,PHP,Perl,Python,C#,JSON,Java,Other"
							svg-width="1120"
							svg-height="400"></codersrank-skills-chart>

					</p>
					<p>
						<br /><br />
						<h1 style={{ textAlign: "center" }} id="portfolio">My Portfolio</h1>
						<codersrank-portfolio username="regismeyssonnier"
							grid
							company="false"></codersrank-portfolio>

					</p>
					<p>
						<br /><br />
						<h1 style={{ textAlign: "center" }} id="experience">My Experience</h1>
						<codersrank-work-experience username="regismeyssonnier"
							logos></codersrank-work-experience>

						<br /><br />
						<h1 style={{ textAlign: "center" }} id="formation">My Formation</h1>
						<codersrank-education username="regismeyssonnier"></codersrank-education>

					</p>

			</div>
		</div>
	</div>
	);

}

export default Home;