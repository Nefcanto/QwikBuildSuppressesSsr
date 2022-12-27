import Button from '../Shared/Button'
import PurpleSquare from '../Shared/PurpleSquare'
import WhiteSquare from '../Shared/WhiteSquare'

const Presentation = ({
    bottomDescription,
    description,
    image,
    linkAddress,
    linkText,
    subLinkAddress,
    subLinkText,
    subtitle,
    title
}) => {

    return <section className='bg-white overflow-hidden'>
        <div className='flex flex-col md:flex-row md:space-x-3 md:mt-16 space-y-4 max-w-7xl mx-auto px-4 sm:px-3 md:px-5 2xl:px-0 lg:space-x-0 relative'>
            <PurpleSquare
                className='absolute right-0 top-0 md:-top-10 md:right-5 -z-5'
                dimensions='80'
            />
            <WhiteSquare
                className='absolute bottom-24 -right-5 md:bottom-16 md:-right-40 -z-8 overflow-hidden'
                dimensions='130'
            />
            <span className='h-8'></span>
            <div className='flex flex-col space-y-4 justify-center'>
                <h2 className='font-bold w-[70%] md:w-[50%] text-xl line-clamp-3'>{title}</h2>
                <span className='bg-paydar-color1 h-[5px] w-16 rounded-full'></span>
                <p className='text-paydar-color5 text-sm leading-6 lg:mr-2 line-clamp-12'>{description}</p>
                <div className='flex flex-row items-center space-x-3 text-paydar-color1'>
                    <a
                        href={linkAddress}
                        className='text-xs'
                    >
                        {linkText}
                    </a>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                    </svg>
                </div>
            </div>
            <img
                src={image}
                className='w-11/12 md:w-6/12 lg:w-5/12 aspect-sqaure'
            />
        </div>
        <div className='bg-paydar-color1 max-w-7xl mx-auto px-4 sm:px-3 md:px-5 flex flex-col justify-center'>
            <h2
                className='text-white font-extrabold text-3xl mt-5 mt-5 ine-clamp-2'
            >{subtitle}</h2>
            <p className='text-white text-xs leading-5 my-3 line-clamp-12'>{bottomDescription}</p>
            <div className=' my-9 mx-auto '>
            <Button
                link={subLinkAddress}
                linkText={subLinkText}
            />
            </div>
        </div>
    </section>
}

export default Presentation
