// ================= HAMBURGER MENU =================
const bsHamburger = document.getElementById('bsHamburger');
const bsNavLinks  = document.getElementById('bsNavLinks');

bsHamburger.addEventListener('click', () => {
    bsNavLinks.classList.toggle('bs-active');
});

// ================= SLIDER AUTO-PLAY =================
const bsSlides = document.querySelectorAll('.bs-slide');
let bsCurrent = 0;

setInterval(() => {
    bsSlides[bsCurrent].classList.remove('bs-active');
    bsCurrent = (bsCurrent + 1) % bsSlides.length;
    bsSlides[bsCurrent].classList.add('bs-active');
}, 4000);

// ================= QUANTITY CONTROL =================
function bsChangeQty(btn, delta) {
    const qtyEl = btn.parentElement.querySelector('.bs-qty-value');
    let val = parseInt(qtyEl.textContent) + delta;
    if (val < 1) val = 1;
    qtyEl.textContent = val;
}

// ================= SCROLL TO TOP =================
const bsScrollBtn = document.getElementById('bsScrollTop');

window.addEventListener('scroll', () => {
    bsScrollBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

bsScrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});