import React, {useEffect, useRef, useState} from 'react';
import {DragType} from "../types/typing";
import "../styles/Details.css"
import {product} from "../assets/data";



const Details = () => {
    const slideRef = useRef<HTMLDivElement | null>(null)
    const [slideIndex, setSlideIndex] = useState<number>(1)
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [infoTitle, setInfoTitle] = useState<string>(product.infos[0].title)

    const [width, setWidth] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [change, setChange] = useState<number>(9)


    useEffect(() => {
        if (!slideRef.current) return
        const scrollWidth = slideRef.current?.scrollWidth
        const childrenElementCount = slideRef.current?.childElementCount
        const width = scrollWidth / childrenElementCount
        setWidth(width)
    },[])

    const plusSlide = (n: number) => {
        setSlideIndex(prev => prev + n)
        sliderShow(slideIndex + n)
    }
    const sliderShow = (n: number) => {
        if (n > product.images.length) setSlideIndex(1)
        if (n < 1) setSlideIndex(product.images.length)
    }

    const dragStart = (e: DragType) => {
        setStart(e.clientX)
    }
    const dragOver = (e: DragType) => {
        let touch = e.clientX
        setChange(start - touch)
    }
    const dragEnd = () => {
        if (change > 0) {
            slideRef.current!.scrollLeft += width
        } else {
            slideRef.current!.scrollLeft -= width
        }
    }



    useEffect(() => {
        if (!slideRef.current || !width) return

        let numOfThumb = Math.round(slideRef.current?.offsetWidth / width)
        slideRef.current!.scrollLeft = slideIndex > numOfThumb ? (slideIndex - 1) * width : 0
    },[width, slideIndex])




    return (
        <>
            <section className="product-details">
                <div className="product-page-img">
                    <div className="big-images">
                        {product.images.map((image, index) => (
                            <div key={index} className="my-slide" style={{
                                display: (index + 1) === slideIndex ? "block" : "none"
                            }}>
                                <div className="number-text">{index + 1} / {product.images.length} </div>
                                <img src={image.src} alt="image"/>
                            </div>
                        ))}
                        <a href="#" className="prev" onClick={() => plusSlide(-1)}>&#10094;</a>
                        <a href="#" className="next" onClick={() => plusSlide(1)}>&#10095;</a>
                    </div>


                    <div
                        className="slider-img"
                        ref={slideRef}
                        draggable={true}
                        onDragStart={dragStart}
                        onDragOver={dragOver}
                        onDragEnd={dragEnd}

                    >
                        {
                            product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`slider-box ${index + 1 === slideIndex ? "active" : ""}`}
                                    onClick={() => setSlideIndex(index + 1)}

                                >
                                    <img src={image.src} alt="image"/>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="product-page-details">
                    <strong>{product.name}</strong>
                    <p className="product-category">
                        {product.brand} - {product.category}
                    </p>
                    <p className="product-price">
                        ${Math.round(product.price - product.price * product.discount / 100)}
                        <del>{product.price}$</del>
                    </p>
                    <p className='small-desc'>
                        {product.desc}
                    </p>
                    <div className="product-option">
                        <span>Colors:</span>
                        {product.colors.map(color => (
                            <div   key={color}  >
                                <button
                                    style={{background: color}}
                                    className={color === selectedColor ? "active" : ""}
                                    onClick={() => setSelectedColor(color)}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="product-page-offer">
                        <i className="fa-solid fa-tag"/> {product.discount}% Discount
                    </div>
                    <div className="product-sold">
                        <strong>{product.sold } <span> Product Sold. </span></strong>
                    </div>
                    <div className="cart-btns">
                        <a href="#" className="add-cart">Add To Cart</a>
                        <a href="#" className="add-cart buy-now">Buy Now</a>
                    </div>
                </div>
            </section>
            <section className="product-all-info">
                <ul className="product-info-menu ">
                    {product.infos.map(info => (
                        <li
                            onClick={() => setInfoTitle(info.title)}
                            key={info.title}
                            className={`p-info-list ${info.title === infoTitle ? "active" : ""}`}
                        >
                            {info.title}
                        </li>
                    ))}
                </ul>
                {product.infos.map((info, index) => (
                    <div key={index} className={`info-container ${info.title === infoTitle ? "active" : ""}`}>
                        {info.content}
                    </div>
                ))}
            </section>
        </>
    );
};

export default Details;