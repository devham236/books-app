import React, { useContext, useEffect } from "react"
import { Context } from "../Context"
import Titel_Search from "../Components/Titel_Search"
import Books from "../Components/Books"
import BestsellerEl from "../Components/BestsellerEl"
import Carousel from "react-multi-carousel"
import array from "../utils/array"
import "react-multi-carousel/lib/styles.css"

const HomePage = () => {
  const { books, bestSeller, getBestSellerIsbns } = useContext(Context)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
  }

  useEffect(() => {
    if (bestSeller.length > 0) {
      return
    } else {
      getBestSellerIsbns()
    }
  }, [])

  const bestSellerElements = bestSeller.map((best) => (
    <BestsellerEl key={best.id} best={best} />
  ))

  return (
    <div className="homepage-container animation">
      <div className="top-container">
        <Titel_Search />
        <Books />
      </div>
      <div className="bottom-container">
        <div className="container-title">
          <h1>New York Times Bestsellers:</h1>
        </div>
        {bestSeller.length > 0 ? (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            keyBoardControl={true}
            transitionDuration={500}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="bestseller-div animation"
          >
            {bestSellerElements}
          </Carousel>
        ) : (
          <div className="bestseller-div animation">
            {array.map((num) => (
              <div key={num} className="bestseller-element">
                <div className="bs-img hover-item icon-container">
                  <div className="skeleton skeleton-img">
                    <i className="fa-solid fa-image"></i>
                  </div>
                </div>
                <div className="bestseller-info">
                  <div className="title-author">
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-author"></div>
                  </div>
                  <div className="publisher">
                    <div className="skeleton skeleton-publisher"></div>
                  </div>
                  <div className="buy-btn">
                    <div className="skeleton skeleton-button"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage

/**
    fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:0063251922&printType=books`)
    
    
    fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?&api-key=l0RSiZeImtRSf42VQmj8XK0KAcDptpki')


    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=AIzaSyAbIb3Sa6bWrlXDU8jCLZp_2f2MfF8PsuM')
 */
