// Index




// CSS
import '../styles/index.scss';
// JS
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { CustomEase } from "gsap/CustomEase";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// Register GreenSock Plugins
gsap.registerPlugin(Draggable, CustomEase);





// SVGs
// import handSvg from '../svg/hand.svg';
import hand from './components/hand';




// Components
// import chatSmile from './components/bubble';





// Index

// 





// Draggable Elements
// Draggable.create(".limeGreen, .gubaBrand", {
// 	type: "x,y",
// 	edgeResistance: 0.65,
// 	throwProps: true,
// 	allowEventDefault: true,
// 	bounds: "#jerseyShore",
// 	onDrag: function () {
// 		$('.limeGreen').addClass("dragging");
// 	},
// 	onDragEnd: function () {
// 		$('.limeGreen').removeClass("dragging");
// 	},
// });

