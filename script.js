// const newspaperSpinning = [
//     { transform: "translateX(0px)" },
//     { transform: "translateX(500px)" },
// ];

// const newspaperTiming = {
//     duration: 2000,
//     iterations: 1,

// };
const a = document.getElementById("animat");
const m = document.getElementById("template");
m.addEventListener("click",()=>{
    a.animate(
        [
            {
                transform: "translateX(0)",
            },
            {
                transform: "translateX(500px)"
            }
        ],
        {
            duration: 5000,
            direction: "normal",
            easing: "linear",
            iterations: "Infinity"
        }
    )
})
