import React from 'react';
import './main.css';
import './main.js';

function About(){



	return(
	<div >
			<div class="navcontent">

				
				<div class="navleft" id="idnavleft" style={{ height: "5000px" }}>
					<div class="innavleft">
						<div class="menu_princ_element">
							<h2><a href="#follow">FOLLOW ME</a></h2>
						</div>
						<br /><br />

						<div style={{ textAlign: "center" }}>
							<h3><a href="#follow">Follow</a></h3>


						</div><br />
						<div style={{ textAlign: "center" }}>
							<h3><a href="#game">My Games</a></h3>


						</div>
					</div>
				</div>

				
				<div class="navcenter" id="idnavcenter" style={{ height: "5000px" }}>
					<center><h1 id="langage_c" class="about_me">About me</h1></center><br/><br />
					<h2 id="follow" style={{ textDecoration: "underline", marginLeft: "20px" }}>1. Follow me</h2>
					<p style={{ marginLeft: "20px" }}>
							Follow me on social network : <br /><br /><br />

							Github <a href="https://github.com/regismeyssonnier">https://github.com/regismeyssonnier</a><br />
							Linkedin <a href="https://www.linkedin.com/in/r%C3%A9gis-meyssonnier-2938b7222/">https://www.linkedin.com/in/r%C3%A9gis-meyssonnier-2938b7222/</a><br />
							Codersrank <a href="https://profile.codersrank.io/user/regismeyssonnier">https://profile.codersrank.io/user/regismeyssonnier</a><br />
							Hackerrank <a href="https://www.hackerrank.com/regis_meyssonni1">https://www.hackerrank.com/regis_meyssonni1</a><br />
							Coding game <a href="https://www.codingame.com/profile/501450f6e9795e1c991daa922b5f37ff2387984">https://www.codingame.com/profile/501450f6e9795e1c991daa922b5f37ff2387984</a><br />

						</p>
						<br />

					<h2 id="game" style={{ textDecoration: "underline", marginLeft: "20px" }}>2. My Games </h2>
					<p style={{ marginLeft: "20px" }}>
							Download my game here : <br /><br /><br />
							<iframe src="https://itch.io/embed/1947039?border_width=2" width="554" height="169" frameBorder="0"><a href="https://regismeysso.itch.io/tic-tac-toe">Tic Tac Toe by RegisMeysso</a></iframe>

						</p>



			</div>
		</div>
		

	</div>
	);

}

export default About;