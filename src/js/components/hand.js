import handSvg from '../../svg/hand.svg';
import { gsap } from "gsap";
import '../../styles/components/hand.scss';
import { CustomEase } from "gsap/CustomEase";

// const jquery = require('jquery');
// import * as $ from 'jquery'


document.addEventListener('DOMContentLoaded', function () {

    // $('#hand span').each(function () {
    //     $(this).append(handSvg);
    // });


    gsap.set(".circlePalm", {
        transformOrigin: "center center",
        scale: 1.14
    });

    theHand.addEventListener('mouseenter', function () {
        gsap.to(".circlePalm", {
            duration: 0.3,
            scale: 4,

            ease:
                CustomEase.create("custom", "M0,0,C0.083,0.294,0.061,1.077,0.438,1.136,0.736,1.182,0.826,1,1,1")
        });
        gsap.to("#FingersPalm", {
            duration: 0.1,
        });

        gsap.to("#theHand", {
            duration: 0.5,
            y: -4,
            ease:
                CustomEase.create("custom", "M0,0,C0.083,0.294,0.061,1.077,0.438,1.136,0.736,1.182,0.826,1,1,1")
        });


    });

    theHand.addEventListener('mouseleave', function () {
        gsap.to(".circlePalm", {
            duration: 0.1,
            scale: 1.1,

        });
        gsap.to("#FingersPalm", {
            duration: 0.1,
        });

        gsap.to("#theHand", {
            duration: 0.3,
            y: 0,
            ease:
                CustomEase.create("custom", "M0,0,C0.083,0.294,0.061,1.077,0.438,1.136,0.736,1.182,0.826,1,1,1")
        });

    });





}, false);