import Button from "../Shared/Button"

const Cta = (
    {
        title,
        image,
        description,
        linkText,
        link
    }
) => {
    return <>
        <section
            className="w-full py-28 relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-paydar-color2 after:bg-opacity-80 bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}>

            <div className="max-w-7xl mx-auto px-4 sm:px-3 md:px-5 px-0 text-center text-white relative z-20" >
                <h3 className="text-4xl font-bold">
                    {title}
                </h3>
                <p className="py-12 leading-loose text-center px-5">
                    {description}
                </p>
                <div className="flex justify-center">
                    <Button link={link} linkText={linkText} />
                </div>
            </div>
        </section>
    </>
}
export default Cta