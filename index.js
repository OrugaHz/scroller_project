// zapis obiektowy
document.addEventListener('DOMContentLoaded', function () {
    const scroller = new Scroller('#root');

    document.addEventListener('wheel', (event) => scroller.listenScroll(event));

    document.addEventListener('swipeUp', () => scroller.scroll(1));
    document.addEventListener('swipeDown', () => scroller.scroll(-1));
    document.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
            case 40:
                return scroller.scroll(1)
            case 38:
                return scroller.scroll(-1)
            default:
                return;
        }
    })
})


// zapis funkcyjny
// document.addEventListener('DOMContentLoaded', function () {
//     console.log('helooł');

//     const rootElement = document.querySelector('#root');
//     const sections = document.querySelectorAll('section');
//     let currentSectionIndex = 0;
//     let isThrottled = false;

//     console.log(sections);

//     document.addEventListener('mousewheel', function (event) {

//         if (isThrottled) return;
//         isThrottled = true;

//         setTimeout(() => {
//             isThrottled = false;
//         }, 1000);

//         const direction = event.wheelDelta < 0 ? 1 : -1;
//         // console.log(wheelDelta);
//         scroll(direction)
//     })

//     function scroll(direction) {
//         if (direction === 1) {
//             const isLastSection = currentSectionIndex === sections.length - 1;
//             if (isLastSection) return;
//         } else if (direction === -1) {
//             const firstSection = currentSectionIndex === 0;
//             if (firstSection) return
//         }

//         currentSectionIndex = currentSectionIndex + direction;

//         scrollToCurrentSection();
//     }


//     function scrollToCurrentSection() {
//         sections[currentSectionIndex].scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         })
//     }

// })