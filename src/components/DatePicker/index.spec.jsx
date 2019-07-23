import React from 'react'
import { create } from 'react-test-renderer'

import DateSelector from './index'

describe('DateSelector component', () => {
  let dateSelector
  let startDate

  beforeAll(() => {
    startDate = new Date('Mon Jul 22 2019 23:15:02 GMT-0300 (Brasilia Standard Time)')
    dateSelector = create(
      <DateSelector startDate={startDate} />,
    )
  })
  it('matches the snapshot', () => {
    expect(dateSelector.toJSON()).toMatchSnapshot()
  })
  it('should contain startDate accordingly', () => {
    expect(dateSelector.root.props.startDate).toEqual(startDate)
  })
})
