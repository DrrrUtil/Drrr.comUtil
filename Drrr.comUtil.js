// ==UserScript==
// @name Drrr.comUtil.js
// @namespace https://github.com/ReiwuKleiwu
// @version 0.0.1
// @description Multiple utilities for Drrr.com
// @author Exii aka ニック & Levi aka leeopold.
// @homepageURL https://github.com/ReiwuKleiwu
// @supportURL https://github.com/DrrrUtil/Drrr.comUtil/issues
// @icon https://i.imgur.com/TGrEyCg.png
// @match https://*/room*
// @match http://*/room*
// @license GPL-3.0-only
// ==/UserScript==
"use strict";

window.addEventListener("load", function() {


    let body1 = document.getElementsByTagName('body')[0];
    let boxWrapper = document.getElementsByClassName("message_box_effect_wraper");
    let wrappi = document.getElementsByClassName("room-submit-wrap");
    let scriptDiv = document.createElement("div");
    let scriptList = document.createElement("ul");
    let scriptBox1 = document.createElement("div");
    let scriptBox2 = document.createElement("div");
    let scriptBox3 = document.createElement("div");
    let scriptBox4 = document.createElement("div");

    //Script Button
    let scriptButton = document.createElement("button");


    //Mute
    let muteHeader = document.createElement("label");
    let mutedUsers = document.createElement("label");
    let muteText = document.createElement("textarea");
    let muteAdd = document.createElement("button");
    let muteRemove = document.createElement("button");
    let muteName = document.createElement("label");
    let muteInput = document.createElement("input");
    let muteDiv = document.createElement("div");
    let muteDiv2 = document.createElement("div");
    let muteDiv3 = document.createElement("div");
    let muteDiv4 = document.createElement("div");
    let muteDiv5 = document.createElement("div");
    let muteOn = document.createElement("button");

    //White
    let whiteHeader = document.createElement("label");
    let whitedUsers = document.createElement("label");
    let whiteText = document.createElement("textarea");
    let whiteAdd = document.createElement("button");
    let whiteRemove = document.createElement("button");
    let whiteName = document.createElement("label");
    let whiteInput = document.createElement("input");
    let whiteDiv = document.createElement("div");
    let whiteDiv2 = document.createElement("div");
    let whiteDiv3 = document.createElement("div");
    let whiteDiv4 = document.createElement("div");
    let whiteDiv5 = document.createElement("div");
    let whiteOn = document.createElement("button");
    let whiteaddRoom = document.createElement("button");
    let whiteClear = document.createElement("button");
    let whiteRage = document.createElement("button");

    //Black
    let blackHeader = document.createElement("label");
    let blackedUsers = document.createElement("label");
    let blackText = document.createElement("textarea");
    let blackAdd = document.createElement("button");
    let blackRemove = document.createElement("button");
    let blackName = document.createElement("label");
    let blackInput = document.createElement("input");
    let blackDiv = document.createElement("div");
    let blackDiv2 = document.createElement("div");
    let blackDiv3 = document.createElement("div");
    let blackDiv4 = document.createElement("div");
    let blackDiv5 = document.createElement("div");
    let blackOn = document.createElement("button");

    //URL
    let URLHeader = document.createElement("label");
    let URLName = document.createElement("label");
    let URLInput = document.createElement("input");
    let URLSet = document.createElement("button");
    let URLDiv = document.createElement("div");
    let URLDiv2 = document.createElement("div");
    let URLDiv3 = document.createElement("div");

    //Background Video


    //Arrays and Var's
    let a = 0;
    let b = 100;
    let c = 50;
    let muted = [];
    let whited = [];
    let blacked = [];
    var bool = 0;
    var bool2 = 0;
    var bool3 = 0;
    var bool4 = 0;
    var whiteInterval1 = 300;
    var whiteInterval2 = 5000;
    var URL;

    //URL
    if(window.location.protocol == "https:"){
        URL = "https://drrr.com/room/?ajax=1&api=json";
    }else
    {
        URL = "http://drrr.com/room/?ajax=1&api=json";
    }




    //Script Container/Wrapper
    scriptDiv.className = "container";
    scriptDiv.style.width = "100%";
    scriptDiv.style.overflow = "hidden";
    scriptDiv.style.margin = "auto";
    scriptDiv.style.padding = "0px";
    scriptDiv.style.maxWidth = "1800px";
    scriptDiv.style.display = "none";
    //Script List
    scriptList.padding = "0px";
    scriptList.margin = "0px";
    //Script Button
    scriptButton.style = "position:relative; left:395px; top:-24px; transition: all 1s ease;";
    scriptButton.height = "auto";
    scriptButton.textContent = "SCRIPT";
    scriptButton.style.font = "400 12px Arial";
    scriptButton.style.fontStyle = "normal";
    scriptButton.style.lineHeight = "1";
    scriptButton.style.fontFamily = "Arial";
    scriptButton.style.padding = "5px 18px";
    scriptButton.style.color = "#969696";
    scriptButton.style.backgroundColor = "#4d4d4d";
    scriptButton.style.border = "1px solid #6b6b6b";
    scriptButton.style.borderRadius = "12px";
    //Box1 Blacklist
    scriptBox1.style.listStyle = "none";
    scriptBox1.style.cssFloat = "right";
    scriptBox1.style.width = "18%";
    scriptBox1.style.height = "420px";
    scriptBox1.style.marginTop = "0px";
    scriptBox1.style.marginBottom = "0px";
    scriptBox1.style.marginLeft = "10px";
    scriptBox1.style.marginRight = "10px";
    scriptBox1.style.backgroundColor = "#39393e";
    scriptBox1.style.border = "1px solid #616165";
    scriptBox1.style.borderRadius = "12px";
    //Box2 Whitelist
    scriptBox2.style.listStyle = "none";
    scriptBox2.style.cssFloat = "right";
    scriptBox2.style.width = "18%";
    scriptBox2.style.height = "420px";
    scriptBox2.style.marginTop = "0px";
    scriptBox2.style.marginBottom = "0px";
    scriptBox2.style.marginLeft = "10px";
    scriptBox2.style.marginRight = "10px";
    scriptBox2.style.backgroundColor = "#39393e";
    scriptBox2.style.border = "1px solid #616165";
    scriptBox2.style.borderRadius = "12px";
    //Box3 Mute
    scriptBox3.style.listStyle = "none";
    scriptBox3.style.cssFloat = "right";
    scriptBox3.style.width = "18%";
    scriptBox3.style.height = "420px";
    scriptBox3.style.marginTop = "0px";
    scriptBox3.style.marginBottom = "0px";
    scriptBox3.style.marginLeft = "10px";
    scriptBox3.style.marginRight = "10px";
    scriptBox3.style.backgroundColor = "#39393e";
    scriptBox3.style.border = "1px solid #616165";
    scriptBox3.style.borderRadius = "12px";
    //Box4 Custom Background
    scriptBox4.style.listStyle = "none";
    scriptBox4.style.cssFloat = "right";
    scriptBox4.style.width = "18%";
    scriptBox4.style.height = "420px";
    scriptBox4.style.marginTop = "0px";
    scriptBox4.style.marginBottom = "0px";
    scriptBox4.style.marginLeft = "10px";
    scriptBox4.style.marginRight = "10px";
    scriptBox4.style.backgroundColor = "#39393e";
    scriptBox4.style.border = "1px solid #616165";
    scriptBox4.style.borderRadius = "12px";
    /////////////////////////Blacklist///////////////////////////////
    //Blacklist Header
    blackHeader.type = "text";
    blackHeader.textContent = "Blacklist:";
    blackHeader.style.cssFloat = "left";
    blackHeader.style.marginTop = "4px";
    blackHeader.style.marginLeft = "10px";
    blackHeader.style.textDecoration = "none";
    //Blacklist Label
    blackName.type = "text";
    blackName.textContent = "Username:";
    blackName.style.font = "400 14px Arial";
    blackName.style.cssFloat = "left";
    blackName.style.marginLeft = "10px";
    //Blacklist Header Div
    blackDiv.className = "container";
    blackDiv.style.width = "100%";
    blackDiv.style.overflow = "hidden";
    blackDiv.style.margin = "20px auto";
    //Blacklist Input
    blackInput.style.width = "60%";
    blackInput.style.cssFloat = "right";
    blackInput.style.font = "400 14px Arial";
    blackInput.style.padding = "5px 0px";
    blackInput.style.backgroundColor = "#39393e";
    blackInput.style.border = "1px solid #6b6b6b";
    blackInput.style.borderRadius = "5px";
    //BlackList Input Div
    blackDiv2.className = "container";
    blackDiv2.style.width = "100%";
    blackDiv2.style.overflow = "hidden";
    blackDiv2.style.margin = "20px auto";
    //Blacklist Add/Remove Div
    blackDiv3.className = "container";
    blackDiv3.style.width = "100%";
    blackDiv3.style.overflow = "hidden";
    blackDiv3.style.margin = "20px auto";
    //Blacklist Blacklisted Users Div
    blackDiv4.className = "container";
    blackDiv4.style.width = "100%";
    blackDiv4.style.overflow = "hidden";
    blackDiv4.style.margin = "20px auto";
    //Blacklist Textarea Div
    blackDiv5.className = "container";
    blackDiv5.style.width = "100%";
    blackDiv5.style.overflow = "hidden";
    blackDiv5.style.margin = "-8px 0px 0px 14px";
    //Blacklist Add
    blackAdd.style.cssFloat = "right";
    blackAdd.textContent = "ADD";
    blackAdd.style.padding = "5px 10px";
    blackAdd.style.font = "400 12px Arial";
    blackAdd.style.border = "1px solid #6b6b6b";
    blackAdd.style.borderRadius = "12px";
    //Blacklist Remove
    blackRemove.style.cssFloat = "right";
    blackRemove.textContent = "REMOVE";
    blackRemove.style.padding = "5px 10px";
    blackRemove.style.font = "400 12px Arial";
    blackRemove.style.border = "1px solid #6b6b6b";
    blackRemove.style.borderRadius = "12px";
    //Blacklisted Users Label
    blackedUsers.type = "text";
    blackedUsers.textContent = "Blacklisted Users:";
    blackedUsers.style.cssFloat = "left";
    blackedUsers.style.marginTop = "4px";
    blackedUsers.style.marginLeft = "10px";
    //Blacklist "On/Off" Button
    blackOn.style.cssFloat = "right";
    blackOn.textContent = "ON/OFF";
    blackOn.style.padding = "5px 10px";
    blackOn.style.font = "400 12px Arial";
    blackOn.style.border = "1px solid #6b6b6b";
    blackOn.style.borderRadius = "12px";
    //Blacklist Textarea
    blackText.rows = "9";
    blackText.cols = "30";
    blackText.readOnly = "true";
    blackText.style.backgroundColor = "#39393e";
    blackText.style.border = "1px solid #6b6b6b";
    blackText.style.borderRadius = "5px";
    blackText.style.resize= "none";
    blackText.textContent = blacked;
    /////////////////////////Whitelist///////////////////////////////
    //Whitelist Header
    whiteHeader.type = "text";
    whiteHeader.textContent = "Whitelist:";
    whiteHeader.style.cssFloat = "left";
    whiteHeader.style.marginTop = "4px";
    whiteHeader.style.marginLeft = "10px";
    whiteHeader.style.textDecoration = "none";
    //Whitelist Label
    whiteName.type = "text";
    whiteName.textContent = "Username:";
    whiteName.style.font = "400 14px Arial";
    whiteName.style.cssFloat = "left";
    whiteName.style.marginTop = "4px";
    whiteName.style.marginLeft = "10px";
    //Whitelist Input
    whiteInput.style.width = "60%";
    whiteInput.style.cssFloat = "right";
    whiteInput.style.font = "400 14px Arial";
    whiteInput.style.padding = "5px 0px";
    whiteInput.style.backgroundColor = "#39393e";
    whiteInput.style.border = "1px solid #6b6b6b";
    whiteInput.style.borderRadius = "5px";
    //Whitelist Header Div
    whiteDiv.className = "container";
    whiteDiv.style.width = "100%";
    whiteDiv.style.overflow = "hidden";
    whiteDiv.style.margin = "20px auto";
    //Whitelist Input Div
    whiteDiv2.className = "container";
    whiteDiv2.style.width = "100%";
    whiteDiv2.style.overflow = "hidden";
    whiteDiv2.style.margin = "20px auto";
    //Whitelist Add/Remove Div
    whiteDiv3.className = "container";
    whiteDiv3.style.width = "100%";
    whiteDiv3.style.overflow = "hidden";
    whiteDiv3.style.margin = "20px auto";
    //Whitelisted Users Div
    whiteDiv4.className = "container";
    whiteDiv4.style.width = "100%";
    whiteDiv4.style.overflow = "hidden";
    whiteDiv4.style.margin = "20px auto";
    //Whitelist Textarea Div
    whiteDiv5.className = "container";
    whiteDiv5.style.width = "100%";
    whiteDiv5.style.overflow = "hidden";
    whiteDiv5.style.margin = "-25px 0px 0px 14px";
    //Whitelist Add
    whiteAdd.style.cssFloat = "right";
    whiteAdd.textContent = "ADD";
    whiteAdd.style.padding = "5px 10px";
    whiteAdd.style.font = "400 12px Arial";
    whiteAdd.style.border = "1px solid #6b6b6b";
    whiteAdd.style.borderRadius = "12px";
    //Whitelist Remove
    whiteRemove.style.cssFloat = "right";
    whiteRemove.textContent = "REMOVE";
    whiteRemove.style.padding = "5px 10px";
    whiteRemove.style.font = "400 12px Arial";
    whiteRemove.style.border = "1px solid #6b6b6b";
    whiteRemove.style.borderRadius = "12px";
    //Whitelist Add Entire Room
    whiteaddRoom.style.cssFloat = "right";
    whiteaddRoom.textContent = "ENTIRE ROOM";
    whiteaddRoom.style.padding = "5px 10px";
    whiteaddRoom.style.font = "400 12px Arial";;
    whiteaddRoom.style.border = "1px solid #6b6b6b";
    whiteaddRoom.style.borderRadius = "12px";
    //Whitelist RAGEMODE
    whiteRage.style.cssFloat = "right";
    whiteRage.textContent = "RAGEMODE";
    whiteRage.style.padding = "5px 10px";
    whiteRage.style.font = "400 12px Arial";
    whiteRage.style.border = "1px solid #6b6b6b";
    whiteRage.style.borderRadius = "12px";
    //Whitelist Clearlist
    whiteClear.style.cssFloat = "right";
    whiteClear.textContent = "CLEAR";
    whiteClear.style.padding = "5px 10px";
    whiteClear.style.font = "400 12px Arial";
    whiteClear.style.border = "1px solid #6b6b6b";
    whiteClear.style.borderRadius = "12px";
    //Whitelist Users Label
    whitedUsers.type = "text";
    whitedUsers.textContent = "Whitelisted Users:";
    whitedUsers.style.cssFloat = "left";
    whitedUsers.style.marginTop = "-5px";
    whitedUsers.style.marginLeft = "10px";
    //Whitelist On
    whiteOn.style.cssFloat = "right";
    whiteOn.textContent = "ON/OFF";
    whiteOn.style.padding = "5px 10px";
    whiteOn.style.font = "400 12px Arial";
    whiteOn.style.border = "1px solid #6b6b6b";
    whiteOn.style.borderRadius = "12px";
    //Whitelist Textarea
    whiteText.rows = "9";
    whiteText.cols = "30";
    whiteText.readOnly = "true";
    whiteText.style.backgroundColor = "#39393e";
    whiteText.style.border = "1px solid #6b6b6b";
    whiteText.style.borderRadius = "5px";
    whiteText.style.resize= "none";
    whiteText.textContent = whited;
    /////////////////////////Mute///////////////////////////////
    //Mutelist Header
    muteHeader.type = "text";
    muteHeader.textContent = "Mute:";
    muteHeader.style.cssFloat = "left";
    muteHeader.style.marginTop = "4px";
    muteHeader.style.marginLeft = "10px";
    muteHeader.style.textDecoration = "none";
    //Mutelist Label
    muteName.type = "text";
    muteName.textContent = "Username:";
    muteName.style.font = "400 14px Arial";
    muteName.style.cssFloat = "left";
    muteName.style.marginTop = "4px";
    muteName.style.marginLeft = "10px";
    //Mutelist Input
    muteInput.style.width = "60%";
    muteInput.style.cssFloat = "right";
    muteInput.style.font = "400 14px Arial";
    muteInput.style.padding = "5px 0px";
    muteInput.style.backgroundColor = "#39393e";
    muteInput.style.border = "1px solid #6b6b6b";
    muteInput.style.borderRadius = "5px";
    //Mutelist Header Div
    muteDiv.className = "container";
    muteDiv.style.width = "100%";
    muteDiv.style.overflow = "hidden";
    muteDiv.style.margin = "20px auto";
    //MuteList Input Div
    muteDiv2.className = "container";
    muteDiv2.style.width = "100%";
    muteDiv2.style.overflow = "hidden";
    muteDiv2.style.margin = "20px auto";
    //Mutelist Add/Remove Div
    muteDiv3.className = "container";
    muteDiv3.style.width = "100%";
    muteDiv3.style.overflow = "hidden";
    muteDiv3.style.margin = "20px auto";
    //Mutelisted Users Div
    muteDiv4.className = "container";
    muteDiv4.style.width = "100%";
    muteDiv4.style.overflow = "hidden";
    muteDiv4.style.margin = "20px auto";
    //Mutelist Textarea Div
    muteDiv5.className = "container";
    muteDiv5.style.width = "100%";
    muteDiv5.style.overflow = "hidden";
    muteDiv5.style.margin = "-8px 0px 0px 14px";
    //Mutelist Add Button
    muteAdd.style.cssFloat = "right";
    muteAdd.textContent = "ADD";
    muteAdd.style.padding = "5px 10px";
    muteAdd.style.font = "400 12px Arial";
    muteAdd.style.border = "1px solid #6b6b6b";
    muteAdd.style.borderRadius = "12px";
    //Mutelist Remove Button
    muteRemove.style.cssFloat = "right";
    muteRemove.textContent = "REMOVE";
    muteRemove.style.padding = "5px 10px";
    muteRemove.style.font = "400 12px Arial";
    muteRemove.style.border = "1px solid #6b6b6b";
    muteRemove.style.borderRadius = "12px";
    //Mutelist Users Label
    mutedUsers.type = "text";
    mutedUsers.textContent = "Muted Users:";
    mutedUsers.style.color = "#ffe419";
    mutedUsers.style.cssFloat = "left";
    mutedUsers.style.marginTop = "4px";
    mutedUsers.style.marginLeft = "10px";
    //Mutelist "On/Off" Button
    muteOn.style.cssFloat = "right";
    muteOn.textContent = "ON/OFF";
    muteOn.style.padding = "5px 10px";
    muteOn.style.font = "400 12px Arial";
    muteOn.style.border = "1px solid #6b6b6b";
    muteOn.style.borderRadius = "12px";
    //Mutelist Textarea
    muteText.rows = "9";
    muteText.cols = "30";
    muteText.readOnly = "true";
    muteText.style.backgroundColor = "#39393e";
    muteText.style.border = "1px solid #6b6b6b";
    muteText.style.borderRadius = "5px";
    muteText.style.resize= "none";
    muteText.textContent = muted;
    /////////////////////////Custom Background///////////////////////////////
    //Custom Background Header
    URLHeader.type = "text";
    URLHeader.textContent = "Custom Background:";
    URLHeader.style.cssFloat = "left";
    URLHeader.style.marginTop = "4px";
    URLHeader.style.marginLeft = "10px";
    URLHeader.style.textDecoration = "none";
    //Custom Background Label
    URLName.type = "text";
    URLName.textContent = "URL:";
    URLName.style.font = "400 14px Arial";
    URLName.style.cssFloat = "left";
    URLName.style.marginTop = "4px";
    URLName.style.marginLeft = "10px";
    //Custom Background Input
    URLInput.style.width = "77%";
    URLInput.style.cssFloat = "right";
    URLInput.style.font = "400 14px Arial";
    URLInput.style.border = "1px solid #6b6b6b";
    URLInput.style.padding = "5px 0px";
    URLInput.style.borderRadius = "5px";
    //Custom Background "Set" Button
    URLSet.style.cssFloat = "right";
    URLSet.style.padding = "5px 18px";
    URLSet.textContent = "SET";
    URLSet.style.font = "400 12px Arial";
    URLSet.style.border = "1px solid #6b6b6b";
    URLSet.style.borderRadius = "12px";
    //Custom Background Header Div
    URLDiv.className = "container";
    URLDiv.style.width = "100%";
    URLDiv.style.overflow = "hidden";
    URLDiv.style.margin = "20px auto";
    //Custom Background Input Div
    URLDiv2.className = "container";
    URLDiv2.style.font = "400 14px Arial";
    URLDiv2.style.width = "100%";
    URLDiv2.style.overflow = "hidden";
    URLDiv2.style.margin = "20px auto";
    //URL Button Div
    URLDiv3.className = "container";
    URLDiv3.style.width = "100%";
    URLDiv3.style.overflow = "hidden";
    URLDiv3.style.margin = "20px auto";


    wrappi[0].appendChild(scriptButton);
    boxWrapper[0].appendChild(scriptDiv);
    scriptDiv.appendChild(scriptBox1);
    scriptDiv.appendChild(scriptBox2);
    scriptDiv.appendChild(scriptBox3);
    scriptDiv.appendChild(scriptBox4);
    //Blacklist
    scriptBox1.appendChild(blackDiv);
    scriptBox1.appendChild(blackDiv2);
    scriptBox1.appendChild(blackDiv3);
    scriptBox1.appendChild(blackDiv4);
    scriptBox1.appendChild(blackDiv5);
    blackDiv.appendChild(blackHeader);
    blackDiv2.appendChild(blackInput);
    blackDiv2.appendChild(blackName);
    blackDiv3.appendChild(blackRemove);
    blackDiv3.appendChild(blackAdd);
    blackDiv3.appendChild(blackOn);
    blackDiv4.appendChild(blackedUsers);
    blackDiv5.appendChild(blackText);
    //Whitelist
    scriptBox2.appendChild(whiteDiv);
    scriptBox2.appendChild(whiteDiv2);
    scriptBox2.appendChild(whiteDiv3);
    scriptBox2.appendChild(whiteDiv4);
    scriptBox2.appendChild(whiteDiv5);
    whiteDiv.appendChild(whiteHeader);
    whiteDiv2.appendChild(whiteInput);
    whiteDiv2.appendChild(whiteName);
    whiteDiv3.appendChild(whiteRemove);
    whiteDiv3.appendChild(whiteAdd);
    whiteDiv3.appendChild(whiteClear);
    whiteDiv3.appendChild(whiteaddRoom);
    whiteDiv3.appendChild(whiteRage);
    whiteDiv3.appendChild(whiteOn);
    whiteDiv4.appendChild(whitedUsers);
    whiteDiv5.appendChild(whiteText);
    //Mute
    scriptBox3.appendChild(muteDiv);
    scriptBox3.appendChild(muteDiv2);
    scriptBox3.appendChild(muteDiv3);
    scriptBox3.appendChild(muteDiv4);
    scriptBox3.appendChild(muteDiv5);
    muteDiv.appendChild(muteHeader);
    muteDiv2.appendChild(muteInput);
    muteDiv2.appendChild(muteName);
    muteDiv3.appendChild(muteRemove);
    muteDiv3.appendChild(muteAdd);
    muteDiv3.appendChild(muteOn);
    muteDiv4.appendChild(mutedUsers);
    muteDiv5.appendChild(muteText);
    //Custom-Background
    scriptBox4.appendChild(URLDiv);
    scriptBox4.appendChild(URLDiv2);
    scriptBox4.appendChild(URLDiv3);
    URLDiv.appendChild(URLHeader);
    URLDiv2.appendChild(URLInput);
    URLDiv2.appendChild(URLName);
    URLDiv3.appendChild(URLSet);




    setInterval(function(){
    if(body1.className != "game-room--night" && body1.className != "game-room--night modal-open"){
scriptButton.height = "auto";
scriptButton.style.padding = "5px 18px";
scriptButton.style.color = "#777";
scriptButton.style.backgroundColor = "#fcfccc";
scriptButton.style.border = "1px solid #ccc";
scriptButton.style.borderRadius = "12px";
scriptBox1.style.backgroundColor = "#fbfbfb";
scriptBox1.style.border = "1px solid #ccc";
scriptBox2.style.backgroundColor = "#fbfbfb";
scriptBox2.style.border = "1px solid #ccc";
scriptBox3.style.backgroundColor = "#fbfbfb";
scriptBox3.style.border = "1px solid #ccc";
scriptBox4.style.backgroundColor = "#fbfbfb";
scriptBox4.style.border = "1px solid #ccc";
//Morning blacklist color
blackHeader.style.color = "#0a0a0a";
blackName.style.color = "#555";
blackInput.style.backgroundColor = "#fff";
blackInput.style.color = "#555";
blackInput.style.border = "1px solid #ccc";
blackAdd.style.color = "#777";
blackAdd.style.backgroundColor = "#fcfccc";
blackAdd.style.border = "1px solid #ccc";
blackRemove.style.color = "#777";
blackRemove.style.backgroundColor = "#fcfccc";
blackRemove.style.border = "1px solid #ccc";
blackedUsers.style.color = "#777";
blackOn.style.color = "#777";
blackOn.style.backgroundColor = "#fcfccc";
blackOn.style.border = "1px solid #ccc";
blackText.style.backgroundColor = "#fff";
blackText.style.color = "#777";
blackText.style.border = "1px solid #ccc";
//Morning whitelist color
whiteHeader.style.color = "#0a0a0a";
whiteName.style.color = "#555";
whiteInput.style.backgroundColor = "#fff";
whiteInput.style.color = "#555";
whiteInput.style.border = "1px solid #ccc";
whiteAdd.style.color = "#777";
whiteAdd.style.backgroundColor = "#fcfccc";
whiteAdd.style.border = "1px solid #ccc";
whiteRemove.style.color = "#777";
whiteRemove.style.backgroundColor = "#fcfccc";
whiteRemove.style.border = "1px solid #ccc";
whiteaddRoom.style.color = "#777";
whiteaddRoom.style.backgroundColor = "#fcfccc";
whiteaddRoom.style.border = "1px solid #ccc";
whiteRage.style.color = "#777";
whiteRage.style.backgroundColor = "#fcfccc";
whiteRage.style.border = "1px solid #ccc";
whiteClear.style.color = "#777";
whiteClear.style.backgroundColor = "#fcfccc";
whiteClear.style.border = "1px solid #ccc";
whitedUsers.style.color = "#777";
whiteOn.style.color = "#777";
whiteOn.style.backgroundColor = "#fcfccc";
whiteOn.style.border = "1px solid #ccc";
whiteText.style.backgroundColor = "#fff";
whiteText.style.color = "#777";
whiteText.style.border = "1px solid #ccc";
//Morning mute color
muteHeader.style.color = "#0a0a0a";
muteName.style.color = "#555";
muteInput.style.backgroundColor = "#fff";
muteInput.style.color = "#555";
muteInput.style.border = "1px solid #ccc";
muteAdd.style.backgroundColor = "#fcfccc";
muteAdd.style.color = "#777";
muteAdd.style.border = "1px solid #ccc";
muteRemove.style.color = "#777";
muteRemove.style.backgroundColor = "#fcfccc";
muteRemove.style.border = "1px solid #ccc";
mutedUsers.style.color = "#777";
muteOn.style.color = "#777";
muteOn.style.backgroundColor = "#fcfccc";
muteOn.style.border = "1px solid #ccc";
muteText.style.backgroundColor = "#fff";
muteText.style.color = "#777";
muteText.style.border = "1px solid #ccc";
//Custom Background
URLName.style.color = "#555";
URLInput.style.backgroundColor = "#fff";
URLInput.style.color = "#555";
URLInput.style.border = "1px solid #ccc";
URLSet.style.color = "#777";
URLSet.style.backgroundColor = "#fcfccc";
URLSet.style.border = "1px solid #ccc";
    }
    else{
scriptButton.height = "auto";
scriptButton.style.padding = "5px 18px";
scriptButton.style.color = "#969696";
scriptButton.style.backgroundColor = "#4d4d4d";
scriptButton.style.border = "1px solid #6b6b6b";
scriptButton.style.borderRadius = "12px";
scriptBox1.style.backgroundColor = "#39393e";
scriptBox2.style.backgroundColor = "#39393e";
scriptBox3.style.backgroundColor = "#39393e";
scriptBox4.style.backgroundColor = "#39393e";
//Blacklist color
blackHeader.style.color = "#aaa";
blackName.style.color = "#969696";
blackInput.style.backgroundColor = "#39393e";
blackInput.style.color = "#fff";
blackAdd.style.color = "#969696";
blackAdd.style.backgroundColor = "#4d4d4d";
blackRemove.style.color = "#969696";
blackRemove.style.backgroundColor = "#4d4d4d";
blackedUsers.style.color = "#969696";
blackOn.style.color = "#969696";
blackOn.style.backgroundColor = "#4d4d4d";
blackText.style.color = "#969696";
blackText.style.backgroundColor = "#39393e";
//Whitelist color
whiteHeader.style.color = "#aaa";
whiteName.style.color = "#969696";
whiteInput.style.backgroundColor = "#39393e";
whiteInput.style.color = "#fff";
whiteAdd.style.color = "#969696";
whiteAdd.style.backgroundColor = "#4d4d4d";
whiteRemove.style.color = "#969696";
whiteRemove.style.backgroundColor = "#4d4d4d";
whiteaddRoom.style.color = "#969696";
whiteaddRoom.style.backgroundColor = "#4d4d4d";
whiteRage.style.color = "#969696";
whiteRage.style.backgroundColor = "#4d4d4d";
whiteClear.style.color = "#969696";
whiteClear.style.backgroundColor = "#4d4d4d";
whitedUsers.style.color = "#969696";
whiteOn.style.color = "#969696";
whiteOn.style.backgroundColor = "#4d4d4d";
whiteText.style.color = "#969696";
whiteText.style.backgroundColor = "#39393e";
//Mute color
muteHeader.style.color = "#aaa";
muteName.style.color = "#969696";
muteInput.style.backgroundColor = "#39393e";
muteInput.style.color = "#fff";
muteAdd.style.backgroundColor = "#4d4d4d";
muteAdd.style.color = "#969696";
muteRemove.style.color = "#969696";
muteRemove.style.backgroundColor = "#4d4d4d";
mutedUsers.style.color = "#969696";
muteOn.style.color = "#969696";
muteOn.style.backgroundColor = "#4d4d4d";
muteText.style.backgroundColor = "#39393e";
muteText.style.color = "#969696";
//Custom Background
URLName.style.color = "#969696";
URLInput.style.backgroundColor = "#39393e";
URLInput.style.color = "#fff";
URLSet.style.color = "#969696";
URLSet.style.backgroundColor = "#4d4d4d";
    }

}, 500);





    //////////////////////////Button Functions////////////////////////////////////


    scriptButton.addEventListener("click", function() {
        if (scriptDiv.style.display == "block") {
            scriptDiv.style.display = "none";
        } else {
            scriptDiv.style.display = "block";
        }
    }, false);



    //Rainbow-mode Button function
    /*li1.addEventListener("click", function() {
        let messageBox = document.getElementsByClassName("message_box_effect_wraper");
        let body = document.getElementById("body");
        if (bool == 0) {
            bool = 1;
        } else {
            bool = 0;
        }
        if (bool == 1) {
            alert("Rainbow-mode: On");
        }
        console.log(bool);
        var myInter = setInterval(function() {
            console.log("FUNCTION!!")
            let messageBox = document.getElementsByClassName("message_box_effect_wraper");
            let body = document.getElementById("body");
            messageBox[0].style.transition = "all 0s";
            messageBox[0].style.background = "hsl(" + a + "," + b + "%," + c + "%)";
            body.style.background = "hsl(" + a + "," + b + "%," + c + "%)";
            if (a == 360) {
                a = 0;
            }
            a++;
            if (bool == 0) {
                messageBox[0].style.background = "#fbfbfb"
                body.style.background = "#0a0a0a";
                clearInterval(myInter);
            }
        }, 30);
        if (bool == 0) {
            alert("Rainbow-mode: Off");
        }
    }, false);*/

    //Set URL Button
    URLSet.addEventListener("click", function() {
        let body = document.getElementById("body");
        body.style.background = "url('" + URLInput.value + "')";
        body.style.backgroundSize = "cover";
        body.style.backgroundAttachment = "fixed";
        body.style.backgroundPosition = "center center";
        body.style.backgroundRepeat = "repeat-y";



    }, false);

    //Input Mute (add)
    muteAdd.addEventListener("click", function() {

        muted.push(muteInput.value);
        for (let x = 0; x < muted.length; x++) {
            console.log(muted[x]);
        }
        muteText.textContent = muted + "\n";
    }, false);

    //Input White(add)
    whiteAdd.addEventListener("click", function() {

        whited.push(whiteInput.value);
        for (let x = 0; x < whited.length; x++) {
            console.log(whited[x]);
        }
        whiteText.textContent = whited + "\n";
    }, false);

    //Input Black (add)
    blackAdd.addEventListener("click", function() {

        blacked.push(blackInput.value);
        for (let x = 0; x < blacked.length; x++) {
            console.log(blacked[x]);
        }
        blackText.textContent = blacked + "\n";
    }, false);

    //Remove Mute
    muteRemove.addEventListener("click", function() {

        for (var i = muted.length - 1; i >= 0; i--) {
            if (muted[i] === muteInput.value) {
                muted.splice(i, 1);

            }
            muteText.textContent = muted + "\n";
        }
    }, false);

    //Remove White
    whiteRemove.addEventListener("click", function() {

        for (var i = whited.length - 1; i >= 0; i--) {
            if (whited[i] === whiteInput.value) {
                whited.splice(i, 1);

            }
            whiteText.textContent = whited + "\n";
        }
    }, false);

    //Remove Black
    blackRemove.addEventListener("click", function() {

        for (var i = blacked.length - 1; i >= 0; i--) {
            if (blacked[i] === blackInput.value) {
                blacked.splice(i, 1);

            }
            blackText.textContent = blacked + "\n";
        }
    }, false);


    //White Entire Room
    whiteaddRoom.addEventListener("click", function(){
        var xmlhttp = new XMLHttpRequest(),
        json;

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        ;
            json = JSON.parse(xmlhttp.responseText);
            console.log(json);
        }
    };
    xmlhttp.open('GET', URL , true);
    xmlhttp.send();

    setTimeout(function(){
    for (var x = 0; x < json.room.total; x++) {
        whited.push(json.room.users[x].name);

    }
    whiteText.textContent = whited + "\n";
    }, 300);

    }, false);
    //White Clearlist

    whiteClear.addEventListener("click", function(){
        whited = [];
        whiteText.textContent = whited + "\n";
    }, false);
    //Whitelist RAGEMODE

    whiteRage.addEventListener("click", function(){
    if(whiteInterval1 == 300 && whiteInterval2 == 5000){
        alert("Ragemode: On");
        whiteInterval1 = 20;
        whiteInterval2 = 150;
    }
    else{
        alert("Ragemode: Off");
        whiteInterval1 = 300;
        whiteInterval2 = 5000;
    }

    }, false);
    /////////////////////////Blacklist, Whitelist, Mute Calculations///////////////////////////////////////

    //Blacklist
    blackOn.addEventListener("click", function() {
        var xmlhttp = new XMLHttpRequest(),
            json;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                console.log('Working.');
                json = JSON.parse(xmlhttp.responseText);
                console.log(json);
            }
        };

        if (bool2 == 0) {
            bool2 = 1;
        } else {
            bool2 = 0;
        }
        if (bool2 == 1) {
            alert("Blacklist: On");
        }
        console.log(bool2);


        var myInter2 = setInterval(function() {
            xmlhttp.open('GET', URL , true);
            xmlhttp.send();

            setTimeout(function() {
                var user = [];
                var userID = [];

                for (var x = 0; x < json.room.total; x++) {
                    userID.push(json.room.users[x].id);
                    user.push(json.room.users[x].name);
                }

                for (var y = 0; y < user.length; y++) {
                    console.log("User Number " + (y + 1) + " : " + user[y]);
                    console.log("User ID Number " + (y + 1) + " : " + userID[y]);
                }


                for (let b = 0; b < blacked.length; b++) {
                    var arraycontain = (user.indexOf(blacked[b]) > -1);
                    if (arraycontain == true) {
                        console.log("ArrayContain equals: " + arraycontain + " || This user was found: " + blacked[b]);
                        console.log("At the index of: " + user.indexOf(blacked[b]));
                        console.log("UserID = " + userID[user.indexOf(blacked[b])]);



                        const data = 'report_and_ban_user=' + userID[user.indexOf(blacked[b])];

                        $.ajax({
                            type: 'POST',
                            url: URL,
                            data: data
                        });
                    } else {
                        console.log("ArrayContain equals: " + arraycontain);
                    }
                }
            }, 300);
            if (bool2 === 0) {
                console.log("Blacklist stopped.");
                clearInterval(myInter2);
            }
        }, 500); //Ajax Refresh interval

        if (bool2 === 0) {
            alert("Blacklist: Off");
        }
    }, false);

    //Whitelist

    whiteOn.addEventListener("click", function() {


        if (bool3 === 0) {
            bool3 = 1;
        } else {
            bool3 = 0;
        }
        if (bool3 === 1) {
            alert("Whitelist: On");
        }
        console.log(bool3);

        console.log("Whitelist.")
        var xmlhttp = new XMLHttpRequest(),
            json;

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                console.log('Working.');
                json = JSON.parse(xmlhttp.responseText);
                console.log(json);
            }
        };


        var myInter5 = setInterval(function() {
            xmlhttp.open('GET', URL , true);
            xmlhttp.send();




            setTimeout(function() {
                var user = [];
                var userID = [];

                for (var x = 0; x < json.room.total; x++) {
                    userID.push(json.room.users[x].id);
                    user.push(json.room.users[x].name);
                }

                for (var y = 0; y < user.length; y++) {
                    console.log("User Number " + (y + 1) + " : " + user[y]);
                    console.log("User ID Number " + (y + 1) + " : " + userID[y]);
                }


                for (let b = 0; b < user.length; b++) {
                    var arraycontain = (whited.indexOf(user[b]) > -1);
                    if (arraycontain == true) {
                        console.log("ArrayContain equals: " + arraycontain + " || This user was found in whitelist: " + user[b]);
                        console.log("UserID: " + userID[b]);

                    } else {
                        console.log("ArrayContain equals: " + arraycontain + " || This user was not found in whitelist: " + user[b]);
                        console.log("UserID: " + userID[b]);

                        const data = 'report_and_ban_user=' + userID[b];

                        $.ajax({
                            type: 'POST',
                            url: URL,
                            data: data
                        });


                    }
                }




            },whiteInterval1);

            if (bool3 === 0) {
                console.log("Whitelist stopped.")
                clearInterval(myInter5);
            }

        }, whiteInterval2);

        if (bool3 === 0) {
            alert("Whitelist: Off");
        }

    }, false);

    //Mute lagless
    muteOn.addEventListener("click", function() {

        if (bool4 == 0) {
            bool4 = 1;
        } else {
            bool4 = 0;
        }
        console.log(bool4);

        if (bool4 === 1) {
            alert("Mute: On");
        }

        var myInter5 = setInterval(function() {

            var xmlhttp = new XMLHttpRequest(),
                json;

            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    json = JSON.parse(xmlhttp.responseText);
                    console.log(json);
                }
            };

            xmlhttp.open('GET', URL , true);
            xmlhttp.send();

            var myInter6 = setInterval(function() {
                console.log("Muting.")
                for (let i = 0; i < json.room.talks.length; i++) {


                    if (json.room.talks[i].type == "message") {
                        //console.log(json.room.talks[i].from.name);
                        var arraycontain2 = (muted.indexOf(json.room.talks[i].from.name) > -1);
                        console.log(arraycontain2);
                        if (arraycontain2 == true) {
                            let ID = json.room.talks[i].id;

                            let message = document.getElementById(ID);

                            if (message == null) {

                            } else {
                                message.parentNode.removeChild(message);
                            }
                        }
                    } else if (json.room.talks[i].type == "join" || json.room.talks[i].type == "leave") {

                    }
                    if (i == 34) {
                        break;
                    }
                }

                if (bool4 === 0) {
                    console.log("Mute stopped.")
                    clearInterval(myInter5);
                    clearInterval(myInter6);
                }

            }, 1000);
        }, 1000);
        if (bool4 === 0) {
            alert("Mute: Off");
        }


    }, false);

    //Youtube Video support

    setInterval(function(){

        var xmlhttp = new XMLHttpRequest(),
            json;


        var substring = "youtube";






        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                json = JSON.parse(xmlhttp.responseText);
                console.log(json);
            }
        };

        xmlhttp.open('GET', URL, true);
        xmlhttp.send();


        setTimeout(function(){
        for (let i = 0; i < json.room.talks.length; i++) {


            if (json.room.talks[i].type == "message") {


                if(json.room.talks[i].url != undefined){

                var YTURL = json.room.talks[i].url;
                var UrlString = String(YTURL);
                if(UrlString.includes(substring)){
                var iFrame = document.createElement("iFrame");
                var frameDiv = document.createElement("div");
                let msg;
                let msgChild1;
                let msgChild2;
                let msgChild3;

               var meow = UrlString.replace("watch?v=", "embed/");
               iFrame.style.width = "560px";
               iFrame.style.height = "315px";
               iFrame.style.border = "2px solid black";
               iFrame.style.borderRadius = "5px";
               iFrame.src =  meow;



                 msg = document.getElementById(json.room.talks[i].id);
                 msgChild1 = msg.children[1];
                 msgChild2 = msgChild1.children[0];
                 msgChild3 = msgChild2.children[1];

                 if(msgChild3.className != "body select-text MEOW"){
                msgChild3.classList.add('MEOW');
                msgChild3.appendChild(frameDiv);
                frameDiv.appendChild(iFrame);
                 }


            }


            }


            } else if (json.room.talks[i].type == "join" || json.room.talks[i].type == "leave") {



            }

        }

    }, 300);
}, 1000);


}, false);
