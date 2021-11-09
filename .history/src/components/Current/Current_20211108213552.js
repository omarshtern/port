import React, { useEffect } from "react";
import { Wrapper, ContainerText, ContainerDesc } from "./index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index";

export default function Current() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 700px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#portfolio-wrapper",
            scrub: true,
            start: "top top",
            pin: true,
          },
        });
        tl.fromTo(
          "#portfolio-desc",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
          .to("#portfolio-text", {
            x: -450,
          })
          .to("#portfolio-desc", {
            y: -350,
          })
          .to("#portfolio-wrapper", {
            backgroundColor: "#f6f6f6",
          });
      },
    });
    ScrollTrigger.matchMedia({
      "(max-width: 699px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#portfolio-wrapper",
            scrub: true,
            start: "top top",
            pin: true,
          },
        });
        tl.fromTo(
          "#portfolio-desc",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
          }
        )
          .to("#portfolio-text", {
            x: -350,
          })
          .to("#portfolio-desc", {
            y: 250,
          })
          .to("#portfolio-wrapper", {
            backgroundColor: "#f6f6f6",
          });
      },
    });
  });
  return (
    <div>
      <>
        <Wrapper id="portfolio-wrapper">
          <ContainerText id="portfolio-text">Technologies</ContainerText>
          <ContainerDesc id="portfolio-desc">
            I have learned Front-end both from study-centre and Yotube, i am mostly
            self-thought developer
          </ContainerDesc>
        </Wrapper>
      </>
    </div>
  );
}
