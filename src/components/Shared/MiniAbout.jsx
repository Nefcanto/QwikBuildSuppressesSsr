const MiniAbout = ({
    text,
    image,
}) => {

    return <>
        <div className="w-full lg:w-[40%] lg:pr-20 px-5 2xl:px-0 ">
            
            <a
                href="/">
                <img
                    src={image}
                    alt="Falcon"
                    className="object-contain aspect-square w-[80px]"
                />
            </a>

            <p className="my-12 text-md">
                {text}
            </p>

        </div>
    </>
}

export default MiniAbout
