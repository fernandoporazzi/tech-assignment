import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/layout';

const Home = ({ data }) => {
  return (
    <Layout>
      <ul>
        {data.hits.map((it, index) => {
          return <li key={it.objectID}>{index + 1}. {it.title}</li>
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