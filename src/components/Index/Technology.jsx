import {
    component$,
    useClientEffect$,
    useStyles$,
} from '@builder.io/qwik'
import Swiper from 'swiper'
import swiperStyles from 'swiper/css'
import PencilSVG from '../Shared/PencilSVG'

const Technology = component$(({
    image,
    items,
    title,
}) => {

    useStyles$(swiperStyles)

    useClientEffect$(() => {
        const swiper = new Swiper(".swiperTechnology", {
            loop: true,
            spaceBetween: 20,
            breakpoints: {
                360: {
                    slidesPerView: 1.5,
                }, 640: {
                    slidesPerView: 1.8,
                }, 768: {
                    slidesPerView: 2.8,
                }
            }
        })
    })

    return <section className='relative bg-white pt-10 text-center'>
        <img
            alt={title}
            className='object-contain w-20 h-20 absolute left-1 -top-10 z-10 2xl:left-[10%] xl:left-[5%] xl:w-28 xl:h-28 2xl:w-40 2xl:h-40'
            src={image} />
        <h2 className="text-3xl w-fit mx-auto text-paydar-color2 font-bold relative before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:bg-paydar-color1 before:w-1/2 before:h-[3px] before:rounded  max-w-7xl mx-auto px-4 sm:px-3 md:px-5 2xl:px-0">{title}</h2>
        <div className='lg:hidden swiperTechnology swiper px-4 sm:px-3 md:px-5'>
            <div className='mt-14 swiper-wrapper mb-20'>
                {items.map(i => (
                    <div className="swiper-slide border py-4 px-4 bg-white rounded-lg relative">
                        <div className='absolute left-2 top-4 bg-paydar-color1 backdrop-brightness-[0.5] w-fit p-4 rounded-full flex flex-col  justify-start items-start'>
                            <PencilSVG className='fill-paydar-color2 w-7 absolute left-0 top-1' />
                        </div>
                        <h3 className='text-xl font-bold text-center'>{i.title}</h3>
                        <p className='text-paydar-color5 text-sm text-left mt-4 line-clamp-4'>{i.description}</p>
                        <a
                            className='bg-paydar-color3 hover:text-white transition hover:bg-paydar-color2 w-full block mt-4 py-1.5 rounded-lg font-light text-paydar-color5'
                            href={i.url}>
                            {i.textLink}
                        </a>
                    </div>
                ))}
            </div>
        </div>
        <div className='hidden lg:block md:px-5 2xl:px-0 mx-auto max-w-4xl pt-16 grid grid-cols-4 grid-rows-2 gap-2 xl:gap-4 2xl:gap-6'>
            {items.map(i => (
                <div className="border py-4 px-4 bg-white rounded-lg relative">
                    <div className='absolute left-2 top-4 bg-paydar-color1 backdrop-brightness-[0.5] w-fit p-4 rounded-full flex flex-col  justify-start items-start'>
                        <PencilSVG className='fill-paydar-color2 w-7 absolute left-0 top-1' />
                    </div>
                    <h3 className='text-lg font-bold text-center'>{i.title}</h3>
                    <p className='text-paydar-color5 text-sm text-left mt-4 line-clamp-4'>{i.description}</p>
                    <a
                        className='bg-paydar-color3 hover:text-white transition hover:bg-paydar-color2 w-full block mt-4 py-1.5 rounded-lg font-light text-paydar-color5'
                        href={i.url}>
                        {i.textLink}
                    </a>
                </div>
            ))}
        </div>
    </section>
})

export default Technology
