import './main.css';
import * as foo from './main.js';
import React, { useEffect } from 'react';

function C() {

	const langageC = "<keyword_red>int</keyword_red> i = 0;<br />"+
		"<keyword_blue>while</keyword_blue > (i < 10){<br />"+
		"<tab2>i++;</tab2><br />" +
		"}<br />" +
		"<br />" +
		"<keyword_blue>printf</keyword_blue>(\"%d\n\", i);<br />" +
		"<br /><br />" +
		"<keyword_blue>for</keyword_blue>(<keyword_red>int</keyword_red> i = 0; i < 10; i++) {<br />" +
		"<tab2><keyword_blue>printf</keyword_blue>(\"%d\n\", i);</tab2><br />" +
		"}<br />" +
		"<br />" +
		"<keyword_blue>if</keyword_blue>(i == 10){<br />" +
		"<tab1><keyword_blue>printf</keyword_blue>(\"%d\n\", i+200);</tab1><br />" +
	"} <br />";

	var codelangagec = React.createRef();
	

	const allocateMem = "<keyword_blue>for</keyword_blue>(<keyword_red>int</keyword_red> i = 0; i < 500; i++){<br />"+
		"<tab1>* (varint2 + i) = <keyword_blue>malloc</keyword_blue>(1024 * <keyword_red>sizeof(char)</keyword_red>);</tab1 ><br />"+
		"<tab1><keyword_blue>scanf</keyword_blue>(\" % [^\n] %* c\", *(arr + i));</tab1><br />" +
			"<tab1>*(varint2 + i) = <keyword_blue>realloc</keyword_blue>(*(arr + i), <keyword_blue>strlen</keyword_blue>(*(varint2 + i)) + 1);</tab1><br />" +
			"} <br />";

	var aloocatemem = React.createRef();
	

	const functionC = "<keyword_red>void </keyword_red>Retrieve_input(**char input){<br />"+
	"<tab1> <keyword_blue>scanf</keyword_blue>(\"%[^\n]%*c\", * input);</tab1 > <br />" +
		"}<br /><br />" +
		"<keyword_red>int </keyword_red>main(){<br /><br />" +
		"<tab1><keyword_red>char* </keyword_red> varint = <keyword_red>(char*)</keyword_red><keyword_blue>malloc</keyword_blue>(1024 * <keyword_red>sizeof(int)</keyword_red>);</tab1>" +
		"<tab1>Retrieve_input(&varint);</tab1><br />" +
		"<tab1><keyword_blue>printf</keyword_blue>(\"%s\n\", varint);</tab1><br /><br />" +
		"} <br />";

	var functionCl = React.createRef();

	

	useEffect(() => {
		codelangagec.current.innerHTML = langageC;
		aloocatemem.current.innerHTML = allocateMem;
		functionCl.current.innerHTML = functionC;
	});

	return (
		<div>
			<div className="navcontent">

			
				<div className="navleft" id="idnavleft" style={{ height: "5000px" }}>
					<div className="innavleft">
						<div className="menu_princ_element">
							<h2><a href="#langage_c">Langage C</a></h2>
						</div>
						<br /><br />

						<div style={{ textAlign: "center" }}>
							<h3><a href="#base">The base</a></h3>
							<h3><a href="#std">Stdin/Stdout</a></h3>
							<h3><a href="#memory">Memory</a></h3>
							<h3><a href="#function">Function</a></h3>
							<h3><a href="#c">The c</a></h3>

						</div>
					</div>
				</div>

				
				<div className="navcenter" id="idnavcenter" style={{ height: "5000px" }}>
					<center><h1 id="langage_c">The langage C</h1></center><br/><br />
					<h2 id="base" style={{ textDecoration: "underline", marginLeft: "20px" }}>1. Base</h2>
					<p style={{ marginLeft: "20px" }}>
							The langage C is a very complicated langage.
						</p>
						<p>
						<div className="code" ref={codelangagec}>

								

							</div>
							<br /><br /><br />
						</p>
					<p style={{ marginLeft: "20px" }}>

							Everybody know the variable int(4 bytes) , double(8bytes floating point), char(1 byte) and float(4 bytes floating point).
							They are useful to store some data of the same types.<br /><br />
							The loop while and for can repeat some instructions as many time as you want. In this example, the while repeat
							the incrementing of the i 10 times, like the for who display the variable i 10 times. <br /><br />
							The if statement test if the variable i equal 10 and print this variable with printf and add it 200 in the same time.
							<br /><br /><br />

						</p>
					<h2 id="std" style={{ textDecoration: "underline", marginLeft: "20px" }}>2. Stdin / Stdout</h2>
					<p style={{ marginLeft: "20px" }}>
							With the stdin scanf, we can enter some text, and convert it in the data type we want.<br /><br />

						</p>
						<p>
							<div className="code">
								<keyword_red>char</keyword_red>	sen[200];<br />
								<keyword_blue>scanf</keyword_blue>("\n");<br />
								<keyword_blue>scanf</keyword_blue>("%[^\n]%*c", sen);<br /><br />
								<keyword_blue>printf</keyword_blue>("%s\n", sen);<br /><br /><br /><br />
								<keyword_green>
								/*******************************************************/<br />
								// %[^\n]%*c : retrieve a string even with the space <br />
								// %d : retrieve an integer<br />
								// %f : retrieve a float or double<br />
								// %c : retrieve a character<br />
								// %s : for the string
								/*******************************************************/<br />
								</keyword_green>
							</div><br /><br /><br />
						</p>
					<p style={{ marginLeft: "20px" }}>
							The scanf retrieve the data type with the %d for the integer and for the other type like explained above in green.<br /><br />
							The printf display the data with the same way in using the %d for the integer and for the other type of data(%c, %s, ...).<br /><br />

						</p>
					<h2 id="memory" style={{ textDecoration: "underline", marginLeft: "20px" }}>3. Allocating memory</h2>
					<p style={{ marginLeft: "20px" }}>
							<div className="code">
								<br /><br />
								<keyword_green>// Allocate an array of int of size 500.</keyword_green><br />
								<keyword_red>int* </keyword_red> varint = <keyword_red>(int*)</keyword_red><keyword_blue>malloc</keyword_blue>(500 * <keyword_red>sizeof(int)</keyword_red>);
								<br /><br />
								<keyword_green>// Allocate a 2d array of int of size 500x500.</keyword_green><br />
								<keyword_red>char** </keyword_red> varint2 = <keyword_red>(char**)</keyword_red><keyword_blue>malloc</keyword_blue>(500 * <keyword_red>sizeof(char*)</keyword_red>);
								<br />
							<div ref={aloocatemem}>
								
								</div>
								<br />
							</div><br /><br /><br />

						</p>
					<p style={{ marginLeft: "20px" }}>
							First, we allocate an array of 500 int with malloc. The function malloc allocate memory that we need. <br /><br />
							After, we allocate a 2d array with a double pointer varint2. We allocate first an array of 1024 bytes, because we don't knwow
							the size of the input. And we retrieve the input with scanf. <br /><br />
							Then, we use realloc to give the exact size to the array of the same size of the input.
						</p><br />
					<h2 id="function" style={{ textDecoration: "underline", marginLeft: "20px" }}>4. Function</h2>
					<p style={{ marginLeft: "20px" }}>
							The function allows you to execute a piece of code in a scope that you can call as many times as you want.<br /><br />

						</p>
						<p>
							<div className="code">
							<br />
							<div ref={functionCl}>
								
							</div>
							</div><br /><br /><br />

						</p>
					<p style={{ marginLeft: "20px" }}>
							The function Retrieve_input take a parameter input of type char** and retrieve the data in this variable.<br /><br />
							We call that function in the main function and display the variable varint that we passed into the function Retrieve_input.<br />

						</p>
					<h2 id="c" style={{ textDecoration: "underline", marginLeft: "20px" }}>5. The C</h2>
					<p style={{ marginLeft: "20px" }}>
							Finally, the C is a complete langage and we can do what we want with. It's hard for the beginner but with this base you can do anything.

						</p>
				</div>
				</div>

		</div>

	);

}

export default C;