import React from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import PropTypes from 'prop-types'
import pt from 'date-fns/locale/pt'
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('pt', pt)

const DateSelector = ({ startDate, handleChange }) => (
  <DatePicker
    selected={startDate}
    onChange={handleChange}
    showTimeSelect
    locale="pt"
    timeFormat="p"
    timeIntervals={15}
    dateFormat="Pp"
  />
)

DateSelector.propTypes = {
  startDate: PropTypes.any,
  handleChange: PropTypes.func,
}

export default DateSelector
