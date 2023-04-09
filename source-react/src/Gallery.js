import './main.css';
import * as foo from './main.js';
import React from 'react';

function Gallery() {




	return (
		<div onLoad={() => { foo.IMG_ZOOM('imggal'); } }>
			<div class="navcontent">

				
				<div class="navleft" id="idnavleft" style={{ height: "5000px" }}>
					<div class="innavleft">
						<div class="menu_princ_element">
							<h2><a href="#gallery2">GALLERY</a></h2>
						</div>
						<br /><br />

						<div style={{ textAlign: "center" }}>
							<h3><a href="#base">Look AT Click HERE</a></h3>


						</div>
					</div>
				</div>

				
				<div class="navcenter" id="idnavcenter" style={{ height: "5000px" }}>
					<center><h1 id="gallery2">GALLERY</h1></center><br/><br />
					<h2 id="base" style={{ textDecoration: "underline", marginLeft: "20px" }}>1. LOOK AT !!!</h2>
					<p style={{ marginLeft: "20px" }} id="text_img">
							Move over the IMAGE !!!!!
						</p>


						<center>
						<div class="" style={{ height: "620px" }}>
								<img id="imggal" src="Image/pc.jpg" alt="gallery" width="600" height="400" />
							</div>
						</center>
						<center>
							<table>
								<tr>
									<td>
									<div class="next_button" onClick={foo.PREV}>
											PREV
										</div>

									</td>
								<td>
									<div class="next_button" onClick={foo.NEXT}>
											NEXT
										</div>
									</td>
								</tr>
							</table>
						</center>

					</div>
				</div>


        </div>
    );


}


export default Gallery;