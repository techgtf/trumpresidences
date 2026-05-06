const captionEl = document.getElementById('slideCaption');

const swiper = new Swiper('.amenitiesSwiper', {
    slidesPerView: 1.6,
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: '.amenitiesNextSlide',
        prevEl: '.amenitiesPrevSlide',
    },

    breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 30 },
        640: { slidesPerView: 1.4, spaceBetween: 18 },
        1024: { slidesPerView: 1.6, spaceBetween: 40 },
        1280: { slidesPerView: 1.8, spaceBetween: 70 },
    },
    on: {
        slideChange() {
            const activeSlide = this.slides[this.activeIndex];
            const newCaption = activeSlide?.dataset?.caption || '';

            // Fade out → update → fade in
            captionEl.classList.add('fade-out');
            setTimeout(() => {
                captionEl.textContent = newCaption;
                captionEl.classList.remove('fade-out');
            }, 380);
        }
    }
});

