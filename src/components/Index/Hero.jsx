import { component$, useClientEffect$, useStore, useStyles$, useStylesScoped$ } from '@builder.io/qwik';
import HeroPath from "./HeroPath"
import HeroCirculeImage from './HeroCirculeImage'
import HeroSwipers from './HeroSwipers';

const Hero = component$(({ superTitle, title, description, linkText, link, items }) => {
    return <section className="relative overflow-x-hidden select-none">
        <HeroPath
            className="relative left-0 top-0 w-[120%] md:w-[90%] md:w-[80%] lg:w-[70%] aspect-[1/2] sm:aspect-[3/4] md:aspect-[1/1] lg:aspect-[4/3] xl:aspect-[3/2] fill-paydar-color2 z-1"
        />
        <div className="absolute top-0 left-0 w-full h-full z-[20] flex items-start pt-10 md:pt-0 lg:items-center justify-center">
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row px-4 sm:px-3 md:px-5 2xl:px-0 ">
                <div className="w-full md:w-1/2 text-white flex items-center justify-center">
                    <div className="w-[80%]  lg:w-1/2  lg:px-0  flex flex-col items-start justify-center gap-5">
                        <p className="text-xl">{superTitle}</p>
                        <h2 className="text-4xl font-bold">{title}</h2>
                        <p className="text-lg">{description}</p>
                        <a
                            href={link}
                            className="rounded-md items-center justify-center w-[15ch] p-2 bg-white text-paydar-color1 hidden md:flex hover:scale-[1.1] transition-all duration-300">
                            {linkText}
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 text-white flex items-center justify-center relative">
                    <HeroCirculeImage className="w-[300px] md:w-[40vw]  mt-0 absolute left-1/2 translate-x-[-50%] md:translate-x-0 md:left-10 top-1/2 translate-y-[-50%] lg:translate-y-[-65%] z-[-1]" />
                    <HeroSwipers items={items} />
                </div>
            </div>
        </div>
    </section>
})

export default Hero
