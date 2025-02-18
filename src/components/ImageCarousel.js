import { useMemo, useState } from "react";

const styles = {
    imageContainer: {
        position: 'relative',
        marginBottom: '25rem'
    },
    image: {
        width: '100%',
        maxWidth: '1175px',
        marginBottom: '2rem',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

export default function ImageCarousel({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorSide, setCursorSide] = useState("none");

    const handleMouseMove = (e) => {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const xPos = e.clientX - left;
        setCursorSide(xPos < width / 2 ? "left" : "right");
    };

    const handleClick = () => {
        if (cursorSide === "left") {
            setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        } else if (cursorSide === "right") {
            setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        }
    };

    const customCursor = useMemo(() => {
        if (cursorSide === "none" || images.length === 0) return "auto";

        const arrow = cursorSide === "left" ? "←" : "→";
        const cursorText = cursorSide === "left"
            ? (currentIndex >= 1 ? `${arrow} ${currentIndex}` : `${arrow} ${images.length}`)
            : (currentIndex + 2 > images.length ? `${arrow} 1` : `${arrow} ${currentIndex + 2}`);

        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="30">
            <rect x="0" y="0" width="80" height="30" rx="5" ry="5" fill="black" opacity="0.7"/>
            <text x="40" y="20" font-size="16" font-family="Arial" fill="white" text-anchor="middle">${cursorText}</text>
          </svg>
        `;

        const encodedSvg = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        return `url("${encodedSvg}") 40 15, auto`;
    }, [cursorSide, currentIndex, images]);

    if (images.length === 0) {
        return <p className="text-center">No images available</p>;
    }

    return (
        <div
            className="relative w-[1200px] h-[800px] mx-auto mt-10"
            onMouseMove={handleMouseMove}
            onClick={handleClick}
            style={{ cursor: customCursor, ...styles.imageContainer }}
        >
            <img
                src={images[currentIndex]}
                style={styles.image}
                alt={`Image ${currentIndex}`}
                className="w-full h-full object-cover"
                loading="lazy"
            />
        </div>
    );
}
