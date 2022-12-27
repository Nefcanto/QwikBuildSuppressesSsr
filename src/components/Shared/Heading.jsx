const Heading = ({ children }) => {
    return <>
        <h2 className='relative text-center font-medium
        text-5xl text-paydar-color2 pb-14 after:bg-paydar-color1 after:h-[5px]
        after:w-[30%] after:rounded-full after:my-6 after:absolute after:bottom-0
        after:right-0 after:left-0 after:mx-auto'>{children}</h2>
    </>
}

export default Heading;
