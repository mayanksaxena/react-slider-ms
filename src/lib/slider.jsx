import React, { useRef, useState, useEffect } from 'react';
import { arrayOf, element, number, bool } from 'prop-types';
import { get } from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './slider.scss';

const Slider = ({ items, itemsPerPage, numberOfItemsMovable, vertical }) => {
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [slidePosTemp, setSlidePosTemp] = useState(0);

  useEffect(() => {
    if (!ref.current || !ref.current.getBoundingClientRect().width) return;
    const singleItemWidth = vertical
      ? ref.current.getBoundingClientRect().height
      : ref.current.getBoundingClientRect().width;
    setContainerWidth(items.length * singleItemWidth);
  }, [items, vertical]);

  const slider = (direction) => {
    const singleItemWidth = containerWidth / items.length;
    const singleMoveableWidth = singleItemWidth * numberOfItemsMovable;
    const newPosition =
      direction === 'next'
        ? slidePosTemp - singleMoveableWidth
        : slidePosTemp + singleMoveableWidth;

    if (newPosition > 0) {
      return;
    }
    if (newPosition < -(containerWidth - itemsPerPage * singleItemWidth)) {
      return;
    }

    setSlidePosTemp(newPosition);
  };

  const sliderContentStyle = vertical
    ? { height: (containerWidth / items.length) * itemsPerPage }
    : { width: (containerWidth / items.length) * itemsPerPage };

  const sliderContentUlStyle = vertical
    ? {
        height: containerWidth,
        marginTop: slidePosTemp,
        width: get(ref, 'current.getBoundingClientRect().width', 0),
      }
    : { width: containerWidth, marginLeft: slidePosTemp };

  return (
    <section className="slider-section-container infinite-carousel">
      <div className="row">
        <div className="slider-controls col-2">
          <button type="button" className="prev" onClick={() => slider('prev')}>
            Prev
          </button>
        </div>
        <div className="col-8">
          <div className="slider-content" style={sliderContentStyle}>
            <ul style={sliderContentUlStyle} className="carousel-ul">
              {items.map((item) => (
                <li
                  ref={ref}
                  key={`index${Math.random()}`}
                  className="carousel-li"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="slider-controls col-2">
          <button type="button" className="next" onClick={() => slider('next')}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

Slider.propTypes = {
  items: arrayOf(element).isRequired,
  itemsPerPage: number,
  numberOfItemsMovable: number,
  vertical: bool,
};

Slider.defaultProps = {
  itemsPerPage: 1,
  numberOfItemsMovable: 1,
  vertical: false,
};

export default Slider;
