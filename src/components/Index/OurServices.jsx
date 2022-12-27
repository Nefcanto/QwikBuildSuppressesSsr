import CollapsibleItem from "../Shared/CollapsibleItem"
import Heading from "../Shared/Heading"

const OurServices = ({
    items,
    title
}) => {
    return <section className='bg-paydar-color4 pt-10 pb-8'>
        <div className='relative flex flex-col items-center justify-centerpt-16 overflow-hidden max-w-7xl mx-auto px-4 sm:px-3 md:px-5 2xl:px-0'>
            <Heading>{title}</Heading>
            {items.map(item => {
                return <CollapsibleItem item={item}/>
            })}
        </div>
    </section>
}

export default OurServices
