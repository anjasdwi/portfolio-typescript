import * as React from 'react'
import Grid from '@material-ui/core/Grid'

const Educations: React.FunctionComponent = () => {
  const datas = [
    {
      years : '2002',
      education: 'SDN Tunggakjati VII'
    },
    {
      years : '2008',
      education: 'SMPN 4 Karawang Barat'
    },
    {
      years : '2011',
      majors: 'Rekayasa Perangkat Lunak',
      education: 'SMKN 1 Karawang'
    },
    {
      years : '2014',
      majors: 'Teknik Informatika',
      education: 'Universitas Mercu Buana'
    }
  ]
  return (
    <>
      <Grid container className="education">
        <Grid item xs={12} className="education__header">
          <h2>
            Educations
          </h2>
        </Grid>
        {
          datas.map((data)=>
            <Grid item xs={12} className="education__content">
              <h5>{ data.years + ' - ' + data.education}</h5>
        <     p>{ data.education }</p>
            </Grid>
          )        
        }
      </Grid>
    </>
  )
}

export default Educations
