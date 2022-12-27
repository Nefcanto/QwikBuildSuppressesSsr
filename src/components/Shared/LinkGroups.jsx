const LinkGroups = ({
    items,
    title,
}) => {
    return <>
        <ul className="text-white relative z-20">
            <b className="block mb-3">
                {title}
            </b>
            {
                items?.map(item => <>
                    <li>
                        <a href={item.link} className='my-2 text-paydar-color5 hover:text-paydar-color1 transition-all'>
                            {item.text}
                        </a>
                    </li>
                </>
                )
            }
        </ul>
    </>
}

export default LinkGroups
