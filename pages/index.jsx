import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import Layout from '../components/layout/layout';

const Home = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.hits.map((it, index) => {
          return (
            <li key={it.objectID}>
              <Link href={`/items?id=${it.objectID}`} as={`/items/${it.objectID}`}>
                <a>
                  {index + 1}. {it.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  // https://hn.algolia.com/api
  const res = await fetch('https://hn.algolia.com/api/v1/search?tags=story');
  const data = await res.json();

  return { data };
};

export default Home;