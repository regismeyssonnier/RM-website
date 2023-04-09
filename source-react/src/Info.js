import './main.css';
import './main.js';
import React from 'react';
import * as foo from './main.js';

function Info() {




    return (

		<div onLoad={() => { foo.IMG_ZOOM('imgpc'); }}>
			<div class="navcontent">

				
				<div class="navleft" id="idnavleft" style={{ height: "5000px" }}>
					<div class="innavleft">
						<div class="menu_princ_element">
							<h2><a href="#langage_c">SETUP</a></h2>
						</div>
						<br /><br />

						<div style={{ textAlign: "center" }}>
							<h3><a href="#base">My PC</a></h3>
							<h3><a href="#netw">Net Worth</a></h3>


						</div>
					</div>
				</div>

				
				<div class="navcenter" id="idnavcenter" style={{ height: "5000px" }}>
					<center><h1 id="langage_c">My Setup</h1></center><br/><br />
					<h2 id="base" style={{ textDecoration: "underline", marginLeft: "20px" }}>1. My PC</h2>
						<p style={{marginLeft:"20px"}}>
							My setup is high level.
						</p>


						<center>
							<div class="">
								<img id="imgpc" src="Image/pc.jpg" width="600" height="400" />
							</div>
						</center>
						<p id="blinkp" style={{ marginLeft: "20px", fontWeight: "bold", color: "red" }}>
							<br /><br />

							Main settings:<br /><br /><br />
							- Brand : Asus ROG GT35 G35<br /><br />
							- Processor : Intel® Core™ i9-11900KF Processor 8 core<br /><br />
							-- Frequency : 5200 Mhz<br /><br />
							- Graphic card : RTX 3090 Nvidia <br /><br />
							- Memory RAM DDR4 : 16 Gb<br /><br />
							-- Frequency RAM : 3200 Mhz<br /><br />
							- Storage : SSD 1 Tb<br /><br />
							<br /><br /><br />
					
					</p>
					<p style={{ marginLeft: "20px" }}>
						My PC is very beautiful with RGB light.<br /><br />
						<center><img src="Image/pc2.jpg" width="350" height="500" /></center>
						<br /><br />
					</p>
					<h2 id="netw" style={{ textDecoration: "underline", marginLeft: "20px" }}>2. Net worth</h2>
					<p style={{ marginLeft: "20px" }}>
						My PC cost 4600 euros, the screen 320 euros, the second screen 250 euros, and the keyboard 20 euros.<br /><br />
						The net worth is 5190 euros.
					</p>

				</div>
			</div>





        </div>
        
        
        
    );


}

export default Info;