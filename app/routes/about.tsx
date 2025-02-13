import { P } from "~/components/P";
import { Grid } from "~/components/Grid";
import { GridMainBody } from "~/components/GridMainBody";
import Imgix from "react-imgix";
import { H1 } from "~/components/H1";
import { Project } from "~/components/Project";
import { Link } from "@remix-run/react";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "About - Tim Chaves",
  viewport: "width=device-width,initial-scale=1",
});

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
          I’m an entrepreneur currently exploring the worlds of technology
          and faith. I graduated from Brigham Young University in
          2008 and Harvard Business School in 2015.
        </P>
        <P size="large">
          I'm the co-founder of AI startup{" "}
          <a href="https://jumpapp.com">Jump</a>, sit on the board of the
          non-profit{" "}
          <a href="https://faithmatters.org/">Faith Matters Foundation</a> and
          co-host its{" "}
          <a href="https://podcasts.apple.com/us/podcast/faith-matters/id1307757928">
            podcast
          </a>
          .
        </P>
        <P size="large">
          I have a background in design and software engineering, and had way
          too much fun designing and building this website by hand, using{" "}
          <a href="https://www.figma.com/">Figma</a>&nbsp;and&nbsp;
          <a href="https://remix.run/">Remix</a>. Its code is open source and
          available on&nbsp;
          <a href="https://github.com/thetimmyc/timchaves.com">Github</a>.
        </P>
        <div>
          <H1 className="mt-16 mb-12 text-center">Recent work</H1>
          <Project
            imgSrc="/images/logo-jump.svg"
            imgAlt="Jump logo"
            imgClassName="h-8 w-auto"
            imgDarkAvailable={true}
            dates="2023&ndash;present"
          >
            <P size="small">
              As of February 2025, Jump is Series A stage tech startup that has built an AI assistant for financial advisors. It's intended to allow financial advisors and their clients to thrive in the age of AI, automating administrative work for advisors so they can focus on building relationships with clients as they make some of the most important decisions of their lives.
            </P>
            <P size="small">
              Along with a <a href="https://jumpapp.com/company">great team</a>,
              I co-founded the company in early 2023.
            </P>
            <P size="small">
              <a href="https://jumpapp.com">Visit Jump website</a>
            </P>
          </Project>

          <Project
            imgSrc="/images/logo-faith-matters.svg"
            imgAlt="Faith Matters logo"
            imgClassName="h-6 w-auto"
            imgDarkAvailable={true}
            dates="2018&ndash;present"
          >
            <P size="small">
              Faith Matters is a platform and community for exploring life’s
              most important questions through the lens of Mormonism.
            </P>
            <P size="small">
              Faith Matters publishes a&nbsp;
              <a href="https://podcasts.apple.com/us/podcast/faith-matters/id1307757928">
                weekly podcast
              </a>
              , has published&nbsp;
              <a href="https://www.amazon.com/s?i=stripbooks&rh=p_30%3Afaith+matters+publishing&s=review-count-rank&Adv-Srch-Books-Submit.x=42&Adv-Srch-Books-Submit.y=16&qid=1658089502&unfiltered=1&ref=sr_st_review-count-rank&ds=v1%3A5zjJ%2Bycpfhx5C8m%2BgxfokHRvABgajtx0GNrHTkyXtqo">
                four books
              </a>
              &nbsp;and&nbsp;
              <a href="https://transformationsoffaith.org">one online course</a>
              , and holds{" "}
              <a href="https://faithmatters.org/restore">
                in-person gatherings
              </a>
              . Much more will be coming in the months and years ahead.
            </P>
            <P size="small">
              <a href="https://faithmatters.org">Visit Faith Matters website</a>
            </P>
          </Project>
          <Project title="timchaves.com" dates="2017&ndash;present">
            <P size="small">
              You’re already here! I’ve written some articles over the years and
              lately have been finding time to write more.
            </P>
            <P size="small">
              I send an email out to subscribers when I write a new article.{" "}
              {/* Todo: Audio, part two? */}
            </P>
            <P size="small">
              <Link to="/#subscribe">Sign up for the newsletter</Link>
            </P>
          </Project>
          <Project
            imgSrc="/images/logo-zipbooks.svg"
            imgAlt="ZipBooks logo"
            imgDarkAvailable={true}
            dates="2015&ndash;2020"
          >
            <P size="small">
              ZipBooks is online small business accounting software. I founded
              the company with a great team of people in 2015 and served as CEO.
            </P>
            <P size="small">
              ZipBooks was acquired by expense management platform Divvy in
              2019, where I worked until 2020 (Divvy was subsequently acquired
              by Bill.com).
            </P>
            <P size="small">
              <a href="https://zipbooks.com">Visit ZipBooks website</a>
            </P>
          </Project>
        </div>
        <div>
          <H1 className="mt-16 mb-12 text-center">Education</H1>
          <Project
            imgSrc="https://timchaves.imgix.net/logo-hbs.png"
            imgAlt="Harvard Business School logo"
            imgDimensions={{ width: 835, height: 1982 }}
            imgDarkAvailable={true}
            imgClassName="h-16 w-auto"
            dates="Class of 2015"
          >
            <P size="small">
              I spent a couple of really formative years earning an MBA at
              Harvard Business School in Boston, graduating with distinction in
              2015.
            </P>
            <P size="small">
              The people I met were diverse, brilliant, and dedicated to
              creating a better world. Many became lifelong friends.
            </P>
            <P size="small">
              I will always be grateful to HBS helping me launch my
              entrepreneurial career and introducing me to people who would be
              pivotal in my journey.
            </P>
            {/* <P size="small">
              <a href="https://www.hbs.edu/mba/blog/post/4-things-you-should-know-about-entrepreneurship-at-hbs">
                Read my article about entrepreneurship at HBS
              </a>
            </P> */}
          </Project>
          <Project
            imgSrc="/images/logo-byu.svg"
            imgAlt="Brigham Young University logo"
            imgDarkAvailable={true}
            dates="Class of 2008"
          >
            <P size="small">
              I graduated BYU's David M. Kennedy Center for International
              Studies in 2008, graduating summa cum laude and as class
              valedictorian.
            </P>
            <P size="small">
              I have a deep love for BYU and continue to associate closely with
              many great people there through my work at Faith Matters.
            </P>
          </Project>
        </div>
      </GridMainBody>
    </Grid>
  );
};

export default About;
