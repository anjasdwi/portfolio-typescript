import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import ScrollContainer from 'react-indiana-drag-scroll'

const Career: React.FunctionComponent = () => {

  const datas = [
    {
      years : '2014',
      position : 'Designer Trace',
      company: 'PT. Asia Citra Pratama',
      description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet'
    },
    {
      years : '2018',
      position : 'Frontend Developer',
      company: 'Indivara Group (Jatis Travel)',
      description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet'
    },
    {
      years : '2019',
      position : 'Fullstack Developer',
      company: 'Hrdpintar.com',
      description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet'
    },
    {
      years : '2019 until now',
      position: 'Frontend Engineer',
      company: 'Bareksa.com',
      description: 'Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet'
    }
  ]

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
          {
            datas.map((data)=>
            <div className="career__content__item">
              <h5>{ data.years + ' - ' + data.company }</h5>
              <p>{ data.position }</p>
              <span>{ data.description }</span>
            </div>
            )
          }
          </ScrollContainer>
        </Grid>
      </Grid>
    </>
  )
}

export default Career