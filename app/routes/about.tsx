import { Outlet } from '@remix-run/react'
import { P } from '~/components/P'
import { Grid } from '~/components/Grid'
import { GridMainBody } from '~/components/GridMainBody'
import Imgix from 'react-imgix'
import { H1 } from '~/components/H1'
import { Project } from '~/components/Project'
import { Link } from '@remix-run/react'

const About = () => {
  return (
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
          I’m an entrepreneur currently exploring the worlds of faith,
          technology, and philosophy. I graduated from Brigham Young University
          in 2008 and Harvard Business School in 2015.
        </P>
        <P size="large">
          I sit on the board of the non-profit Faith Matters Foundation and
          co-host its podcast.
        </P>
        <P size="large">
          I have a background in design and software engineering, and had way
          too much fun designing and building this website by hand, using Figma
          and Remix. Its code is open source and available on Github.
        </P>
        <H1 className="my-16 text-center">Current projects</H1>
        <Project
          imgSrc="/images/logo-faith-matters.svg"
          imgAlt="Faith Matters logo"
          imgDarkAvailable={true}
          dates="2018&ndash;present"
        >
          <P size="small">
            Faith Matters is a platform and community for exploring life’s most
            important questions through the lens of Mormonism.
          </P>
          <P size="small">
            It has been an important way for me to stay engaged in a faith
            community full of remarkable people despite my own failings and
            periods of disillusionment.
          </P>
          <P size="small">
            Faith Matters is a platform and community for exploring life’s most
            Faith Matters publishes a weekly podcast, has published four books
            and one online course, and holds in-person gatherings. Much more
            will be coming in the months and years ahead.
          </P>
          <P size="small">
            Faith Matters is a platform and community for exploring life’s most
            Those I get to work with — including my wife, Aubrey, our fellow
            board members and executives, and Faith Matters advisors — are among
            the people I look up to most.
          </P>
          <P size="small">
            <Link to="https://faithmatters.org">
              Visit Faith Matters website
            </Link>
          </P>
        </Project>
      </GridMainBody>
    </Grid>
  )
}

export default About
