import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import Layout from '../components/layout/layout';
import styled from 'styled-components'

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: Verdana, Geneva, sans-serif;
`;

const Stats = styled.div`
  color: #999;
  font-size: 12px;

  a {
    color: inherit;
  }
`;

const Home = ({ data }) => {
  return (
    <Layout>
      <Ul>
        {data.hits.map((it, index) => {
          return (
            <li key={it.objectID}>
              <Link href={`/items?id=${it.objectID}`} as={`/items/${it.objectID}`}>
                <a>
                  {index + 1}. {it.title}
                </a>
              </Link>
              <Stats>
                <p>
                  {it.points} points by <a href="#">{it.author}</a> - <Link href={`/items?id=${it.objectID}`} as={`/items/${it.objectID}`}><a>{it.num_comments} comments</a></Link>
                </p>
              </Stats>
            </li>
          )
        })}
      </Ul>
    </Layout>
  );
};

Home.getInitialProps = async ({ query: { tag } }) => {
  // https://hn.algolia.com/api
  const res = await fetch(`https://hn.algolia.com/api/v1/search?tags=${tag || 'story'}`);
  const data = await res.json();

  return { data };
};

export default Home;