let d= document;
let w = window;


export default function scrollTopButton(btn){
const $scrollBtn = d.querySelector(btn);

w.addEventListener('scroll',(e)=>{
    const scrollTop= w.pageYOffset;
    if(scrollTop > 800) {
        $scrollBtn.classList.remove('hidden');
    } else {
        $scrollBtn.classList.add('hidden');
    }
})
d.addEventListener('click',(e)=>{

    if(e.target.matches(btn)) {
        w.scrollTo({
            behavior:'smooth',
            top:0
        })
    }
})
}