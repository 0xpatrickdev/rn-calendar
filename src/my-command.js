import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'
import { CalendarsList } from './CalendarsList'

const Document = () => (
  <Artboard name="Calendars List" >
    <CalendarsList />
  </Artboard>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
}
