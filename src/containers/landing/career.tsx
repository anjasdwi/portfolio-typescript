import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import ScrollContainer from 'react-indiana-drag-scroll'

const Career: React.FunctionComponent = () => {

  return (
    <>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        className="career"
      >
        <Grid item xs={12} className="career__header">
          <h2>
            Career
          </h2>
        </Grid>
        
      </Grid>
      <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <ScrollContainer className="career__content">
            <div className="career__content__item">
              To set initial scroll you need get the ref to the main DOM element of the ScrollContainer
            </div>
            <div className="career__content__item">
              To set initial scroll you need get the ref to the main DOM element of the ScrollContainer
            </div>
            <div className="career__content__item">
              To set initial scroll you need get the ref to the main DOM element of the ScrollContainer
            </div>
            <div className="career__content__item">
              To set initial scroll you need get the ref to the main DOM element of the ScrollContainer
            </div>
            <div className="career__content__item">
              To set initial scroll you need get the ref to the main DOM element of the ScrollContainer
            </div>
            <div className="career__content__item">
              To set initial scroll you need get the ref to the main DOM element of the ScrollContainer
            </div>
          </ScrollContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Career