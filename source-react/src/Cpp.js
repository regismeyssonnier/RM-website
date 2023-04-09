import './main.css';
import * as foo from './main.js';
import React, { useEffect } from 'react';

function Cpp() {

	const vectorT = "<keyword_blue>vector</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; v;<br /><br />"+
		"<keyword_blue>for</keyword_blue > (<keyword_red>int</keyword_red> i = 0; i < 500; i++) {<br />" +
		"<tab1>v.push_back(i);</tab1><keyword_green> //insert the value of i in the vector  </keyword_green><br />" +
		"}" +
		"<br />" +
		"cout << v[0] << endl;<keyword_green> //display 0 (== v[0])  </keyword_green><br /><br />" +
		"v.pop_back(); <keyword_green> //pop the last element </keyword_green>	<br /><br />" +
		"<br />" +
		"<keyword_green>/**********Display the vector****************/</keyword_green><br />" +
		"<keyword_blue>for</keyword_blue>(<keyword_red>int</keyword_red> i = 0; i < v.size(); i++) {<br />" +
		"<tab1>cout << v[i] << endl;</tab1><br />" +
		"}" +
		"<br /><br />" +
		"<keyword_green>/*****Create vector (like 2D array) 10 by 10 inintialize at zero***/</keyword_green><br />" +
		"<keyword_blue>vector</keyword_blue> &lt; <keyword_blue>vector</keyword_blue> &lt; <keyword_red> int</keyword_red> &gt;> vv(10, <keyword_blue>vector</keyword_blue> & lt; <keyword_red> int</keyword_red> & gt; (10, 0));<br /><br />" +
		"<keyword_green>/**********Display the vector****************/</keyword_green><br />" +
		"<keyword_blue>for</keyword_blue>(<keyword_red>int</keyword_red> i = 0; i < vv.size(); i++) {<br />" +
		"<tab1><keyword_blue>for</keyword_blue>(<keyword_red>int</keyword_red> j = 0; j < vv[i].size(); j++){</tab1><br />" +
		"<tab2>cout << vv[i][j] << endl;</tab2><br />" +
		"<tab1>}</tab1><br />" +
		"}" +
		"<br /><br />";

	var vectorcpp = React.createRef();

	const queueT = "<keyword_blue>queue</keyword_blue>&lt;pair&lt;<keyword_red>int</keyword_red>,<keyword_red>int</keyword_red>&gt;> q;<br /><br />"+
		"q.push({ 0, 6}); <br />" +
		"q.push({ 1, 6}); <br />" +
		"q.push({ 2, 6}); <br />" +
		"q.push({ 3, 6}); <br />" +
		"q.push({ 4, 6});<br /><br />" +
		"pair &lt; <keyword_red>int</keyword_red>, <keyword_red>int</keyword_red> &gt; p;<br /><br />" +
		"<keyword_blue>while</keyword_blue>(!q.empty()){<br />" +
		"<tab1>p = q.front();</tab1><br />" +
		"<tab1>cout &lt;< p.first &lt;<  \" \" &lt;< p.second &lt;< endl;</tab1><br />" +
			"<tab1>q.pop();</tab1><br />" +

		"}";

	var queuecpp = React.createRef();

	const dequeT = "<keyword_blue>deque</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; d;<br /><br />"+
		"<keyword_blue>for</keyword_blue> (<keyword_red>int</keyword_red> i = 0; i < 500; i++) {<br />" +
		"<tab1>d.push_back(i);</tab1><keyword_green> //insert the value of i in the deque  </keyword_green><br />" +
		"}" +
		"<br />" +
		"cout & lt; < d[0] & lt;< endl;<keyword_green> //display 0 (== d[0])  </keyword_green><br /><br />" +
		"d.pop_back(); <keyword_green> //pop the last element </keyword_green>	<br /><br />" +
		"d.push_front(10); <keyword_green> //insert 10 in front of the deque </keyword_green>	<br /><br />" +
		"d.pop_front(); <keyword_green> //pop the first element </keyword_green>	<br /><br />" +
		"<br />" +
		"<keyword_green>/**********Display the deque****************/</keyword_green><br />" +
		"<keyword_blue>for</keyword_blue>(<keyword_red>int</keyword_red> i = 0; i < d.size(); i++) {<br />" +
		"<tab1>cout &lt;< d[i] &lt;< endl;</tab1><br />" +
		"}";

	var dequecpp = React.createRef();

	const priority_queuecppT = "<keyword_blue>priority_queue</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; p;<br /><br />"+
		"p.push(10); <br />" +
		"p.push(20); <br />" +
		"p.push(5); <br />" +
		"p.push(15); <br />" +
		"p.push(30);<br /><br />" +
		"<keyword_red>int</keyword_red> i;<br /><br />" +
	"<keyword_blue>while</keyword_blue>(!p.empty()){<br />" +
		"<tab1>i = p.top();</tab1><br />" +
		"<tab1>cout &lt;< i &lt;< endl;</tab1><br />" +
		"<tab1>p.pop();</tab1><br />" +

		"}";

	var priority_queuecpp = React.createRef();

	const setcppT = "<keyword_blue>set</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; s;<br /><br />" +
		"s.insert(10); <br />" +
		"s.insert(20); <br />" +
		"s.insert(5); <br />" +
		"s.insert(15); <br />" +
		"s.insert(30);<br /><br />" +
		"<keyword_blue>for</keyword_blue>(<keyword_blue>auto</keyword_blue> e: s) {<br />" +
		"<tab1>cout &lt;&lt; e &lt;&lt; endl;</tab1><br />" +

		"}";

	var setcpp = React.createRef();

	const stackT = "<keyword_blue>stack</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; s;<br /><br />"+
		"s.push(10); <br />" +
		"s.push(20); <br />" +
		"s.push(5); <br />" +
		"s.push(15); <br />" +
		"s.push(30);<br /><br />" +
		"<keyword_red>int</keyword_red> i;<br /><br />" +
		"<keyword_blue>while</keyword_blue>(!s.empty()){<br />" +
		"<tab1>i = s.top();</tab1><br />" +
		"<tab1>cout &lt;< i &lt;< endl;</tab1><br />" +
		"<tab1>s.pop();</tab1><br />" +

		"}";

	var stackcpp = React.createRef();

	const mapT = "<keyword_blue>map</keyword_blue>&lt;<keyword_red>char</keyword_red>,<keyword_red>int</keyword_red>&gt; fr;<br /><br />"+
		"<keyword_red> string</keyword_red> s = \"regis meyssonnier\";<br />" +
			"<keyword_blue>for</keyword_blue>(<keyword_red>int</keyword_red> i = 0; i < s.length(); i++) {<br />" +
			"<tab1>fr[s[i]]++;</tab1><br />" +

			"}<br /><br />" +
		"fr['z'] = 10000; <br />";

	var mapcpp = React.createRef();


	useEffect(() => {
		vectorcpp.current.innerHTML = vectorT;
		queuecpp.current.innerHTML = queueT;
		dequecpp.current.innerHTML = dequeT;
		priority_queuecpp.current.innerHTML = priority_queuecppT;
		setcpp.current.innerHTML = setcppT;
		stackcpp.current.innerHTML = stackT;
		mapcpp.current.innerHTML = mapT;
	});


    return (
        <div>
			<div className="navcontent">

				
				<div className="navleft" id="idnavleft" style={{ height: "6000px" }}>
					<div className="innavleft">
						<div className="menu_princ_element">
							<h2><a href="#langage_c">Langage C++</a></h2>
						</div>
						<br /><br />

						<div style={{textAlign:"center"}}>
							<h3><a href="#data">Data structure</a></h3>
							<h3><a href="#vector">Vector</a></h3>
							<h3><a href="#queue">Queue</a></h3>
							<h3><a href="#deque">Deque</a></h3>
							<h3><a href="#pqueue">Priority_queue</a></h3>
							<h3><a href="#set">Set</a></h3>
							<h3><a href="#stack">Stack</a></h3>
							<h3><a href="#map">Map</a></h3>
							<h3><a href="#odatas">Other Data structure</a></h3>
						</div>
					</div>
				</div>

				
				<div className="navcenter" id="idnavcenter" style={{ height: "6000px" }}>
					<center><h1 id="langage_cpp">Data structure in C++</h1></center><br/><br />
						<h2 id="data" style={{ textDecoration: "underline", marginLeft: "20px" }}>1. Data structure</h2>
						<p style={{marginLeft:"20px"}}>
					The langage C++ is a langage construct over the C langage and is 100% compatible(C -> C++). In this tutorial, I'm going to present to you The Data structure
							in C++ like the vector, deque, queue, priority_queue, stack, set, map, multiset, multimap, unordered_map , etc...

						</p>
						<p>
							<div className="code">

								<keyword_blue>vector</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; v;<br /><br />
							<keyword_blue>queue</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; q;<br /><br />
						<keyword_blue>deque</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; q;<br /><br />
					<keyword_blue>priority_queue</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; p;<br /><br />
				<keyword_blue>map</keyword_blue>&lt;<keyword_red>int</keyword_red>, <keyword_red>int</keyword_red>&gt; fr;<br /><br />
			<keyword_blue>set</keyword_blue>&lt;<keyword_red>int</keyword_red>&gt; s;<br /><br />
						<keyword_blue>multiset</keyword_blue> &lt;< keyword_red > int</keyword_red >&gt; ms;<br /><br />
						<keyword_blue>unordered_map</keyword_blue> &lt;< keyword_red > int</keyword_red >, <keyword_red>int</keyword_red> > ufr;<br /><br />
						<keyword_green>
							/************************ etc ...*******************************/<br />

						</keyword_green>
					</div >
					<br /><br /><br />
				</p >
						<p style={{ marginLeft: "20px" }}>
					It's an advanced tutorial for the people who want to know the data structure in C++.

					<br /><br /><br />

				</p>
				<h2 id="vector" style={{ textDecoration: "underline", marginLeft: "20px" }}>2. Vector</h2>
						<p style={{ marginLeft: "20px" }}>
					The vector are like array in other langage. We can push, pop some elements and address directly the elements
					in the vector.
				</p>
				<p>
							<div className="code" style={{ height: "440px" }} ref={vectorcpp}>
						
					</div ><br /><br /><br />
				</p >
						<p style={{ marginLeft: "20px" }}>
					You cant put any type of data between the &lt;&gt; of the vector. Even, another data structure indefinitely. (e.g vector&lt;vector&lt;deque&lt;int&gt;&gt;&gt;)
				</p>
				<h2 id="queue" style={{ textDecoration: "underline", marginLeft: "20px" }}>3. Queue</h2>
							<p style={{ marginLeft: "20px" }}>
					The queue can be used as FIFO structure (First In First Out)
				</p>
							<p style={{ marginLeft: "20px" }}>
							<div className="code" ref={queuecpp}>
						

					</div><br /><br /><br />

				</p>
				<p style={{marginLeft:"20px"}}>
					First, we declare the queue and after we push some pair data in the queue. Then, while the queue is not empty we display the
					data of the front element, ans we pop this element after.
				</p><br />
				<h2 id="deque" style={{ textDecoration: "underline", marginLeft: "20px" }}>4. Deque</h2>
				<p style={{marginLeft:"20px"}}>
					The deque (usually pronounced like "deck") is an irregular acronym of double-ended queue. Double-ended queues are sequence containers with dynamic sizes that can be expanded or contracted on both ends (either its front or its back).
				</p>
				<p>
							<div className="code" ref={dequecpp}>
						
					</div><br /><br /><br />

				</p>
				<p style={{marginLeft:"20px"}}>
					First, we declare the deque and after we push at the end a new element. Then, we show the ability of the double ended queue.
					Then, we display his elements.
				</p>
				<h2 id="pqueue" style={{ textDecoration: "underline", marginLeft: "20px" }}>5. Priority_queue</h2>
				<p style={{marginLeft:"20px"}}>
					A priority queue is a container adaptor that provides constant time lookup of the largest (by default) element, at the expense of logarithmic insertion and extraction.
					<br /><br />
					A user-provided Compare can be supplied to change the ordering, e.g. using std::greater&lt;T&gt;
						would cause the smallest element to appear as the top().
						<br /><br />
						Working with a priority_queue is similar to managing a heap in some random access container, with the benefit of not being able to accidentally invalidate the heap.
				</p>
				<p style={{marginLeft:"20px"}}>
								<div className="code" ref={priority_queuecpp}>
						
					</div><br /><br /><br />

				</p>
				<p style={{marginLeft:"20px"}}>
					First, we declare the priority_queue and after we push some element in it. They are sorted by default in decreasing order.
					Then, we retrieve the top of the queue, display it and pop it. They displayed in decreasing order. First, we display and pop 30, 20, 15, 10, 5.

				</p>
				<h2 id="set" style={{ textDecoration: "underline", marginLeft: "20px" }}>6. Set</h2>
				<p style={{marginLeft:"20px"}}>
					Sets are containers that store unique elements following a specific order.<br /><br />

					In a set, the value of an element also identifies it (the value is itself the key, of type T), and each value must be unique. The value of the elements in a set cannot be modified once in the container (the elements are always const), but they can be inserted or removed from the container.
					<br />
				</p>
				<p style={{marginLeft:"20px"}}>
						<div className="code" style={{ height: "250px" }} ref={setcpp}>
						

					</div><br /><br />
				</p >
				<p style={{marginLeft:"20px"}}>
					First, we declare the set and after we insert some data in it. Then we display the set. The element are in ascending order in the set,
					thus the element are displayed in this order : 5, 10, 15, 20, 30.

				</p>
				<h2 id="stack" style={{ textDecoration: "underline", marginLeft: "20px" }}>7. Stack</h2>
				<p style={{marginLeft:"20px"}}>
					Stacks are a type of container adaptor, specifically designed to operate in a LIFO context (last-in first-out), where elements are inserted and extracted only from one end of the container.
					<br />
				</p>
				<p style={{marginLeft:"20px"}}>
					<div className="code" style={{height:"280px"}} ref={stackcpp}>
						
					</div><br /><br />
				</p >
				<p style={{marginLeft:"20px"}}>
					First, we declare the stack and after we insert some data in it. Then we display the stack. The element are in a LIFO context,
					thus the element are displayed in this order : 30, 15, 5, 20, 10.

				</p>
				<h2 id="map" style={{ textDecoration: "underline", marginLeft: "20px" }}>8. Map</h2>
				<p style={{marginLeft:"20px"}}>
					Maps are associative containers that store elements formed by a combination of a key value and a mapped value, following a specific order.<br /><br />

					In a map, the key values are generally used to sort and uniquely identify the elements, while the mapped values store the content associated to this key.
					<br />
				</p>
				<p style={{marginLeft:"20px"}}>
						<div className="code" style={{ height: "250px" }} ref={mapcpp}>
						
					</div><br /><br />
				</p >
				<p style={{marginLeft:"20px"}}>
					First, we declare the map with char and int data. Then, we iterate over the string s, and count for each character
					the frequency of each char of the string s. We use often a map like that.

				</p>
				<h2 id="odatas" style={{ textDecoration: "underline", marginLeft: "20px" }}>9. Other Data structure</h2>
				<p style={{marginLeft:"20px"}}>
					The other data structure work in the same way but they are a little different. We use them of the same way.
					You can add multi and unordered at map or set(e.g. multiset, multimap, unordered_set, unordered_map, unordered_multiset, unordered_multimap ).
					<br /><br />"multi" means that the container can contain multiple equal value. "unordered" means that the container can contain the data without ascending or descending order.

				</p>

			</div >

			</div>

        </div>
    );



}


export default Cpp;