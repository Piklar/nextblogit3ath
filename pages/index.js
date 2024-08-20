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
        <p>Hello, I'm <strong> Ernz</strong>. I am 21 years old.<br></br> I am a 3rd year IT-Student. <br></br>Gutom na ako at ready na umuwi. </p>
        <p>In the near future, Sana masanay ako mag code and gumawa ng System. Para matawag ko sarili ko na magaling. :D</p>
        <p>
          (Inaaral ko palang <strong>LAHAT</strong> - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" target='blank_'>our Next.js tutorial</a>.)
        </p>
        <hr></hr>

        <img src="https://www.vets4pets.com/siteassets/species/cat/kitten/cat-and-kitten-snuggling.jpg?w=585&scale=down" alt="SHIKANOKO NOKO KOSHITANTAN" width={550}></img>
        <p>
          ANG KYOT NUNG PUSA SA TAAS. AHHHHHHHHH
        </p>
        <hr></hr>
        <h3>
          Hobbies
        </h3>
          <ul>
            <li>Eating
              <p>
                I love eating. It makes my life happy!
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
        
      </section>
    </Layout>
  );
}