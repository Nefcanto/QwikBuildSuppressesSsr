// import { MiniAbout } from 'Shared'
import MiniAbout from "./MiniAbout"
import Copyright from "./Copyright"
import LinkGroups from "./LinkGroups"
import FooterPath from "./Svg/FooterPath"
import FooterMobilePath from "./Svg/FooterMobilePath"
import FooterSquare from "./Svg/FooterSquare"

const Footer = ({
    miniAbout,
    quickAccess,
    relatedLinks,
    team,
}) => {
    return <>
        <footer className="bg-paydar-color3">
            <div className="relative overflow-hidden pt-[100px] bg-paydar-color3">
                <FooterSquare className="absolute -left-20 top-0 w-[20%]" />
                <FooterPath className="absolute z-10 bottom-0 right-0 fill-paydar-color2 w-full lg:w-[60%] h-full hidden lg:block" />
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end lg:pb-32">
                    <MiniAbout {...miniAbout} />
                    <div className="w-full relative w-full lg:w-[60%] ">
                        <FooterMobilePath className="absolute z-10 -top-2 -left-2 fill-paydar-color4 w-full h-[20vw] block lg:hidden" />
                        <div className="relative px-4 sm:px-[10%] lg:pl-[10%] pt-[90px] sm:pt-[100px] md:pt-[150px] pt-20 pb-10 lg:py-0 w-full  grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-10 md:gap-5 lg:gap-20  bg-paydar-color2 lg:bg-transparent">
                            <LinkGroups {...quickAccess} />
                            <LinkGroups {...relatedLinks} />
                            <LinkGroups {...team} />
                        </div>
                    </div>
                </div>
            </div>
            <Copyright />
        </footer>
    </>
}

export default Footer
