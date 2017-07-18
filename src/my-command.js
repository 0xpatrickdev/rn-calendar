import React from 'react'
import PropTypes from 'prop-types'
import { render, Artboard, Text, View } from 'react-sketchapp'
import { CalendarsList } from './CalendarsList'

const styles = {
  view: {
    height: 96,
    width: 96,
    margin: 4,
    // backgroundColor: hex,
    padding: 8,
  },
  artboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: (96 + 8) * 4,
  }
}
/*
const Swatch = () => (
  <View> test </View>
);*/

const Document = () => {
  return ( <Artboard name="Calendars List" >
    <CalendarsList />
  </Artboard>
  )
};

export default (context) => {
  render(<Document />, context.document.currentPage());
}
