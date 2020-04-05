import * as React from 'react'
import { NextPage } from 'next'
import {
  HeroHeader,
  Educations,
  Career
} from '../src/containers/landing'

const IndexPage: NextPage = () => {
  return (
    <>
      <HeroHeader/>
      <div className="main">
        <div className="edu">
          <Educations/>
        </div>
        <Career />
      </div>
    </>
  )
}

export default IndexPage
