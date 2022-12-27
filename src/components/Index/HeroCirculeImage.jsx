const HeroCirculeImage = ({ className }) => {

    return <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        className={className}
        viewBox="0 0 769 770"
    >
        <defs>
            <filter id="Ellipse_35" x="0" y="0" width="769" height="770" filterUnits="userSpaceOnUse">
                <feOffset input="SourceAlpha" />
                <feGaussianBlur stdDeviation="25" result="blur" />
                <feFlood flood-color="#6c5cf5" flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
            </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_35)">
            <g id="Ellipse_35-2" data-name="Ellipse 35" transform="translate(75 75)" fill="none" stroke="#d4d5fc" stroke-width="50" opacity="0.35">
                <ellipse cx="309.5" cy="310" rx="309.5" ry="310" stroke="none" />
                <ellipse cx="309.5" cy="310" rx="284.5" ry="285" fill="none" />
            </g>
        </g>
    </svg>
}

export default HeroCirculeImage
