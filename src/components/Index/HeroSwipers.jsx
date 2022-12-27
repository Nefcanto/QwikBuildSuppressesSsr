import {
    component$,
    useClientEffect$,
    useStore,
    useStyles$,
    useStylesScoped$
} from '@builder.io/qwik'
import Swiper from 'swiper'
import swiperStyles from 'swiper/css?inline'
import {
    Navigation,
    Pagination,
    Scrollbar,
    Thumbs,
} from 'swiper'

const HeroSwipers = component$(({ items }) => {
    useStyles$(swiperStyles)
    useClientEffect$(() => {

        const thumbSwiper = new Swiper(".thumbSwiper", {
            loop: true,
            modules: [Navigation, Pagination],
            pagination: {
                el: ".thumbSwiper-pagination",
                clickable: true
            },
            slidesPerView: 3,
            spaceBetween: 10,

        }
        )

        const swiper = new Swiper(".swiper", {
            hashNavigation: true,
            loop: true,
            freeMode: true,
            slidesPerView: 2,
            spaceBetween: 30,
            watchSlidesProgress: true,
            thumbs: {
                swiper: thumbSwiper && !thumbSwiper.destroyed ? thumbSwiper : null,
            },
            modules: [Navigation, Pagination, Thumbs],

        })
    })

    const slideStyle = "rounded-md rounded-md"

    return (<div class="max-w-[80%] md:max-w-full max-w-[80%] mx-auto w-full overflow-hidden mt-10 md:mt-32 lg:mt-0">
        <div class="swiper heroSwiper">
            <div class="swiper-wrapper min-h-36 p-10  [&>.swiper-slide-active]:scale-[1.3] [&>.swiper-slide-active]:z-[30] [&>.swiper-slide]:transition-all">
                {/* {items?.map(item => <div class="swiper-slide aspect-[1/1]">
                    <img
                        src={item?.image}
                        className="w-full h-full object-cover"
                    /></div>)} */}
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 1</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 2</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 3</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 4</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 5</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 6</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 7</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 8</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 9</div>
            </div>
        </div>
        <div class="thumbSwiper min-h-20 my-20">
            <div class="swiper-wrapper h-36">
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 1</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 2</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 3</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 4</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 5</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 6</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 7</div>
                <div class="swiper-slide text-red-200 bg-blue-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 8</div>
                <div class="swiper-slide text-red-200 bg-red-800 aspect-[1/1] relative z-[20] flex items-center justify-center">Slide 9</div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="absolute w-screen md:w-full h-auto left-0 trnaslate-x-[-50%] flex justify-center">
                <div class="thumbSwiper-pagination [&>.swiper-pagination-bullet-active]:bg-red-800 mt-10 w-auto lg:w-full"></div>
            </div>
        </div>
    </div>
    )
})

export default HeroSwipers
