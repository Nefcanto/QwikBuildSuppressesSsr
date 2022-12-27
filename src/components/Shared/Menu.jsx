const Menu = ({ menu }) => {
    return <>

        <ul className="gap-5 hidden lg:flex">
            {
                menu?.map(item => <>
                    <li>
                        <a
                            href={item?.url}
                            className="relative overflow-hidden inline-flex justify-centetr items-center rounded-md px-5 py-2 text-sm text-paydar-color3 after:absolute after:left-0 after:top-0 after:w-0 after:h-full after:content-[''] after:bg-paydar-color3 after:z-10 hover:after:w-full hover:text-paydar-color1 after:transition-all after:duration-200 after:ease-linear"
                        >
                            <div className="relative z-20">
                                {item?.title}
                            </div>
                        </a>
                    </li>
                </>)
            }
        </ul>

    </>
}

export default Menu
