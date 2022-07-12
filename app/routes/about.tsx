import { Outlet } from '@remix-run/react'
import { P } from '~/components/P'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'
import Imgix from 'react-imgix'
import { H1 } from '~/components/H1'
import { Project } from '~/components/Project'

const About = () => (
  <Grid>
    <GridMainBody>
      <div className="my-6 sm:my-12 text-center">
        <Imgix
          className="w-full"
          width={564}
          height={430}
          src="https://timchaves.imgix.net/tim-and-aubrey.png"
        />
      </div>
      <P size="large">
        I’m an entrepreneur currently exploring the worlds of faith, technology,
        and philosophy. I graduated from Brigham Young University in 2008 and
        Harvard Business School in 2015.
      </P>
      <P size="large">
        I sit on the board of the non-profit Faith Matters Foundation and
        co-host its podcast.
      </P>
      <P size="large">
        I have a background in design and software engineering, and had way too
        much fun designing and building this website by hand, using Figma and
        Remix. Its code is open source and available on Github.
      </P>
      <H1 className="my-16 text-center">Current projects</H1>
      <Project />
    </GridMainBody>
  </Grid>
)

export default About
