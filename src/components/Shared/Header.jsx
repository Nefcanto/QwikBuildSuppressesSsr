import Menu from "./Menu"
import { MuiMenuIcon } from "./Icons"

const Header = ({
    headerContact,
    headerLogo,
    menu
}) => {
    return <>
        <div class="bg-paydar-color2 border-b border-paydar-color5">
            <div class="max-w-7xl mx-auto px-4 sm:px-3 md:px-5 2xl:px-0 flex items-center justify-between">
                <div className="flex items-center gap-5">

                    <a href="/">
                        <img
                            src={headerLogo?.image}
                            alt="falcon"
                            className="max-w-[80px] h-[60px]"
                        />
                    </a>

                    <Menu menu={menu} />

                </div>
                <div class="flex items-center gap-5">

                    <a href={headerContact?.link} className="relative overflow-hidden inline-flex justify-centetr items-center bg-paydar-color1 rounded-md px-5 md:px-7 lg:px-10 py-2 text-sm text-white after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:content-[''] after:bg-paydar-color4 after:z-10 hover:after:w-full hover:text-paydar-color1 after:transition-all after:duration-200 after:ease-linear">
                        <div className="relative z-20">
                            {headerContact?.text}
                        </div>
                    </a>

                    <div className="text-white cursor-pointer block lg:hidden">
                        <MuiMenuIcon />
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Header
