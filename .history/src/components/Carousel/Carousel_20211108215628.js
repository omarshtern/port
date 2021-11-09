import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

export default function Carousel() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    // find all s3 names, put them in nodelist
    const s3names = document.querySelectorAll(".s3name");

    // convert nodelist to Array
    const s3namesArray = Array.from(s3names);

    shuffle(s3namesArray);

    // Set their ids
    for (let i = 0; i < s3namesArray.length; i++) {
      s3namesArray[i].id = "s3name-" + i;
      s3namesArray[i].style.opacity = 0;
    }

    // find all images, put them in node-list

    // The american flag
    gsap.to("#s2d0", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#box1",
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });

    // The text in section 2
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#box2",
        scrub: true,
        start: "-=300",
        end: "bottom top",
      },
    });

    // tl.to('#s2d1', {autoAlpha: 1});
    // tl.to('#s2d1', {autoAlpha: 0, delay: 1});
    // tl.to('#s2d2', {autoAlpha: 1});
    // tl.to('#s2d2', {autoAlpha: 0, delay: 1});
    // tl.to('#s2d3', {autoAlpha: 1});
    // tl.to('#s2d3', {autoAlpha: 0, delay: 1});
    // tl.to('#s2d4', {autoAlpha: 1});
    // tl.to('#s2d4', {autoAlpha: 0, delay: 1});
    tl.to("#s2d5", { autoAlpha: 1 });
    tl.to("#s2d5", { autoAlpha: 0 }).to("#box2", {
      backgroundColor: "#f6f6f6",
    });
    // tl.to("#box2", {
    //     backgroundColor: "#f6f6f6"
    // })
    // countless lives
    gsap.to("#s3d1", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#box3",
        scrub: true,
        start: "top center",
        end: "+=500",
      },
    });

    // The list of names timeline
    const tlNames = gsap.timeline({
      scrollTrigger: {
        trigger: "#box3",
        scrub: true,
        start: "+=250",
        end: "bottom bottom",
        pin: true,
      },
    });

    tlNames.set("#s3names", { display: "visible" });
    // add all names from array into timeline
    for (let i = 0; i < s3names.length; i++) {
      tlNames.to(s3namesArray[i], { autoAlpha: 1 });
    }

    // hide both at the end
    gsap.to(["#s3d1", "#s3names"], {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: "#box4",
        scrub: true,
        start: "top top",
        end: "+=500",
      },
    });
  });
  return (
    <div style={{ zIndex: 10000 }}>
      <>
        {/*</div>*/}
        <div id="box2">
          {/*<div id="s2d0"/>*/}
          {/*<div id="s2d1" className="s2">LINE 1</div>*/}
          {/*<div id="s2d2" className="s2">LINE 2</div>*/}
          {/*<div id="s2d3" className="s2">LINE 3</div>*/}
          {/*<div id="s2d4" className="s2">LINE 4</div>*/}
          <div id="s2d5" className="s2">
            <h1 style={{ top: 0, left: 0 }}>Belief</h1>
            Do not show lethargy or negligence in giving alms and charity till
            your last breath.
            <h4>Muhammad, upon him be peace</h4>
          </div>
        </div>

        <div id="box3">
          <div id="s3names">
            <span className="s3name">kindness</span>
            <span className="s3name">leadership</span>
            <span className="s3name">EZELL FORD</span>
            <span className="s3name">DANTE PARKER</span>
            <span className="s3name">MICHELLE CUSSEAUX</span>
            <span className="s3name">LAQUAN MCDONALD</span>
            <span className="s3name">TANISHA ANDERSON</span>
            <span className="s3name">AKAI GURLEY</span>
            <span className="s3name">TAMIR RICE</span>
            <span className="s3name">RUMAIN BRISBON</span>
            <span className="s3name">JERAME REID</span>
            <span className="s3name">GEORGE MANN</span>
            <span className="s3name">MATTHEW AJIBADE</span>
            <span className="s3name">FRANK SMART</span>
            <span className="s3name">NATASHA MCKENNA</span>
            <span className="s3name">TONY ROBINSON</span>
            <span className="s3name">ANTHONY HILL</span>
            <span className="s3name">ERIC GARNER</span>
            <span className="s3name">MYA HALL</span>
            <span className="s3name">PHILLIP WHITE</span>
            <span className="s3name">ERIC HARRIS</span>
            <span className="s3name">WALTER SCOTT</span>
            <span className="s3name">WILLIAM CHAPMAN II</span>
            <span className="s3name">BREONNA TAYLOR</span>
            <span className="s3name">ALEXIA CHRISTIAN</span>
            <span className="s3name">BRENDON GLENN</span>
            <span className="s3name">VICTOR MANUEL LAROSA</span>
            <span className="s3name">JONATHAN SANDERS</span>
            <span className="s3name">FREDDIE GRAY</span>
            <span className="s3name">JOSEPH MANN</span>
            <span className="s3name">SALVADO ELLSWOOD</span>
            <span className="s3name">SANDRA BLAND</span>
            <span className="s3name">ALBERT JOSEPH DAVIS</span>
            <span className="s3name">DARRIUS STEWART</span>
            <span className="s3name">BILLY RAY DAVIS</span>
            <span className="s3name">SAMUEL DUBOSE</span>
            <span className="s3name">MICHAEL SABBIE</span>
            <span className="s3name">BRIAN KEITH DAY</span>
            <span className="s3name">CHRISTIAN TAYLOR</span>
            <span className="s3name">TROY ROBINSON</span>
            <span className="s3name">ASSHAMS PHAROAH MANLEY</span>
            <span className="s3name">FELIX KUMI</span>
            <span className="s3name">KEITH HARRISON MCLEOD</span>
            <span className="s3name">JUNIOR PROSPER</span>
            <span className="s3name">LAMONTEZ JONES</span>
            <span className="s3name">PATERSON BROWN</span>
            <span className="s3name">DOMINIC HUTCHINSON</span>
            <span className="s3name">ANTHONY ASHFORD</span>
            <span className="s3name">ALONZO SMITH</span>
            <span className="s3name">TYREE CRAWFORD</span>
            <span className="s3name">INDIA KAGER</span>
            <span className="s3name">LA’VANTE BIGGS</span>
            <span className="s3name">MICHAEL LEE MARSHALL</span>
            <span className="s3name">JAMAR CLARK</span>
            <span className="s3name">RICHARD PERKINS</span>
            <span className="s3name">NATHANIEL HARRIS PICKETT</span>
            <span className="s3name">BENNI LEE TIGNOR</span>
            <span className="s3name">MIGUEL ESPINAL</span>
            <span className="s3name">MICHAEL NOEL</span>
            <span className="s3name">KEVIN MATTHEWS</span>
            <span className="s3name">BETTIE JONES</span>
            <span className="s3name">QUINTONIO LEGRIER</span>
            <span className="s3name">KEITH CHILDRESS JR.</span>
            <span className="s3name">JANET WILSON</span>
            <span className="s3name">RANDY NELSON</span>
            <span className="s3name">ANTRONIE SCOTT</span>
            <span className="s3name">WENDELL CELESTINE</span>
            <span className="s3name">DAVID JOSEPH</span>
            <span className="s3name">CALIN ROQUEMORE</span>
            <span className="s3name">DYZHAWN PERKINS</span>
            <span className="s3name">CHRISTOPHER DAVIS</span>
            <span className="s3name">MARCO LOUD</span>
            <span className="s3name">PETER GAINES</span>
            <span className="s3name">TORREY ROBINSON</span>
          </div>
        </div>
        <div id="box4"></div>
      </>
    </div>
  );
}
