import * as React from 'react'
import Grid from '@material-ui/core/Grid'

const HeroHeader: React.FunctionComponent = () => (
  <>
    <Grid container spacing={3}>
      <Grid item xs={12} className="hero">
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
           <Grid item xs={12} sm={7} md={8} lg={8}>
            <div className="hero__text">
              <h2>Hi Everyone!</h2>
              <h5>I’m Anjas Dwi, August 96</h5>
              <p>I am a coding explorer from Indonesia. Very enthusiastic about libraries and Frameworks JavaScript-based such as NodeJS, ReactJS, React Native, VueJS, VanillaJS, etc</p>
            </div>
           </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
)

export default HeroHeader
