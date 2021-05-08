/* example.js */
"use strict";
//houglass.js public function
const timer = new Hourglass();
//test function 1
function reloadPage(){
    window.location.reload();
}
//test function 2
function deleteExample(){
    timer.deleteGlass('#hourglass28');
}
//creates main page through DOM
function mainPageHTML(body){
    body.style.color = "white";
    body.style.fontFamily = "'Lucida Console', 'Courier New', monospace";

    const titleText = document.createTextNode("hourglass.js library - by William Mucha");
	const title = document.createElement('h1');
    title.style.textAlign = "center";
    title.appendChild(titleText)

    const subtitleText = document.createTextNode("Timers made easy to save time!");
    const subtitle = document.createElement('h2');
    subtitle.style.textAlign = "center";
    subtitle.appendChild(subtitleText)

    const hg1 = document.createElement('div');
    hg1.id = "hourglass1"
    hg1.style.textAlign = "center";

    const break1 = document.createElement('br');

    const breaklinetext1 = document.createTextNode("------------------------------------------------------");
    const breakline1 = document.createElement('h2');
    breakline1.appendChild(breaklinetext1)

    const text1 = document.createTextNode("The main purpose for this library is to create functional onscreen timers.");
    const p1 = document.createElement('h3');
    p1.appendChild(text1)

    const text2 = document.createTextNode("Here is an example of a default timer:");
    const p2 = document.createElement('h3');
    p2.appendChild(text2)

    const hg2 = document.createElement('div');
    hg2.id = "hourglass2"

    const break2 = document.createElement('br');
    const breaklinetext2 = document.createTextNode("------------------------------------------------------");
    const breakline2 = document.createElement('h2');
    breakline2.appendChild(breaklinetext2)

    const text3 = document.createTextNode("Timers are created using the ");
    const text3_2 = document.createTextNode("createHourglass(id, duration, visual)");
    const text3_3 = document.createTextNode(" function.");
    const c1 = document.createElement('span');
    c1.appendChild(text3_2)
    c1.style.color = "green";
    const p3 = document.createElement('h3');
    p3.appendChild(text3)
    p3.appendChild(c1)
    p3.appendChild(text3_3)

    const text4 = document.createTextNode("id - element where timer will be created, HTML id attribute");
    const p4 = document.createElement('h3');
    p4.appendChild(text4)

    const text5 = document.createTextNode("duration - time in seconds");
    const p5 = document.createElement('h3');
    p5.appendChild(text5)

    const text6 = document.createTextNode("visual - timer visual that will be used");
    const p6 = document.createElement('h3');
    p6.appendChild(text6)

    const text7 = document.createTextNode("There are 4 types of visuals:");
    const p7 = document.createElement('h3');
    p7.appendChild(text7)

    const text8 = document.createTextNode("- Rectangle or default visual (visual = null)");
    const p8 = document.createElement('h3');
    p8.appendChild(text8)

    const hg3 = document.createElement('div');
    hg3.id = "hourglass3"

    const text9 = document.createTextNode("- Circle (visual = \"Circle\")");
    const p9 = document.createElement('h3');
    p9.appendChild(text9)

    const hg4 = document.createElement('div');
    hg4.id = "hourglass4"

    const text10 = document.createTextNode("- Hourglass (visual = \"Hourglass\")");
    const p10 = document.createElement('h3');
    p10.appendChild(text10)

    const hg5 = document.createElement('div');
    hg5.id = "hourglass5"

    const text11 = document.createTextNode("- Candle (visual = \"Candle\")");
    const p11 = document.createElement('h3');
    p11.appendChild(text11)

    const hg6 = document.createElement('div');
    hg6.id = "hourglass6"

    const break3 = document.createElement('br');
    const breaklinetext3 = document.createTextNode("------------------------------------------------------");
    const breakline3 = document.createElement('h2');
    breakline3.appendChild(breaklinetext3)

    const text12 = document.createTextNode("The hourglass.js library contains many functions to customize each timer.");
    const p12 = document.createElement('h3');
    p12.appendChild(text12)

    const text13 = document.createTextNode("Below is the documentation and examples of each function.");
    const p13 = document.createElement('h3');
    p13.appendChild(text13)

    const break4 = document.createElement('br');
    const breaklinetext4 = document.createTextNode("------------------------------------------------------");
    const breakline4 = document.createElement('h2');
    breakline4.appendChild(breaklinetext4)

    const text14 = document.createTextNode("There are 5 functions used to change the colors of a timer:");
    const p14 = document.createElement('h3');
    p14.appendChild(text14)

    const text15 = document.createTextNode("setHourglassColor(id, color)");
    const text15_2 = document.createTextNode(" changes the color of the visual");
    const c2 = document.createElement('span');
    c2.appendChild(text15)
    c2.style.color = "green";
    const p15 = document.createElement('h3');
    p15.appendChild(c2)
    p15.appendChild(text15_2)

    const hg7 = document.createElement('div');
    hg7.id = "hourglass7"

    const text16 = document.createTextNode("setBackgroundColor(id, color)");
    const text16_2 = document.createTextNode(" changes the color of the background");
    const c3 = document.createElement('span');
    c3.appendChild(text16)
    c3.style.color = "green";
    const p16 = document.createElement('h3');
    p16.appendChild(c3)
    p16.appendChild(text16_2)
    
    const hg8 = document.createElement('div');
    hg8.id = "hourglass8"

    const text17 = document.createTextNode("setButtonColor(id, color)");
    const text17_2 = document.createTextNode(" changes the color of the buttons");
    const c4 = document.createElement('span');
    c4.appendChild(text17)
    c4.style.color = "green";
    const p17 = document.createElement('h3');
    p17.appendChild(c4)
    p17.appendChild(text17_2)
    
    const hg9 = document.createElement('div');
    hg9.id = "hourglass9"

    const text18 = document.createTextNode("setTextColor(id, color)");
    const text18_2 = document.createTextNode(" changes the color of the bottom text");
    const c5 = document.createElement('span');
    c5.appendChild(text18)
    c5.style.color = "green";
    const p18 = document.createElement('h3');
    p18.appendChild(c5)
    p18.appendChild(text18_2)
    
    const hg10 = document.createElement('div');
    hg10.id = "hourglass10"

    const text19 = document.createTextNode("setButtonTextColor(id, color)");
    const text19_2 = document.createTextNode(" changes the color of the button text");
    const c6 = document.createElement('span');
    c6.appendChild(text19)
    c6.style.color = "green";
    const p19 = document.createElement('h3');
    p19.appendChild(c6)
    p19.appendChild(text19_2)
    
    const hg11 = document.createElement('div');
    hg11.id = "hourglass11"

    const break5 = document.createElement('br');
    const breaklinetext5 = document.createTextNode("------------------------------------------------------");
    const breakline5 = document.createElement('h2');
    breakline5.appendChild(breaklinetext5)

    const text20 = document.createTextNode("There are 3 functions used to change the size of a timer:");
    const p20 = document.createElement('h3');
    p20.appendChild(text20)

    const text21 = document.createTextNode("setHourglassSize(id, size)");
    const text21_2 = document.createTextNode(" changes the size of the visual");
    const c7 = document.createElement('span');
    c7.appendChild(text21)
    c7.style.color = "green";
    const p21 = document.createElement('h3');
    p21.appendChild(c7)
    p21.appendChild(text21_2)

    const hg12 = document.createElement('div');
    hg12.id = "hourglass12"
    const break6 = document.createElement('br');
    const hg13 = document.createElement('div');
    hg13.id = "hourglass13"

    const text22 = document.createTextNode("setButtonSize(id, size)");
    const text22_2 = document.createTextNode(" changes the size of the button");
    const c8 = document.createElement('span');
    c8.appendChild(text22)
    c8.style.color = "green";
    const p22 = document.createElement('h3');
    p22.appendChild(c8)
    p22.appendChild(text22_2)

    const hg14 = document.createElement('div');
    hg14.id = "hourglass14"
    const break7 = document.createElement('br');
    const hg15 = document.createElement('div');
    hg15.id = "hourglass15"

    const text23 = document.createTextNode("setTextSize(id, size)");
    const text23_2 = document.createTextNode(" changes the size of the bottom text");
    const c9 = document.createElement('span');
    c9.appendChild(text23)
    c9.style.color = "green";
    const p23 = document.createElement('h3');
    p23.appendChild(c9)
    p23.appendChild(text23_2)

    const hg16 = document.createElement('div');
    hg16.id = "hourglass16"
    const break8 = document.createElement('br');
    const hg17 = document.createElement('div');
    hg17.id = "hourglass17"

    const break9 = document.createElement('br');
    const breaklinetext6 = document.createTextNode("------------------------------------------------------");
    const breakline6 = document.createElement('h2');
    breakline6.appendChild(breaklinetext6)

    const text24 = document.createTextNode("There are 6 functions used for text and button manipulation:");
    const p24 = document.createElement('h3');
    p24.appendChild(text24)

    const text25 = document.createTextNode("setFont(id, font)");
    const text25_2 = document.createTextNode(" changes the font of the button and bottom text");
    const c10 = document.createElement('span');
    c10.appendChild(text25)
    c10.style.color = "green";
    const p25 = document.createElement('h3');
    p25.appendChild(c10)
    p25.appendChild(text25_2)

    const hg18 = document.createElement('div');
    hg18.id = "hourglass18"

    const text26 = document.createTextNode("setTextFixed(id, text)");
    const text26_2 = document.createTextNode(" sets the bottom text to a given text");
    const c11 = document.createElement('span');
    c11.appendChild(text26)
    c11.style.color = "green";
    const p26 = document.createElement('h3');
    p26.appendChild(c11)
    p26.appendChild(text26_2)

    const hg19 = document.createElement('div');
    hg19.id = "hourglass19"

    const text27 = document.createTextNode("setTextCompletion(id, text)");
    const text27_2 = document.createTextNode(" sets the bottom text to a given text on completion");
    const c12 = document.createElement('span');
    c12.appendChild(text27)
    c12.style.color = "green";
    const p27 = document.createElement('h3');
    p27.appendChild(c12)
    p27.appendChild(text27_2)

    const hg20 = document.createElement('div');
    hg20.id = "hourglass20"

    const text28 = document.createTextNode("setTextAlert(id, text)");
    const text28_2 = document.createTextNode(" displays an alert on completion");
    const c13 = document.createElement('span');
    c13.appendChild(text28)
    c13.style.color = "green";
    const p28 = document.createElement('h3');
    p28.appendChild(c13)
    p28.appendChild(text28_2)

    const hg21 = document.createElement('div');
    hg21.id = "hourglass21"

    const text29 = document.createTextNode("setTextHidden(id)");
    const text29_2 = document.createTextNode(" removes the bottom text");
    const c14 = document.createElement('span');
    c14.appendChild(text29)
    c14.style.color = "green";
    const p29 = document.createElement('h3');
    p29.appendChild(c14)
    p29.appendChild(text29_2)

    const hg22 = document.createElement('div');
    hg22.id = "hourglass22"

    const text30 = document.createTextNode("removeButtons(id)");
    const text30_2 = document.createTextNode(" removes the buttons");
    const c15 = document.createElement('span');
    c15.appendChild(text30)
    c15.style.color = "green";
    const p30 = document.createElement('h3');
    p30.appendChild(c15)
    p30.appendChild(text30_2)

    const hg23 = document.createElement('div');
    hg23.id = "hourglass23"

    const break10 = document.createElement('br');
    const breaklinetext7 = document.createTextNode("------------------------------------------------------");
    const breakline7 = document.createElement('h2');
    breakline7.appendChild(breaklinetext7)

    const text31 = document.createTextNode("There are 3 functions used for visual manipulation:");
    const p31 = document.createElement('h3');
    p31.appendChild(text31)

    const text32 = document.createTextNode("reverseDirection(id)");
    const text32_2 = document.createTextNode(" changes the direction the visual travels");
    const c16 = document.createElement('span');
    c16.appendChild(text32)
    c16.style.color = "green";
    const p32 = document.createElement('h3');
    p32.appendChild(c16)
    p32.appendChild(text32_2)

    const hg24 = document.createElement('div');
    hg24.id = "hourglass24"

    const text33 = document.createTextNode("setAutoStart(id)");
    const text33_2 = document.createTextNode(" automatically starts the timer when the webpage loads");
    const c17 = document.createElement('span');
    c17.appendChild(text33)
    c17.style.color = "green";
    const p33 = document.createElement('h3');
    p33.appendChild(c17)
    p33.appendChild(text33_2)

    const hg25 = document.createElement('div');
    hg25.id = "hourglass25"

    const text34 = document.createTextNode("setAutoRepeat(id)");
    const text34_2 = document.createTextNode(" automatically repeats the timer (Note buttons are auto removed)");
    const c18 = document.createElement('span');
    c18.appendChild(text34)
    c18.style.color = "green";
    const p34 = document.createElement('h3');
    p34.appendChild(c18)
    p34.appendChild(text34_2)

    const hg26 = document.createElement('div');
    hg26.id = "hourglass26"

    const break11 = document.createElement('br');
    const breaklinetext8 = document.createTextNode("------------------------------------------------------");
    const breakline8 = document.createElement('h2');
    breakline8.appendChild(breaklinetext8)

    const text35 = document.createTextNode("The remaining 2 function are used for dev functionality:");
    const p35 = document.createElement('h3');
    p35.appendChild(text35)

    const text36 = document.createTextNode("runOnComplete(id)");
    const text36_2 = document.createTextNode(" runs a given no parameter function on completion");
    const c19 = document.createElement('span');
    c19.appendChild(text36)
    c19.style.color = "green";
    const p36 = document.createElement('h3');
    p36.appendChild(c19)
    p36.appendChild(text36_2)

    const hg27 = document.createElement('div');
    hg27.id = "hourglass27"

    const text37 = document.createTextNode("deleteGlass(id)");
    const text37_2 = document.createTextNode(" deletes a timer");
    const c20 = document.createElement('span');
    c20.appendChild(text37)
    c20.style.color = "green";
    const p37 = document.createElement('h3');
    p37.appendChild(c20)
    p37.appendChild(text37_2)

    const hg28 = document.createElement('div');
    hg28.id = "hourglass28"

    const break12 = document.createElement('br');
    const breaklinetext9 = document.createTextNode("------------------------------------------------------");
    const breakline9 = document.createElement('h2');
    breakline9.appendChild(breaklinetext9)

    const text38 = document.createTextNode("Getting Started:");
    const p38 = document.createElement('h3');
    p38.appendChild(text38)

    const text39 = document.createTextNode("This library requires minimal setup. Simply add the library to your working folder and add the line below to your header to start using it.");
    const p39 = document.createElement('h3');
    p39.appendChild(text39)

    const text40 = document.createTextNode("<script defer type=\"text/javascript\" src='hourglass.js'></script>");
    const p40 = document.createElement('h3');
    p40.appendChild(text40)

    const break13 = document.createElement('br');
    const breaklinetext10 = document.createTextNode("------------------------------------------------------");
    const breakline10 = document.createElement('h2');
    breakline10.appendChild(breaklinetext10)

    //-----

    body.innerHTML = "<br><br><br>"
	body.append(title)
    body.append(subtitle)
    body.append(hg1)
    body.append(break1)
    body.append(breakline1)
    body.append(p1)
    body.append(p2)
    body.append(hg2)
    body.append(break2)
    body.append(breakline2)
    body.append(p38)
    body.append(p39)
    body.append(p40)
    body.append(break13)
    body.append(breakline10)
    body.append(p12)
    body.append(p13)
    body.append(break3)
    body.append(breakline3)
    body.append(p3)
    body.append(p4)
    body.append(p5)
    body.append(p6)
    body.append(p7)
    body.append(p8)
    body.append(hg3)
    body.append(p9)
    body.append(hg4)
    body.append(p10)
    body.append(hg5)
    body.append(p11)
    body.append(hg6)
    body.append(break4)
    body.append(breakline4)
    body.append(p14)
    body.append(p15)
    body.append(hg7)
    body.append(p16)
    body.append(hg8)
    body.append(p17)
    body.append(hg9)
    body.append(p18)
    body.append(hg10)
    body.append(p19)
    body.append(hg11)
    body.append(break5)
    body.append(breakline5)
    body.append(p20)
    body.append(p21)
    body.append(hg12)
    body.append(break6)
    body.append(hg13)
    body.append(p22)
    body.append(hg14)
    body.append(break7)
    body.append(hg15)
    body.append(p23)
    body.append(hg16)
    body.append(break8)
    body.append(hg17)
    body.append(break9)
    body.append(breakline6)
    body.append(p24)
    body.append(p25)
    body.append(hg18)
    body.append(p26)
    body.append(hg19)
    body.append(p27)
    body.append(hg20)
    body.append(p28)
    body.append(hg21)
    body.append(p29)
    body.append(hg22)
    body.append(p30)
    body.append(hg23)
    body.append(break10)
    body.append(breakline7)
    body.append(p31)
    body.append(p32)
    body.append(hg24)
    body.append(p33)
    body.append(hg25)
    body.append(p34)
    body.append(hg26)
    body.append(break11)
    body.append(breakline8)
    body.append(p35)
    body.append(p37)
    body.append(hg28)
    body.append(p36)
    body.append(hg27)
    body.append(break12)
    body.append(breakline9)
}
//Sets up mainPageHTML after loading start
function setupPage(){
    timer.deleteGlass('#startinghourglass');
    let body = document.getElementById("library-content");
    mainPageHTML(body);
    examples();
}
//examples function where hourglass.js is used
function examples(){
    //Hourglass 1 functions
    timer.createHourglass('#hourglass1', 5)
    timer.setHourglassColor('#hourglass1', "white");
    timer.setTextColor('#hourglass1', "white");
    timer.setHourglassSize('#hourglass1', 2);
    timer.setTextHidden('#hourglass1');
    timer.setAutoRepeat('#hourglass1');
    //Hourglass 2 functions
    timer.createHourglass('#hourglass2', 10);
    timer.setHourglassColor('#hourglass2', "white");
    timer.setTextColor('#hourglass2', "white");
    //Hourglass 3 functions
    timer.createHourglass('#hourglass3', 10);
    timer.setHourglassColor('#hourglass3', "white");
    timer.setTextColor('#hourglass3', "white");
    //Hourglass 4 functions
    timer.createHourglass('#hourglass4', 10, "Circle");
    timer.setHourglassColor('#hourglass4', "white");
    timer.setTextColor('#hourglass4', "white");
    //Hourglass 5 functions
    timer.createHourglass('#hourglass5', 10, "Hourglass");
    timer.setHourglassColor('#hourglass5', "white");
    timer.setTextColor('#hourglass5', "white");
    //Hourglass 6 functions
    timer.createHourglass('#hourglass6', 10, "Candle");
    timer.setHourglassColor('#hourglass6', "white");
    timer.setTextColor('#hourglass6', "white");
    //Hourglass 7 functions
    timer.createHourglass('#hourglass7', 10);
    timer.setHourglassColor('#hourglass7', "green");
    timer.setTextColor('#hourglass7', "white");
    timer.setTextFixed('#hourglass7', "timer.setHourglassColor('#hourglass7', \"green\")");
    //Hourglass 8 functions
    timer.createHourglass('#hourglass8', 10);
    timer.setHourglassColor('#hourglass8', "white");
    timer.setTextColor('#hourglass8', "white");
    timer.setBackgroundColor('#hourglass8', "green");
    timer.setTextFixed('#hourglass8', "timer.setBackgroundColor('#hourglass8', \"green\")");
    //Hourglass 9 functions
    timer.createHourglass('#hourglass9', 10);
    timer.setHourglassColor('#hourglass9', "white");
    timer.setTextColor('#hourglass9', "white");
    timer.setButtonColor('#hourglass9', "green");
    timer.setTextFixed('#hourglass9', "timer.setButtonColor('#hourglass9', \"green\")");
    //Hourglass 10 functions
    timer.createHourglass('#hourglass10', 10);
    timer.setHourglassColor('#hourglass10', "white");
    timer.setTextColor('#hourglass10', "green");
    timer.setTextFixed('#hourglass10', "timer.setTextColor('#hourglass10', \"green\")");
    //Hourglass 11 functions
    timer.createHourglass('#hourglass11', 10);
    timer.setHourglassColor('#hourglass11', "white");
    timer.setTextColor('#hourglass11', "white");
    timer.setButtonTextColor('#hourglass11', "green");
    timer.setTextFixed('#hourglass11', "timer.setTextColor('#hourglass11', \"green\")");
    //Hourglass 12 functions
    timer.createHourglass('#hourglass12', 10);
    timer.setHourglassColor('#hourglass12', "white");
    timer.setTextColor('#hourglass12', "white");
    timer.setHourglassSize('#hourglass12', 0.5);
    timer.setTextFixed('#hourglass12', "timer.setHourglassSize('#hourglass12', 0.5)");
    //Hourglass 13 functions
    timer.createHourglass('#hourglass13', 10);
    timer.setHourglassColor('#hourglass13', "white");
    timer.setTextColor('#hourglass13', "white");
    timer.setHourglassSize('#hourglass13', 2);
    timer.setTextFixed('#hourglass13', "timer.setHourglassSize('#hourglass13', 2)");
    //Hourglass 14 functions
    timer.createHourglass('#hourglass14', 10);
    timer.setHourglassColor('#hourglass14', "white");
    timer.setTextColor('#hourglass14', "white");
    timer.setButtonSize('#hourglass14', "8px");
    timer.setTextFixed('#hourglass14', "timer.setHourglassSize('#hourglass14', \"8px\")");
    //Hourglass 15 functions
    timer.createHourglass('#hourglass15', 10);
    timer.setHourglassColor('#hourglass15', "white");
    timer.setTextColor('#hourglass15', "white");
    timer.setButtonSize('#hourglass15', "32px");
    timer.setTextFixed('#hourglass15', "timer.setHourglassSize('#hourglass15', \"32px\")");
    //Hourglass 16 functions
    timer.createHourglass('#hourglass16', 10);
    timer.setHourglassColor('#hourglass16', "white");
    timer.setTextColor('#hourglass16', "white");
    timer.setTextSize('#hourglass16', "8px");
    timer.setTextFixed('#hourglass16', "timer.setHourglassSize('#hourglass16', \"8px\")");
    //Hourglass 17 functions
    timer.createHourglass('#hourglass17', 10);
    timer.setHourglassColor('#hourglass17', "white");
    timer.setTextColor('#hourglass17', "white");
    timer.setTextSize('#hourglass17', "32px");
    timer.setTextFixed('#hourglass17', "timer.setHourglassSize('#hourglass17', \"32px\")");
    //Hourglass 18 functions
    timer.createHourglass('#hourglass18', 10);
    timer.setHourglassColor('#hourglass18', "white");
    timer.setTextColor('#hourglass18', "white");
    timer.setFont('#hourglass18', "Arial, Helvetica, sans-serif");
    timer.setTextFixed('#hourglass18', "timer.setFont('#hourglass18', \"Arial, Helvetica, sans-serif\")");
    //Hourglass 19 functions
    timer.createHourglass('#hourglass19', 10);
    timer.setHourglassColor('#hourglass19', "white");
    timer.setTextColor('#hourglass19', "white");
    timer.setTextFixed('#hourglass19', "timer.setTextFixed('#hourglass19', timer.setTextFixed(...))");
    //Hourglass 20 functions
    timer.createHourglass('#hourglass20', 1);
    timer.setHourglassColor('#hourglass20', "white");
    timer.setTextColor('#hourglass20', "white");
    timer.setTextCompletion('#hourglass20', "Timer Completed");
    timer.setTextFixed('#hourglass20', "timer.setTextCompletion('#hourglass20', \"Timer Completed\"))");
    //Hourglass 21 functions
    timer.createHourglass('#hourglass21', 1);
    timer.setHourglassColor('#hourglass21', "white");
    timer.setTextColor('#hourglass21', "white");
    timer.setTextAlert('#hourglass21', "Timer Completed");
    timer.setTextFixed('#hourglass21', "timer.setTextAlert('#hourglass21', \"Timer Completed\"))");
    //Hourglass 22 functions
    timer.createHourglass('#hourglass22', 10);
    timer.setHourglassColor('#hourglass22', "white");
    timer.setTextColor('#hourglass22', "white");
    timer.setTextHidden('#hourglass22');
    //Hourglass 23 functions
    timer.createHourglass('#hourglass23', 10);
    timer.setHourglassColor('#hourglass23', "white");
    timer.setTextColor('#hourglass23', "white");
    timer.removeButtons('#hourglass23');
    timer.setTextFixed('#hourglass23', "timer.removeButtons('#hourglass23')");
    //Hourglass 24 functions
    timer.createHourglass('#hourglass24', 10);
    timer.setHourglassColor('#hourglass24', "white");
    timer.setTextColor('#hourglass24', "white");
    timer.reverseDirection('#hourglass24');
    timer.setTextFixed('#hourglass24', "timer.reverseDirection('#hourglass24')");
    //Hourglass 25 functions
    timer.createHourglass('#hourglass25', 500, "Circle");
    timer.setHourglassColor('#hourglass25', "white");
    timer.setTextColor('#hourglass25', "white");
    timer.setTextFixed('#hourglass25', "timer.setAutoStart('#hourglass25')");
    timer.setAutoStart('#hourglass25');
    //Hourglass 26 functions
    timer.createHourglass('#hourglass26', 3);
    timer.setHourglassColor('#hourglass26', "white");
    timer.setTextColor('#hourglass26', "white");
    timer.setTextFixed('#hourglass26', "timer.setAutoRepeat('#hourglass26')");
    timer.setAutoRepeat('#hourglass26');
    //Hourglass 27 functions
    timer.createHourglass('#hourglass27', 3, "Hourglass");
    timer.setHourglassColor('#hourglass27', "white");
    timer.setTextColor('#hourglass27', "white");
    timer.setTextFixed('#hourglass27', "timer.runOnComplete('#hourglass28', reloadPage)");
    timer.runOnComplete('#hourglass27', reloadPage);
    //Hourglass 28 functions
    timer.createHourglass('#hourglass28', 3, "Hourglass");
    timer.setHourglassColor('#hourglass28', "white");
    timer.setTextColor('#hourglass28', "white");
    timer.setTextFixed('#hourglass28', "timer.deleteGlass('#hourglass27');");
    timer.runOnComplete('#hourglass28', deleteExample);
}
//Start function that adds loading timer animation
function start(){
    let starting = document.getElementById("starting");
    starting.innerHTML = '<div id="startinghourglass" style="text-align: center"></div>';
    timer.createHourglass('#startinghourglass', 5, "Hourglass")
    timer.setHourglassColor('#startinghourglass', "white");
    timer.setTextColor('#startinghourglass', "white");
    timer.setTextFixed('#startinghourglass', "Loading hourglass.js library");
    timer.setHourglassSize('#startinghourglass', 2);
    timer.setTextSize('#startinghourglass', "32px");
    timer.reverseDirection('#startinghourglass');
    timer.runOnComplete('#startinghourglass', setupPage)
    timer.setAutoStart('#startinghourglass');
    timer.removeButtons('#startinghourglass');
}
//Calls start function on page load
start();