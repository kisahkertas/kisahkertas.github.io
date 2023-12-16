const scroller = document.querySelector('.scroller')
let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    scroller.classList.add('dragging');
    startX = e.pageX;
    startScrollLeft = scroller.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    scroller.scrollLeft = startScrollLeft - (e.pageX - startX);
}
// const infinityScroll = () => {
//     if(scroller.scrollLeft === 0){
//         scroller.classList.add('no-transition');
//         scroller.scrollLeft = scroller.scrollWidth - (2 * scroller.offsetWidth);
//         scroller.classList.remove('no-transition');
//         console.log('mentok kiri')
//     }else if(Math.celi(scroller.scrollLeft) === scroller.scrollWidth - scroller.offsetWidth){
//         scroller.classList.add('no-transition');
//         scroller.scrollLeft = scroller.offsetWidth;
//         scroller.classList.remove('no-transition');
//         console.log('mentok kiri')
//     }
// }
const dragStop = () => {
    isDragging = false;
    scroller.classList.remove('dragging')
}

scroller.addEventListener('mousedown', dragStart)
scroller.addEventListener('mousemove', dragging)
// scroller.addEventListener('scroll', infinityScroll)
document.addEventListener('mouseup', dragStop)