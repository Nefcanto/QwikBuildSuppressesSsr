import {
    component$,
    useClientEffect$,
    useStyles$,
} from '@builder.io/qwik'
import Swiper from 'swiper'
import swiperStyles from 'swiper/css'
import swiperPaginationStyles from 'swiper/css/pagination'
import { Pagination } from 'swiper'
import { MuiDriveFileRenameOutlineOutlinedIcon } from '../Shared/Icons'

const Services = component$(({
    items,
    title,
}) => {

    useStyles$(swiperPaginationStyles)
    useStyles$(swiperStyles)

    useClientEffect$(() => {
        const swiper = new Swiper(".swiperServices", {
            modules: [Pagination],
            pagination: {
                el: ".swiper-pagination-services",
                clickable: true
            },
            loop: true,
            spaceBetween: 20,
            breakpoints: {
                360: {
                    slidesPerView: 1.2,
                }, 640: {
                    slidesPerView: 1.8,
                }, 768: {
                    slidesPerView: 2.3,
                }, 1024: {
                    slidesPerView: 3,
                }
            }
        })
    })

    return <section className='bg-paydar-color4 py-10 text-center'>
        <h2 className="text-3xl w-fit mx-auto text-paydar-color2 font-bold relative before:content-[''] before:absolute before:-bottom-4 before:left-1/2 before:-translate-x-1/2 before:bg-paydar-color1 before:w-1/2 before:h-[3px] before:rounded  max-w-7xl mx-auto px-4 sm:px-3 md:px-5 2xl:px-0">{title}</h2>
        <div className='swiperServices swiper max-w-4xl mx-auto px-4 sm:px-3 md:px-5 2xl:px-0'>
            <div className='mt-14 swiper-wrapper mb-20'>
                {items.map(i => (
                    <div className="swiper-slide py-4 px-4 bg-white rounded-lg relative">
                        <div className='absolute left-2 top-4 bg-paydar-color1 w-fit p-2 rounded-full flex flex-col  justify-start items-start'>
                            <MuiDriveFileRenameOutlineOutlinedIcon />
                        </div>
                        <h3 className='text-2xl font-bold text-center'>{i.title}</h3>
                        <p className='text-paydar-color5 text-sm text-left mt-4 line-clamp-5'>{i.description}</p>
                    </div>
                ))}
            </div>
            <div className="swiper-pagination-services"></div>
        </div>
    </section>
})

export default Services
