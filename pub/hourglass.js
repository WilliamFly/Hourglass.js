/* Hourglass.js */
"use strict";

(function (global, document) {
	//function that will be on global scope
	function Hourglass() {
		this.timerbodies = [];
		this.timers = [];
	}
	//private classes
	class HourglassTimer {//object of a timer
		constructor(id, duration) {
			this.id = id;
			this.duration = duration;
			this.timer = null;
			this.hourglasssand = null;
			this.color = "#000000";
			this.reverse = false;
			this.size = 1;
			this.buttoncolor = "white";
			this.buttontextcolor = "black";
			this.buttonsize = "14px";
			this.textcolor = "black";
			this.textsize = "14px";
			this.font = "'Lucida Console', 'Courier New', monospace";
			this.texthidden = false;
			this.textfixed = null;
			this.textcompletion = null;
			this.textalert = null;
			this.autorepeat = false;
			this.func = null;
		}
		//function that stops a timer
		stopTimer() {
			const self = this;
			clearInterval(this.timer);
		}
		//function that starts a timer
		startTimer() {
			const self = this;
			const cutId = this.id.substring(1);
			const time = document.getElementById(cutId + "Time")
			const sand = document.getElementById(cutId + "Sand")
			let x = this.duration;
			let cx = this.duration;
			let rx = 0;
			let noalertrepeat = true;
			let nofuncrepeat = true;
			const durationThis = this.duration;
			const colorThis = this.color;
			const reverseThis = this.reverse;
			const sizeThis = this.size;
			const adjustX = this.hourglasssand.adjustX;
			const adjustY = this.hourglasssand.adjustY;
			const isHidden = this.texthidden;
			const txtComplete = this.textcompletion;
			const txtAlert = this.textalert;
			const autorepeatThis = this.autorepeat;
			const textfixedThis = this.textfixed;
			const funcThis = this.func;
			if (this.hourglasssand.type == "Rectangle") {
				this.timer = setInterval(function () {
					x = x - 1/50;
					rx = rx + 1/50;
					if (txtAlert != null && noalertrepeat && x == 0) {
						alert(txtAlert);
						noalertrepeat = false;
					}
					if (!isHidden) {
						if (textfixedThis == null) {
							time.innerHTML = parseInt(x+1) + " seconds";
							if(x == 0){
								time.innerHTML = parseInt(x) + " seconds";
							}
						} else {
							time.innerHTML = textfixedThis;
						}
					}
					var ctx = sand.getContext("2d");
					ctx.clearRect(0, 0, sand.width, sand.height);
					ctx.fillStyle = colorThis;
					if (reverseThis) {
						ctx.fillRect(10, 10, 0 + ((290 * sizeThis) / cx) * rx, 40 * sizeThis);
					} else {
						ctx.fillRect(10, 10, (290 * sizeThis) - ((290 * sizeThis) / cx) * rx, 40 * sizeThis);
					}
					if (x <= 0) {
						clearInterval(this.timer);
						if (autorepeatThis) {
							x = durationThis;
							cx = durationThis;
							rx = -1/50;
						}
						else {
							x = 1/50;;
							rx = cx - 1/50;;
						}
						if (txtComplete != null) {
							time.innerHTML = txtComplete;
						}
						if (funcThis != null && nofuncrepeat) {
							funcThis();
							nofuncrepeat = false;
						}
					}
				}, 20);
			}
			else if (this.hourglasssand.type == "Circle") {
				this.timer = setInterval(function () {
					x = x - 1/50;
					rx = rx + 1/50;
					if (txtAlert != null && noalertrepeat && x == 0) {
						alert(txtAlert);
						noalertrepeat = false;
					}
					if (!isHidden) {
						if (textfixedThis == null) {
							time.innerHTML = parseInt(x+1) + " seconds";
							if(x == 0){
								time.innerHTML = parseInt(x) + " seconds";
							}
						} else {
							time.innerHTML = textfixedThis;
						}
					}
					var ctx = sand.getContext("2d");
					ctx.clearRect(0, 0, sand.width, sand.height);
					ctx.fillStyle = this.color;
					ctx.beginPath();
					ctx.moveTo(50 * sizeThis, 50 * sizeThis);
					if (reverseThis) {
						ctx.arc(50 * sizeThis, 50 * sizeThis, 40 * sizeThis, 0, 0 + ((2 * Math.PI) / cx) * rx);
					} else {
						ctx.arc(50 * sizeThis, 50 * sizeThis, 40 * sizeThis, 0, 2 * Math.PI - ((2 * Math.PI) / cx) * rx);
					}
					ctx.stroke();
					ctx.fill();
					ctx.closePath();
					if (x <= 0) {
						clearInterval(this.timer);
						if (!reverseThis) {
							ctx.clearRect(0, 0, sand.width, sand.height);
						}
						if (autorepeatThis) {
							x = durationThis;
							cx = durationThis;
							rx = -1/50;
						}
						else {
							x = 1/50;
							rx = cx - 1/50;
						}
						if (txtComplete != null) {
							time.innerHTML = txtComplete;
						}
						if (funcThis != null && nofuncrepeat) {
							funcThis();
							nofuncrepeat = false;
						}
					}
				}, 20);
			}
			else if (this.hourglasssand.type == "Hourglass") {
				this.timer = setInterval(function () {
					var ctx = sand.getContext("2d");
					if (reverseThis == false && x == durationThis) {
						ctx.beginPath();
						drawHourglass(ctx, adjustX, adjustY, sizeThis);
						ctx.stroke();
						ctx.fill();
						ctx.closePath();
					}
					x = x - 1/50;
					rx = rx + 1/50;
					if (txtAlert != null && noalertrepeat && x == 0) {
						alert(txtAlert);
						noalertrepeat = false;
					}
					if (!isHidden) {
						if (textfixedThis == null) {
							time.innerHTML = parseInt(x+1) + " seconds";
							if(x == 0){
								time.innerHTML = parseInt(x) + " seconds";
							}
						} else {
							time.innerHTML = textfixedThis;
						}
					}
					if (!reverseThis) {
						ctx.clearRect(0, 0, sand.width, (sand.height / cx) * rx);
					}
					ctx.beginPath();
					drawHourglass(ctx, adjustX, adjustY, sizeThis);
					ctx.stroke();
					if (reverseThis) {
						ctx.fill();
						ctx.beginPath();
						ctx.clearRect(0, 0, sand.width, sand.height - (sand.height / cx) * rx);
						drawHourglass(ctx, adjustX, adjustY, sizeThis);
						ctx.stroke();
					}
					ctx.closePath();
					if (x <= 0) {
						clearInterval(this.timer);
						if (autorepeatThis) {
							x = durationThis;
							cx = durationThis;
							rx = -1/50;
						}
						else {
							x = 1/50;
							rx = cx - 1/50;
						}
						if (txtComplete != null) {
							time.innerHTML = txtComplete;
						}
						if (funcThis != null && nofuncrepeat) {
							funcThis();
							nofuncrepeat = false;
						}
					}
				}, 20);
			}
			else if (this.hourglasssand.type == "Candle") {
				this.timer = setInterval(function () {
					x = x - 1/50;
					rx = rx + 1/50;
					if (txtAlert != null && noalertrepeat && x == 0) {
						alert(txtAlert);
						noalertrepeat = false;
					}
					if (!isHidden) {
						if (textfixedThis == null) {
							time.innerHTML = parseInt(x+1) + " seconds";
							if(x == 0){
								time.innerHTML = parseInt(x) + " seconds";
							}
						} else {
							time.innerHTML = textfixedThis;
						}
					}
					var ctx = sand.getContext("2d");
					ctx.clearRect(0, 0, sand.width, (sand.height / cx) * rx);
					ctx.fillStyle = colorThis;
					if (reverseThis) {
						ctx.fillRect(5, 5, 70 * sizeThis, 150 * sizeThis);
						ctx.clearRect(0, 0, sand.width, sand.height - (sand.height / cx) * rx);
						ctx.fillRect(35 * sizeThis, 5, 10 * sizeThis, 150 * sizeThis);
					} else {
						ctx.fillRect(35 * sizeThis, 5, 10 , 150 * sizeThis);
					}
					if (x <= 0) {
						clearInterval(this.timer);
						if (autorepeatThis) {
							x = durationThis;
							cx = durationThis;
							rx = -1/50;
						}
						else {
							x = 1/50;;
							rx = cx - 1/50;;
						}
						if (txtComplete != null) {
							time.innerHTML = txtComplete;
						}
						if (funcThis != null && nofuncrepeat) {
							funcThis();
							nofuncrepeat = false;
						}
					}
				}, 20);
			}
		}
		//function that resets a timer
		resetTimer() {
			const self = this;
			const cutId = this.id.substring(1);
			const sand = document.getElementById(cutId + "Sand");
			if (this.hourglasssand.type == "Rectangle") {
				var ctx = sand.getContext("2d");
				ctx.clearRect(0, 0, sand.width, sand.height);
				ctx.fillStyle = this.color;
				if (this.reverse) { }
				else {
					ctx.fillRect(10, 10, 290 * this.size, 40 * this.size);
				}
			}
			else if (this.hourglasssand.type == "Circle") {
				var ctx = sand.getContext("2d");
				ctx.clearRect(0, 0, sand.width, sand.height);
				ctx.fillStyle = this.color;

				if (this.reverse) { }
				else {
					ctx.beginPath();
					ctx.arc(50 * this.size, 50 * this.size, 40 * this.size, 0, 2 * Math.PI);
					ctx.stroke();
					ctx.fill();
					ctx.closePath();
				}
			}
			else if (this.hourglasssand.type == "Hourglass") {
				var ctx = sand.getContext("2d");
				ctx.clearRect(0, 0, sand.width, sand.height);
				ctx.fillStyle = this.color;
				ctx.beginPath();
				drawHourglass(ctx, this.hourglasssand.adjustX, this.hourglasssand.adjustY, this.size);
				ctx.stroke();
				if (this.reverse == false) {
					ctx.fill();
				}
				ctx.closePath();
			}
			else if (this.hourglasssand.type == "Candle") {
				var ctx = sand.getContext("2d");
				ctx.clearRect(0, 0, sand.width, sand.height);
				ctx.fillStyle = this.color;
				if (this.reverse) {
					ctx.fillRect(35 * this.size, 5, 10 * this.size, 150 * this.size);
				}
				else {
					ctx.fillRect(5, 5, 70 * this.size, 150 * this.size);
				}
			}
			clearInterval(this.timer);
			const time = document.getElementById(cutId + "Time")
			time.innerHTML = this.duration + " seconds";
			if (this.textfixed != null) {
				time.innerHTML = this.textfixed;
			}
			if (this.texthidden == true) {
				time.innerHTML = "";
			}
			time.style.fontSize = this.textsize;
			time.style.color = this.textcolor;
			time.style.fontFamily = this.font;
			if (this.autorepeat) {
				this.startTimer()
			}
		}

	}

	class HourglassSand {//object of timer visual
		constructor(type) {
			this.type = type;
			this.sand = null;
			this.adjustX = 129;
			this.adjustY = 41;
		}
		//sets the visual to a rectangle
		createRect(id) {
			const self = this;
			this.sand = document.createElement('canvas');
			let currentsandID = id + "Sand"
			this.sand.id = currentsandID.substring(1);
			this.sand.setAttribute("width", "300");
			this.sand.setAttribute("height", "50");
			var ctx = this.sand.getContext("2d");
			ctx.fillStyle = "#000000";
			ctx.fillRect(10, 10, 290, 40);
			return this.sand;
		}
		//sets the visual to a circle
		createCirc(id) {
			const self = this;
			this.sand = document.createElement('canvas');
			let currentsandID = id + "Sand"
			this.sand.id = currentsandID.substring(1);
			this.sand.setAttribute("width", "100");
			this.sand.setAttribute("height", "100");
			var ctx = this.sand.getContext("2d");
			ctx.fillStyle = "#000000";
			ctx.beginPath();
			ctx.arc(50, 50, 40, 0, 2 * Math.PI);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			return this.sand;
		}
		//sets the visual to an hourglass
		createGlass(id) {
			const self = this;
			this.sand = document.createElement('canvas');
			let currentsandID = id + "Sand"
			this.sand.id = currentsandID.substring(1);
			this.sand.setAttribute("width", "150");
			this.sand.setAttribute("height", "230");
			var ctx = this.sand.getContext("2d");
			ctx.fillStyle = "#000000";
			ctx.beginPath();
			drawHourglass(ctx, this.adjustX, this.adjustY, 1);
			ctx.stroke();
			ctx.fill();
			ctx.closePath();
			return this.sand;
		}
		//sets the visual to a candle
		createCandle(id) {
			const self = this;
			this.sand = document.createElement('canvas');
			let currentsandID = id + "Sand"
			this.sand.id = currentsandID.substring(1);
			this.sand.setAttribute("width", "75");
			this.sand.setAttribute("height", "150");
			var ctx = this.sand.getContext("2d");
			ctx.fillStyle = "#000000";
			ctx.fillRect(5, 5, 70, 150);
			ctx.fillRect(35, 5, 10, 150);
			return this.sand;
		}
	}
	//public functions
	Hourglass.prototype = {
		//initializes hourglass
		createHourglass: function (id, duration, visual) {
			const timerContainer = document.createElement('div')

			const buttons = document.createElement('span');

			let timer = new HourglassTimer(id, duration);

			const start = new controlButton(timer, "Start");

			let currentbuttonsID = id + "Buttons"
			buttons.id = currentbuttonsID.substring(1);

			buttons.appendChild(start);

			const breakLine = document.createElement('br');

			let HourSand = null;
			let sand = null;

			if (visual == "Circle") {
				HourSand = new HourglassSand("Circle");
				sand = HourSand.createCirc(id);
			} else if (visual == "Hourglass") {
				HourSand = new HourglassSand("Hourglass");
				sand = HourSand.createGlass(id);
			} else if (visual == "Candle") {
				HourSand = new HourglassSand("Candle");
				sand = HourSand.createCandle(id);
			} else {
				HourSand = new HourglassSand("Rectangle");
				sand = HourSand.createRect(id);
			}
			timer.hourglasssand = HourSand;

			const timeDuration = document.createTextNode(duration + " seconds");
			const time = document.createElement('div');

			let currentTimeID = id + "Time"
			time.id = currentTimeID.substring(1);

			time.style.fontSize = timer.textsize;
			time.style.color = timer.textcolor;
			time.style.fontFamily = timer.font;

			time.appendChild(timeDuration)

			timerContainer.appendChild(buttons);
			timerContainer.appendChild(breakLine);
			timerContainer.appendChild(sand);
			timerContainer.appendChild(time);

			const element = document.querySelector(id)
			element.append(timerContainer)

			this.timerbodies.push(timerContainer)
			this.timers.push(timer)
		},
		//changes color of visual
		setHourglassColor: function (id, color) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].color = color;
					this.timers[i].resetTimer();
				}
			}
		},
		//changes background of timer
		setBackgroundColor: function (id, color) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timerbodies[i].style.backgroundColor = color;
				}
			}
		},
		//changes direction of how the visual will process
		reverseDirection: function (id) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					if (this.timers[i].reverse == false) {
						this.timers[i].reverse = true;
						this.timers[i].resetTimer();
					} else {
						this.timers[i].reverse = false;
						this.timers[i].resetTimer();
					}
				}
			}
		},
		//changes the size of the visual
		setHourglassSize: function (id, size) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					if (this.timers[i].hourglasssand.type == "Circle") {
						this.timers[i].hourglasssand.sand.setAttribute("width", 100 * size);
						this.timers[i].hourglasssand.sand.setAttribute("height", 100 * size);
						this.timers[i].size = size;
						this.timers[i].resetTimer();
					} else if (this.timers[i].hourglasssand.type == "Rectangle") {
						this.timers[i].hourglasssand.sand.setAttribute("width", 300 * size);
						this.timers[i].hourglasssand.sand.setAttribute("height", 50 * size);
						this.timers[i].size = size;
						this.timers[i].resetTimer();
					} else if (this.timers[i].hourglasssand.type == "Hourglass") {
						this.timers[i].hourglasssand.sand.setAttribute("width", 150 * size);
						this.timers[i].hourglasssand.sand.setAttribute("height", 230 * size);
						this.timers[i].size = size;
						this.timers[i].resetTimer();
					} else if (this.timers[i].hourglasssand.type == "Candle") {
						this.timers[i].hourglasssand.sand.setAttribute("width", 75 * size);
						this.timers[i].hourglasssand.sand.setAttribute("height", 150 * size);
						this.timers[i].size = size;
						this.timers[i].resetTimer();
					} else {
						console.log("setSize failed, internal error, unknown type")
					}

				}
			}
		},
		//changes the size of the buttons
		setButtonSize: function (id, size) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].buttonsize = size;
					startedTimer(this.timers[i]);
					resetedTimer(this.timers[i]);
				}
			}
		},
		//changes the color of the buttons
		setButtonColor: function (id, color) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].buttoncolor = color;
					startedTimer(this.timers[i]);
					resetedTimer(this.timers[i]);
				}
			}
		},
		//changes the color of the text inside the buttons
		setButtonTextColor: function (id, color) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].buttontextcolor = color;
					startedTimer(this.timers[i]);
					resetedTimer(this.timers[i]);
				}
			}
		},
		//removes the buttons entirely
		removeButtons: function (id) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					removeButtons(this.timers[i]);
				}
			}
		},
		//changes the size of the text
		setTextSize: function (id, size) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].textsize = size;
					this.timers[i].resetTimer();
				}
			}
		},
		//changes the color of the bottom text
		setTextColor: function (id, color) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].textcolor = color;
					this.timers[i].resetTimer();
				}
			}
		},
		//changes the font of all the text, button and bottom
		setFont: function (id, font) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].font = font;
					startedTimer(this.timers[i]);
					resetedTimer(this.timers[i]);
					this.timers[i].resetTimer();
				}
			}
		},
		//removes the bottom text entierly
		setTextHidden: function (id) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					if (this.timers[i].texthidden == false) {
						this.timers[i].texthidden = true;
						this.timers[i].resetTimer();
					} else {
						this.timers[i].texthidden = false;
						this.timers[i].resetTimer();
					}
				}
			}
		},
		//changes the default timer countdown to a fixed text
		setTextFixed: function (id, text) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].textfixed = text;
					this.timers[i].resetTimer();
				}
			}
		},
		//changes the final text to a custom text
		setTextCompletion: function (id, text) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].textcompletion = text;
				}
			}
		},
		//adds an alert when a timer completes
		setTextAlert: function (id, text) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].textalert = text;
				}
			}
		},
		//automatically starts a timer when the page loads
		setAutoStart: function (id) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					startedTimer(this.timers[i]);
				}
			}
		},
		//automatically loops a timer from start to completiton (Note buttons are auto removed and non funcitonal in this mode)
		setAutoRepeat: function (id) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].autorepeat = true;
					this.timers[i].resetTimer();
					removeButtons(this.timers[i]);
				}
			}
		},
		//runs a function on the completion of a timer
		runOnComplete: function (id, func) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					this.timers[i].func = func;
					this.timers[i].resetTimer();
				}
			}
		},
		//removes a timer
		deleteGlass: function (id) {
			for (let i = 0; i < this.timers.length; i++) {
				if (this.timers[i].id == id) {
					const cutId = id.substring(1);
					let removedtimer = document.getElementById(cutId);
					this.timers.splice(i,1);
					this.timerbodies.splice(i,1);
					removedtimer.remove()
				}
			}
		}
	}
	//private helper functions
	//creates the buttons
	function controlButton(timer, type) {
		const id = timer.id;
		const buttoncol = timer.buttoncolor;
		const buttontxtcol = timer.buttontextcolor;
		const buttonsize = timer.buttonsize;
		const buttonfont = timer.font;
		const controlText = document.createTextNode(type);
		const control = document.createElement('button');
		let currentID = id + type
		control.id = currentID.substring(1);
		control.setAttribute("value", timer);
		control.style.backgroundColor = buttoncol;
		control.style.color = buttontxtcol;
		control.style.fontSize = buttonsize;
		control.style.fontFamily = buttonfont;
		control.appendChild(controlText);
		if (type == "Start") {
			control.addEventListener("click", function () { startedTimer(timer) });
		} else if (type == "Stop") {
			control.addEventListener("click", function () { stoppedTimer(timer) });
		} else if (type == "Reset") {
			control.addEventListener("click", function () { resetedTimer(timer) });
		} else {
			console.log("Error, unknown type found")
		}

		return control;
	}
	//switches the buttons once timer has started
	function startedTimer(timer) {
		const id = timer.id;
		const start = document.querySelector(id + 'Start')
		start.remove();

		const cutId = id.substring(1);
		const buttons = document.getElementById(cutId + "Buttons")

		const stop = new controlButton(timer, "Stop");
		const reset = new controlButton(timer, "Reset");

		timer.startTimer();

		buttons.appendChild(stop);
		buttons.appendChild(reset);

	}
	//switches the buttons once timer has been reset
	function resetedTimer(timer) {
		const id = timer.id;
		const reset = document.querySelector(id + 'Reset')
		reset.remove();
		const stop = document.querySelector(id + 'Stop')
		stop.remove();

		const cutId = id.substring(1);
		const buttons = document.getElementById(cutId + "Buttons")

		const start = new controlButton(timer, "Start");

		timer.resetTimer();

		buttons.appendChild(start);

	}
	//stops a timer
	function stoppedTimer(timer) {
		timer.stopTimer();
	}
	//removes all the buttons entierly
	function removeButtons(timer) {
		const id = timer.id;
		const cutId = id.substring(1);
		const buttons = document.getElementById(cutId + "Buttons")
		buttons.remove();
	}
	//draw function for the hourglass visual
	function drawHourglass(canvas, x, y, size) {
		canvas.moveTo((142 - x) * size, (51 - y) * size);
		canvas.lineTo((140 - x) * size, (54 - y) * size);
		canvas.lineTo((140 - x) * size, (59 - y) * size);
		canvas.lineTo((139 - x) * size, (64 - y) * size);
		canvas.lineTo((139 - x) * size, (69 - y) * size);
		canvas.lineTo((139 - x) * size, (74 - y) * size);
		canvas.lineTo((139 - x) * size, (79 - y) * size);
		canvas.lineTo((140 - x) * size, (84 - y) * size);
		canvas.lineTo((141 - x) * size, (89 - y) * size);
		canvas.lineTo((142 - x) * size, (94 - y) * size);
		canvas.lineTo((144 - x) * size, (99 - y) * size);
		canvas.lineTo((146 - x) * size, (104 - y) * size);
		canvas.lineTo((150 - x) * size, (109 - y) * size);
		canvas.lineTo((153 - x) * size, (114 - y) * size);
		canvas.lineTo((158 - x) * size, (119 - y) * size);
		canvas.lineTo((160 - x) * size, (122 - y) * size);
		canvas.lineTo((162 - x) * size, (124 - y) * size);
		canvas.lineTo((165 - x) * size, (127 - y) * size);
		canvas.lineTo((167 - x) * size, (129 - y) * size);
		canvas.lineTo((169 - x) * size, (131 - y) * size);
		canvas.lineTo((173 - x) * size, (134 - y) * size);
		canvas.lineTo((176 - x) * size, (136 - y) * size);
		canvas.lineTo((180 - x) * size, (139 - y) * size);
		canvas.lineTo((183 - x) * size, (141 - y) * size);
		canvas.lineTo((186 - x) * size, (144 - y) * size);
		canvas.lineTo((188 - x) * size, (146 - y) * size);
		canvas.lineTo((190 - x) * size, (149 - y) * size);
		canvas.lineTo((191 - x) * size, (150 - y) * size);
		canvas.lineTo((193 - x) * size, (154 - y) * size);
		canvas.lineTo((195 - x) * size, (159 - y) * size);
		//bottom left
		canvas.lineTo((195 - x) * size, (164 - y) * size);
		canvas.lineTo((193 - x) * size, (169 - y) * size);
		canvas.lineTo((188 - x) * size, (174 - y) * size);
		canvas.lineTo((183 - x) * size, (179 - y) * size);
		canvas.lineTo((177 - x) * size, (184 - y) * size);
		canvas.lineTo((170 - x) * size, (189 - y) * size);
		canvas.lineTo((164 - x) * size, (194 - y) * size);
		canvas.lineTo((158 - x) * size, (199 - y) * size);
		canvas.lineTo((154 - x) * size, (204 - y) * size);
		canvas.lineTo((150 - x) * size, (209 - y) * size);
		canvas.lineTo((147 - x) * size, (214 - y) * size);
		canvas.lineTo((145 - x) * size, (219 - y) * size);
		canvas.lineTo((142 - x) * size, (224 - y) * size);
		canvas.lineTo((141 - x) * size, (229 - y) * size);
		canvas.lineTo((140 - x) * size, (234 - y) * size);
		canvas.lineTo((139 - x) * size, (239 - y) * size);
		canvas.lineTo((139 - x) * size, (244 - y) * size);
		canvas.lineTo((139 - x) * size, (249 - y) * size);
		canvas.lineTo((139 - x) * size, (254 - y) * size);
		canvas.lineTo((139 - x) * size, (259 - y) * size);
		canvas.lineTo((140 - x) * size, (264 - y) * size);
		canvas.lineTo((142 - x) * size, (269 - y) * size);
		//bottom right
		canvas.lineTo((257 - x) * size, (269 - y) * size);
		canvas.lineTo((259 - x) * size, (264 - y) * size);
		canvas.lineTo((260 - x) * size, (259 - y) * size);
		canvas.lineTo((260 - x) * size, (254 - y) * size);
		canvas.lineTo((261 - x) * size, (249 - y) * size);
		canvas.lineTo((261 - x) * size, (244 - y) * size);
		canvas.lineTo((261 - x) * size, (239 - y) * size);
		canvas.lineTo((260 - x) * size, (234 - y) * size);
		canvas.lineTo((259 - x) * size, (229 - y) * size);
		canvas.lineTo((257 - x) * size, (224 - y) * size);
		canvas.lineTo((255 - x) * size, (219 - y) * size);
		canvas.lineTo((252 - x) * size, (214 - y) * size);
		canvas.lineTo((249 - x) * size, (209 - y) * size);
		canvas.lineTo((245 - x) * size, (204 - y) * size);
		canvas.lineTo((241 - x) * size, (199 - y) * size);
		canvas.lineTo((236 - x) * size, (194 - y) * size);
		canvas.lineTo((231 - x) * size, (189 - y) * size);
		canvas.lineTo((225 - x) * size, (184 - y) * size);
		canvas.lineTo((217 - x) * size, (179 - y) * size);
		canvas.lineTo((211 - x) * size, (174 - y) * size);
		canvas.lineTo((207 - x) * size, (169 - y) * size);
		canvas.lineTo((205 - x) * size, (164 - y) * size);
		//top right
		canvas.lineTo((205 - x) * size, (159 - y) * size);
		canvas.lineTo((206 - x) * size, (154 - y) * size);
		canvas.lineTo((208 - x) * size, (151 - y) * size);
		canvas.lineTo((210 - x) * size, (149 - y) * size);
		canvas.lineTo((212 - x) * size, (147 - y) * size);
		canvas.lineTo((215 - x) * size, (144 - y) * size);
		canvas.lineTo((216 - x) * size, (144 - y) * size);
		canvas.lineTo((219 - x) * size, (141 - y) * size);
		canvas.lineTo((222 - x) * size, (139 - y) * size);
		canvas.lineTo((224 - x) * size, (138 - y) * size);
		canvas.lineTo((226 - x) * size, (136 - y) * size);
		canvas.lineTo((229 - x) * size, (134 - y) * size);
		canvas.lineTo((234 - x) * size, (129 - y) * size);
		canvas.lineTo((237 - x) * size, (126 - y) * size);
		canvas.lineTo((239 - x) * size, (124 - y) * size);
		canvas.lineTo((243 - x) * size, (119 - y) * size);
		canvas.lineTo((247 - x) * size, (114 - y) * size);
		canvas.lineTo((251 - x) * size, (109 - y) * size);
		canvas.lineTo((253 - x) * size, (104 - y) * size);
		canvas.lineTo((255 - x) * size, (99 - y) * size);
		canvas.lineTo((257 - x) * size, (94 - y) * size);
		canvas.lineTo((258 - x) * size, (89 - y) * size);
		canvas.lineTo((260 - x) * size, (84 - y) * size);
		canvas.lineTo((261 - x) * size, (79 - y) * size);
		canvas.lineTo((262 - x) * size, (74 - y) * size);
		canvas.lineTo((262 - x) * size, (69 - y) * size);
		canvas.lineTo((262 - x) * size, (64 - y) * size);
		canvas.lineTo((261 - x) * size, (59 - y) * size);
		canvas.lineTo((260 - x) * size, (54 - y) * size);
		canvas.lineTo((259 - x) * size, (51 - y) * size);
		canvas.lineTo((142 - x) * size, (51 - y) * size);
	}

	//Adding Hourglass to window object if not already
	global.Hourglass = global.Hourglass || Hourglass

})(window, window.document);// pass the global window object to the anonymous function