import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p align="center">Hello, My Name is Ernz Danielle Manalo.<br></br> I am 21 Years Old.<br></br> I live at Mexico, Pampanga.<br></br> I am currently a 3rd year IT Student studying at <br></br>University of the Assumption. </p>
        
        <hr></hr>
        <h3>
          Hobbies
        </h3>
          <ul>
            <li>Eating
              <p>
                I love eating. It makes my life happy! Yay!
              </p>
            </li>

            <li>Running
              <p>
                I love running. Sweat makes me feel good!
              </p>
            </li>

            <li>Sleeping
              <p>
                I love sleeping. It makes me feel so sooo good!
              </p>
            </li>
          </ul>

          <hr></hr>

          <h3>Favorite Song</h3>
          <p>
            My Favorite music as of now is Mundo by IVOS.
          </p>

          <hr></hr>

          <h3>Favorite Food</h3>
          <p>
            My Favorite food is Pork Tonkatsu.
          </p>

          <hr></hr>

          <h3>More information about me</h3>
          <p>
            I believe that I have leadership as my strong side as well as being able to communicate with other people. I believe that I can still push myself into a better programmer. I just need ample amount of motivation to keep me going. 
          </p>

          <hr></hr>

          <h3>
            Why did I take IT?
          </h3>
          <p>
            I took IT as I was fascinated with the works of how they move, operate, and function. I also believe that being in the IT industry is a great move due to the progressive world we are living.
          </p>

          <hr></hr>

          <h3>
            What career I am exploring after graduating.
          </h3>
          <p>
            I can see myself being a Back-end Developer. I do find doing those tasks mind-challenging and exciting. I do think after mastering it, I could go Full-Stack Developer.
          </p>

          <hr></hr>

          <h3>What I expect in this subject?</h3>
          <p>
            I expect that this subject will teach me the fundamentals of making a proper system. This subject will develop me to be better, faster, and quicker than my previous years in terms of coding.            
          </p>

          <hr></hr>

          <h3>
            What are the topics I want to discuss?
          </h3>
          <p>
            I would like to have an in-depth understanding regarding different types of Programming Languages as well as how I can understand and mix them all together. I would like to learn how they connect and function with one another.
          </p>

          <hr></hr>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" target='blank_'>our Next.js tutorial</a>.)
        </p>

      </section>
    </Layout>
  );
}