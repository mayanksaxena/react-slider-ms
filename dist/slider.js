import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useRef, useState, useEffect } from 'react';
import { get } from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';
import './slider.scss';

var Slider = function Slider(_ref) {
  var items = _ref.items,
      itemsPerPage = _ref.itemsPerPage,
      numberOfItemsMovable = _ref.numberOfItemsMovable,
      vertical = _ref.vertical;
  var ref = useRef(null);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      containerWidth = _useState2[0],
      setContainerWidth = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      slidePosTemp = _useState4[0],
      setSlidePosTemp = _useState4[1];

  useEffect(function () {
    if (!ref.current || !ref.current.getBoundingClientRect().width) return;
    var singleItemWidth = vertical ? ref.current.getBoundingClientRect().height : ref.current.getBoundingClientRect().width;
    setContainerWidth(items.length * singleItemWidth);
  }, [items, vertical]);

  var slider = function slider(direction) {
    var singleItemWidth = containerWidth / items.length;
    var singleMoveableWidth = singleItemWidth * numberOfItemsMovable;
    var newPosition = direction === 'next' ? slidePosTemp - singleMoveableWidth : slidePosTemp + singleMoveableWidth;

    if (newPosition > 0) {
      return;
    }

    if (newPosition < -(containerWidth - itemsPerPage * singleItemWidth)) {
      return;
    }

    setSlidePosTemp(newPosition);
  };

  var sliderContentStyle = vertical ? {
    height: containerWidth / items.length * itemsPerPage
  } : {
    width: containerWidth / items.length * itemsPerPage
  };
  var sliderContentUlStyle = vertical ? {
    height: containerWidth,
    marginTop: slidePosTemp,
    width: get(ref, 'current.getBoundingClientRect().width', 0)
  } : {
    width: containerWidth,
    marginLeft: slidePosTemp
  };
  return React.createElement("section", {
    className: "slider-section-container infinite-carousel"
  }, React.createElement("div", {
    className: "row"
  }, React.createElement("div", {
    className: "slider-controls col-2"
  }, React.createElement("button", {
    type: "button",
    className: "prev",
    onClick: function onClick() {
      return slider('prev');
    }
  }, "Prev")), React.createElement("div", {
    className: "col-8"
  }, React.createElement("div", {
    className: "slider-content",
    style: sliderContentStyle
  }, React.createElement("ul", {
    style: sliderContentUlStyle,
    className: "carousel-ul"
  }, items.map(function (item) {
    return React.createElement("li", {
      ref: ref,
      key: "index".concat(Math.random()),
      className: "carousel-li"
    }, item);
  })))), React.createElement("div", {
    className: "slider-controls col-2"
  }, React.createElement("button", {
    type: "button",
    className: "next",
    onClick: function onClick() {
      return slider('next');
    }
  }, "Next"))));
};

Slider.defaultProps = {
  itemsPerPage: 1,
  numberOfItemsMovable: 1,
  vertical: false
};
export default Slider;