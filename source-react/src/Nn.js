import './main.css';
import * as foo from './main.js';
import React, { useEffect } from 'react';



function Nn(){



    return (
        
        <div>
			<div className="navcontent">

				
				<div className="navleft" id="idnavleft" style={{height:"5000px"}}>
					<div className="innavleft">
						<div className="menu_princ_element">
							<h2><a href="#langage_c">Neural Network</a></h2>
						</div>
						<br /><br />

						<div style={{textAlign:"center"}}>
							<h3><a href="#base">The base</a></h3>
							<h3><a href="#std">Initialization</a></h3>
							<h3><a href="#memory">Creation</a></h3>
							<h3><a href="#function">Use the CNN</a></h3>
							<h3><a href="#c">The project</a></h3>

						</div>
					</div>
				</div>

				
				<div className="navcenter" id="idnavcenter" style={{ height: "5000px" }}>
					<center><h1 id="langage_c">Convolutional Neural Network</h1></center><br/><br />
						<h2 id="base" style={{ textDecoration: "underline", marginLeft: "20px" }}>1. Base</h2>
						<p style={{marginLeft:"20px"}}>
							I'm going to present you how to create a convolutional neural network, who recognize you with my className in python.<br />
							You can retrieve this code on github :<br /><br />
							<a href="https://github.com/regismeyssonnier/NeuralNetwork/tree/main/MyCamNetwork">https://github.com/regismeyssonnier/NeuralNetwork/tree/main/MyCamNetwork</a>
							First, you have to make some import in your code:
						</p>
						<p>
							<div className="code">
								import cv2<br />
								import sys<br />
								import numpy as np<br />
								<br />
								# TensorFlow and tf.keras<br />
								import tensorflow as tf<br />
								<br />
								# Helper libraries<br />
								import matplotlib.pyplot as plt<br />
								<br />
								print(tf.__version__)<br />
								<br />
								import os<br />
								import PIL<br />
								import PIL.Image<br />
								import pathlib<br />
								import matplotlib.pyplot as plt<br />



							</div>
							<br /><br /><br />
						</p>
						<p style={{marginLeft:"20px"}}>

							This import can allow you to import the useful library to create this CNN.
							<br /><br /><br />

						</p>
						<h2 id="std" style={{ textDecoration: "underline", marginLeft: "20px" }}>2. Initialization </h2>
						<p style={{marginLeft:"20px"}}>
							You have to use my className MyNetwork.<br /><br />

						</p>
						<p>
						<div className="code" style={{height:"550px"}}>
								className MyNetwork:<br />
								<br />
								def __init__(self, className_name, imw, imh, dataset_url):<br /><br />
								<div className="div_tab1">
									self.classNamename = className_name<br />
									self.w = imw<br />
									self.h = imh<br />
									self.dataset_url = dataset_url<br />
									self.model = 0<br />
								</div>
								<br />
								def init_model(self, bsz, valid_sp):<br />
								<div className="div_tab1">
									self.batch_size = bsz<br />
									self.validation_rate = valid_sp<br />
									<br />
									self.train_ds = tf.keras.utils.image_dataset_from_directory(<br />
									pathlib.Path(self.dataset_url),<br />
									validation_split=self.validation_rate,<br />
									subset="training",<br />
									seed=123,<br />
									image_size=(self.h, self.w),<br />
									batch_size=self.batch_size)<br /><br />

									self.val_ds = tf.keras.utils.image_dataset_from_directory(<br />
									pathlib.Path(self.dataset_url),<br />
									validation_split=self.validation_rate,<br />
									subset="validation",<br />
									seed=123,<br />
									image_size=(self.h, self.w),<br />
									batch_size=self.batch_size)<br />
								</div>


							</div><br /><br /><br />
						</p>
						<p style={{marginLeft:"20px"}}>
							The method __init__(...) is the constructor of the className, and the method init_model() initialize the data useful for creating the
							CNN like the training and validation data.
						</p>
						<h2 id="memory" style={{ textDecoration: "underline", marginLeft: "20px" }}>3. Creation </h2>
						<p style={{marginLeft:"20px"}}>
							After that, you have to create the CNN with the function create_model().
							<div className="code">
								def create_model(self):<br /><br />
								<div className="div_tab1">
									self.model = tf.keras.Sequential([<br />
									tf.keras.layers.Rescaling(1./255),<br />
									tf.keras.layers.Conv2D(32, 3, activation='relu'),<br />
									tf.keras.layers.MaxPooling2D(),<br />
									tf.keras.layers.Conv2D(32, 3, activation='relu'),<br />
									tf.keras.layers.MaxPooling2D(),<br />
									tf.keras.layers.Conv2D(32, 3, activation='relu'),<br />
									tf.keras.layers.MaxPooling2D(),<br />
									tf.keras.layers.Flatten(),<br />
									tf.keras.layers.Dense(256, activation='relu'),<br />
									tf.keras.layers.Dense(2)<br />
									])<br /><br />

									self.model.compile(<br />
									optimizer='adam',<br />
									loss=tf.losses.SparseCategoricalCrossentropy(from_logits=True),<br />
									metrics=['accuracy'])<br />
								</div>
							</div><br /><br /><br />

						</p>
						<p style={{marginLeft:"20px"}}>
							After initializing the model(CNN), you create the model like that. There is some convolution and pooling operation on the image before
							enter the layers of the CNN. For more info, go to the tensorflow documentation
						</p><br />
						<h2 id="function" style={{ textDecoration: "underline", marginLeft: "20px" }}>4. Use the CNN</h2>
						<p style={{marginLeft:"20px"}}>
							This is the total code to use the className MyNetwork in order to create the CNN and save it in some files.

						</p>
						<p>
						<div className="code" style={{ height: "200px" }}>

								# To create and save the CNN<br />
								mynet = MyNetwork("regis", 180, 180, "image/copy")<br />
								mynet.init_model(25, 0.2)<br />
								mynet.create_model()<br />
								mynet.train_model(10)<br />
								mynet.get_history()<br />
								mynet.save_model("model/regismodel")<br /><br />
								<keyword_green># To load the model and predict if it's you on the image.</keyword_green><br />
								mynet.load_model("model/regismodel")<br />
								mynet.predict("image/test.png")<br />

							</div><br /><br /><br />

						</p>
						<p style={{marginLeft:"20px"}}>
							This piece of code like you see, create an object MyNetwork, initialize, create, train the model. After that, we get and show some
							information about the history of the accuracy and loss of the model.
							Then, we save the model.
						</p>
						<h2 id="c" style={{ textDecoration: "underline", marginLeft: "20px" }}>5. The project</h2>
						<p style={{marginLeft:"20px"}}>
							Finally, the className MyNetwork is a part of the project MyCamNetwork. This is a project which use the webcam to detect you, your face with other className, and
							play some games. This project is accessible via the link give at the beginning of this article.<br /><br />
							To use the total project, run the command python3 mycam.py on your pc.
						</p>
			</div>
				</div>



        </div>
        
    );


}

export default Nn;