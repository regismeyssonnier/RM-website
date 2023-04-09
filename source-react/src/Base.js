import './main.css';
import './main.js';
import React, { useEffect  } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Info from './Info'
import Settings from './Settings'
import Gallery from './Gallery'
import C from './C'
import Cpp from './Cpp'
import Nn from './Nn'
import * as foo from './main.js';

function Base(props) {

	var idsubmenu_main_ulp2 = React.createRef();
	var idsubmenu_main_ulp4 = React.createRef();
	var idsubmenu_main_ulp3 = React.createRef();

	var tab = [idsubmenu_main_ulp2, idsubmenu_main_ulp4, idsubmenu_main_ulp3];

	useEffect(() => {


	});

	function show(num) {
		//var tag = document.getElementById(tt);

		if (num == 0)
			idsubmenu_main_ulp2.current.style.display = 'block';
		else if (num == 1)
			idsubmenu_main_ulp4.current.style.display = 'block';
		else if (num == 2)
			idsubmenu_main_ulp3.current.style.display = 'block';
		//tag.style.left = ((window.innerWidth / 2) - 125) + 'px';

		var t = 0, p = '';
		for (var i = 0; i < tab.length; i++) {
			//p = 'idsubmenu_main_ulp' + i;
			if (i != num) {
				//t = document.getElementById(p);
				tab[i].current.style.display = 'none';

			}

		}

	}
	function hide() {
		var t = 0, p = '';
		for (var i = 0; i < tab.length; i++) {
			//p = 'idsubmenu_main_ulp' + i;
			//if(p != tt){
			//t = document.getElementById(p);
			tab[i].current.style.display = 'none';
			//}

		}


	}

	function scroll() {
		window.scroll(0, 0);
	}


	return (
		<div onClick={hide} onLoad={foo.Load_Actual_Theme}>

			<div className="up_button" onClick={scroll}>
		UP
	</div>
	
			<div className="navpage" id="navpage" style={{ height: "5075px" }}>

		
			<div className="navmainmenud">

		
					<ul className="navmainmenu">
						<li style={{ width: "200px" }}><a href="/"><h2>ACCUEIL</h2></a></li>
					<li style={{ width: "200px" }}>
							<a href="" onMouseOver={()=>show(0)}><h2>NEWS</h2></a>

						<ul className="submenu_main_ulp2" ref={idsubmenu_main_ulp2}>
							<li className="submenu_main_lip2"><a href="/home#coding_stats">Coding stats</a></li>
							<li className="submenu_main_lip2"><a href="/home#activity_stats">Activity stats</a></li>
							<li className="submenu_main_lip2"><a href="/home#experienceskills">Experience</a></li>
							<li className="submenu_main_lip2"><a href="/home#portfolio">Portfolio</a></li>
							<li className="submenu_main_lip2"><a href="/home#experience">Job</a></li>
							<li className="submenu_main_lip2"><a href="/home#formation">Formation</a></li>

						</ul>

					</li>
						<li style={{ width: "200px" }}>
							<a href="/info" onMouseOver={() =>show(1)}><h2>INFO</h2></a>
							<ul className="submenu_main_ulp4" ref={idsubmenu_main_ulp4}>
							<li className="submenu_main_lip4"><a href="/info">My Setup</a></li>

						</ul>



					</li>
					<li style={{ width: "200px" }}>
							<a href="" onMouseOver={() =>show(2)}><h2>TUTORIAL</h2></a>
							<ul className="submenu_main_ulp3" ref={idsubmenu_main_ulp3}>
							<li className="submenu_main_lip3"><a href="/c">The Langage C</a></li>
							<li className="submenu_main_lip3"><a href="/cpp">Data structure in C++</a></li>
							<li className="submenu_main_lip3"><a href="/nn">Convolutional Neural Network</a></li>
						</ul>


					</li>
					<li style={{ width: "150px" }}>
						<a href="/gallery"><h2>GALLERY</h2></a>


					</li>
					<li style={{ width: "150px" }}><a href="/about"><h2>ABOUT </h2></a></li>
						<li style={{ width: "20px" }}><a href="/settings" style={{ padding: "20px 5px" }}><img src="Image/settings2.png" alt="settings" width="25" height="25" /></a></li>
				</ul>

			</div>

		
			<BrowserRouter>
				<Routes>

					<Route path='/home' element={<Home />} />
					<Route exact path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/info' element={<Info />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/gallery' element={<Gallery />} />
					<Route path='/c' element={<C />} />
					<Route path='/cpp' element={<Cpp />} />
					<Route path='/nn' element={<Nn />} />
				</Routes>

			</BrowserRouter>

		</div>


        
    </div>

        
        
    );



}


export default Base;