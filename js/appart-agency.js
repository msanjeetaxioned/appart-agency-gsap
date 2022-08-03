gsap.registerPlugin(ScrollTrigger);

const body = document.querySelector("body");
const fourCirclesContainer = body.querySelector(".four-circles-animation-container");
const fourCirclesInner = fourCirclesContainer.querySelector(".four-circles-animation-inner");

const animation1Circle1 = fourCirclesContainer.querySelector(".circle-1");
const animation1Circle2 = fourCirclesContainer.querySelector(".circle-2");
const animation1Circle3 = fourCirclesContainer.querySelector(".circle-3");
const animation1Circle4 = fourCirclesContainer.querySelector(".circle-4");

const fourCirclesContainerWidth = fourCirclesContainer.offsetWidth;
const fourCirclesContainerHeight = fourCirclesContainer.offsetHeight;

const fourCirclesAnimationHandler = (e) => {
    const timer = setTimeout(() => {
        clearTimeout(timer);
        const clientX = e.clientX;
        const clientY = e.clientY - 30;

        animation1Circle1.style.top = clientY / fourCirclesContainerHeight / 2 * 100 + "%";
        animation1Circle1.style.left = clientX / fourCirclesContainerWidth / 2 * 100 + "%";

        animation1Circle2.style.top = clientY / fourCirclesContainerHeight / 2 * 100 + "%";
        animation1Circle2.style.right = clientX / fourCirclesContainerWidth / 2 * 100 + "%";

        animation1Circle3.style.left = clientX / fourCirclesContainerWidth / 2 * 100 + "%";
        animation1Circle3.style.bottom = clientY / fourCirclesContainerHeight / 2 * 100 + "%";

        animation1Circle4.style.right = clientX / fourCirclesContainerWidth / 2 * 100 + "%";
        animation1Circle4.style.bottom = clientY / fourCirclesContainerHeight / 2 * 100 + "%";
    }, 150);
}

fourCirclesContainer.addEventListener("mousemove", fourCirclesAnimationHandler);

ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
    // markers: true
  });
  
gsap.utils.toArray("section").forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=100%",
        pin: true, 
        pinSpacing: false,
        scrub: 1,
        snap: {
            snapTo: 1,
            duration: {min: 0.5, max: 0.5}
        }
    });
});

// gsap.utils.toArray(".work-sections li").forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: "top top",
//         end: `+=${() => {panel.offsetHeight}}`,
//         scrub: 1,
//         snap: {
//             snapTo: 1,
//             duration: {min: 0.5, max: 0.5}
//         }
//     });
// });