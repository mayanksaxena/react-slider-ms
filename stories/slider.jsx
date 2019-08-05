/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';
import Slider from '../src/lib/slider';

const Listitem = () => (
  <div className="customItem">
    <img
      alt="some image"
      src="http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg"
      width="75"
      height="75"
    />
    <h1>Custom Content</h1>
  </div>
);

storiesOf('Slider', module)
  .add('default', () => (
    <Slider
      itemsPerPage={3}
      numberOfItemsMovable={3}
      items={[
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
      ]}
    />
  ))
  .add('horizontal with 2 item movement per click', () => (
    <Slider
      itemsPerPage={3}
      numberOfItemsMovable={2}
      items={[
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
      ]}
    />
  ))
  .add('vertical', () => (
    <Slider
      vertical
      itemsPerPage={3}
      numberOfItemsMovable={3}
      items={[
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
        <Listitem />,
      ]}
    />
  ));
