import * as React from 'react'
import { NextPage } from 'next'
import {
  HeroHeader,
  Educations
} from '../src/containers/landing'

const IndexPage: NextPage = () => {
  return (
    <>
      <HeroHeader/>
      <div className="main">
        <Educations/>
      </div>
    </>
  )
}

export default IndexPage
