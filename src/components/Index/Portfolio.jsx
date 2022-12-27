import {
    component$,
    useClientEffect$,
} from '@builder.io/qwik'
import Swiper from 'swiper'
import {
    Navigation,
    Pagination
} from 'swiper'
import Button from "../Shared/Button"
import Heading from '../Shared/Heading'
const Portfolio = component$(
    (
        {
            items,
            title,
            linkText,
            link
        }
    ) => {

        useClientEffect$(() => {
            var swiper = new Swiper(".swiper", {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                hashNavigation: true,
                modules: [Navigation, Pagination],
                breakpoints: {
                    0: {
                        slidesPerView: 1.4,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 20,
                        centeredSlides: true
                    }
                }
            })
        })
        return <>
            <section className="w-full bg-paydar-color3 py-14 m-auto ">
                <div className="relative flex items-center justify-center">
                    <Heading>
                        {title}
                    </Heading>
                </div> 
                <div className="swiper mt-10">
                    <div class="swiper-wrapper">
                        {
                            items?.map(item => <>
                                <img
                                    src={item.image}
                                    className="swiper-slide h-[370px] md:h-[500px]" />
                            </>)
                        }
                    </div>
                </div>
                <div className="flex justify-center my-10">
                    <Button link={link} linkText={linkText} isReverse />
                </div>
            </section>
        </>
    })
export default Portfolio
