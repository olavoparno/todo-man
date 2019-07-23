import React from 'react'
import { create } from 'react-test-renderer'

import BackgroundApp from './index'

describe('BackgroundApp component', () => {
  let backgroundApp

  beforeAll(() => {
    backgroundApp = create(
      <BackgroundApp>
        <span>Sasasa</span>
      </BackgroundApp>,
    )
  })
  it('matches the snapshot', () => {
    expect(backgroundApp.toJSON()).toMatchSnapshot()
  })
  it('should contain children', () => {
    expect(backgroundApp.toJSON().children.length).toBeGreaterThan(0)
  })
})
