import { useState, useCallback } from "react";
import "./ImageGallery.css";

interface ImageGalleryProps {
    images: string[];
    alt?: string;
}

const ImageGallery = ({ images, alt = "Project image" }: ImageGalleryProps) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openLightbox = useCallback((index: number) => {
        setActiveIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
    }, []);

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false);
        document.body.style.overflow = "";
    }, []);

    const goToPrevious = useCallback(() => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") goToPrevious();
            if (e.key === "ArrowRight") goToNext();
        },
        [closeLightbox, goToPrevious, goToNext]
    );

    if (!images || images.length === 0) return null;

    // Determine layout class based on number of images
    const getLayoutClass = () => {
        switch (images.length) {
            case 1:
                return "gallery--single";
            case 2:
                return "gallery--duo";
            case 3:
                return "gallery--trio";
            case 4:
                return "gallery--quad";
            default:
                return "gallery--multi";
        }
    };

    return (
        <>
            <div className={`gallery ${getLayoutClass()}`}>
                {images.map((src, index) => (
                    <button
                        key={index}
                        className="gallery__item"
                        onClick={() => openLightbox(index)}
                        style={{ "--delay": `${index * 0.05}s` } as React.CSSProperties}
                    >
                        <img
                            src={src}
                            alt={`${alt} ${index + 1}`}
                            className="gallery__image"
                            loading="lazy"
                        />
                        <div className="gallery__overlay">
                            <svg
                                className="gallery__icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>

            {lightboxOpen && (
                <div
                    className="lightbox"
                    onClick={closeLightbox}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                >
                    <div className="lightbox__backdrop" />
                    
                    <button
                        className="lightbox__close"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="lightbox__content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={images[activeIndex]}
                            alt={`${alt} ${activeIndex + 1}`}
                            className="lightbox__image"
                        />
                    </div>

                    {images.length > 1 && (
                        <>
                            <button
                                className="lightbox__nav lightbox__nav--prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrevious();
                                }}
                                aria-label="Previous image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                            </button>
                            <button
                                className="lightbox__nav lightbox__nav--next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                aria-label="Next image"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </button>

                            <div className="lightbox__counter">
                                {activeIndex + 1} / {images.length}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default ImageGallery;

