import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/layout';

const Home = ({items}) => {
  return (
    <Layout>
      <ul>
        {items.map(it => {
          return <li key={it.id}>{it.title}</li>
        })}
      </ul>
    </Layout>
  );
};

Home.getInitialProps = async ({ req }) => {
  // fetch top stories ids
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  let items = await res.json();

  // due to performance issues, I am using only 10 items
  items = items.slice(0, 10);

  // fetch data for each of the 10 items
  let d;
  let promises = items.map(item => fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`).then(y => y.json()));
  
  await Promise.all(promises).then(results => {
    d = results;
  });

  return { items: d };
};

export default Home;