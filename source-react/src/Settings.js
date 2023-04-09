import './main.css';
import * as foo  from './main.js';
import React from 'react';

function Settings() {




    return (

		<div onLoad={foo.startup}>

			<div className="navcontent">

			
				<div id="idnavleft" className="navleft" style={{ height: "5000px" }}>
					<div className="innavleft">
						<div className="menu_princ_element">
							<h2><a href="#follow">Theme</a></h2>
						</div>
						<br /><br />

						<div style={{ textAlign: "center" }}>
							<h3><a href="#theme">Change Theme</a></h3>
							<h3><a href="#custom">Custom Theme</a></h3>

						</div>
					</div>
				</div>

			
				<div className="navcenter" id="idnavcenter" style={{ height: "5000px" }}>
					<center><h1 id="langage_c" className="about_me">Settings</h1></center><br/><br />
					<h2 id="theme" style={{ textDecoration: "underline", marginLeft: "20px" }}>Change theme predefined :</h2>
						<div className="wrap_settings">
							<div className="wms_left">
								Theme
							</div>
							<div className="wms_left2">
								Link
							</div>
							<div className="wms_left3">
								Text color
							</div>
							<div className="wms_right">
								<select name="theme" id="theme-select">
									<option value="default">--default--</option>
									<option value="red">red</option>
									<option value="blue">blue</option>
									<option value="yellow">yellow</option>
									<option value="purple">purple</option>
								</select>

							</div>
							<div className="wms_rightc3">
								<select name="theme_center" id="theme-select-center">
									<option value="default">--default--</option>
									<option value="red">red</option>
									<option value="blue">blue</option>
									<option value="yellow">yellow</option>

								</select>

							</div>

							<div className="wms_right2">
								<select name="theme_link" id="theme-link-select">
									<option value="default">--default--</option>
									<option value="red">red</option>
									<option value="blue">blue</option>
									<option value="yellow">yellow</option>

								</select>
							</div>
							<div className="wms_right3">
								<select name="theme_text" id="theme-text-select">
									<option value="default">--default--</option>
									<option value="red">red</option>
									<option value="black">black</option>
									<option value="white">white</option>

								</select>
							</div>
							<div className="wms_right4">
							<input type="button" id="save_button" value="Save" style={{ width: "150px" }} onClick={() => { foo.Change_Theme(); window.location.reload(); }} />
							</div>

						</div>

					<h2 id="custom" style={{ textDecoration: "underline", marginLeft: "20px" }}>Custom theme :</h2>
						<div className="wrap_settings">
							<div className="wms_left">
								Theme
							</div>
							<div className="wms_left2">
								Link
							</div>
							<div className="wms_left3">
								Text color
							</div>
							<div className="wms_right">
							<input type="color" id="custom-theme" name="headc"  />
									<label for="head">Left</label>
							</div>
							<div className="wms_rightc3">
							<input type="color" id="custom-theme-center" name="headcc" />
									<label for="head">Center</label>

							</div>

							<div className="wms_right2">
								<input type="color" id="custom-link" name="headcl" />

							</div>
							<div className="wms_right3">
								<input type="color" id="custom-text" name="headct"  />

							</div>
							<div className="wms_right4">
							<input type="button" id="save_button" value="Save" style={{ width: "150px" }} onClick={foo.Change_Custom_Theme} />
							</div>

						</div>

					</div>
				</div>

			</div>

        


    );

}

export default Settings;