import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout/layout';

const Item = ({ data }) => {
  return (
    <Layout>
      {data.title}
    </Layout>
  );
};

Item.getInitialProps = async ({ query: { id } }) => {
  // https://hn.algolia.com/api
  const res = await fetch(`https://hn.algolia.com/api/v1/items/${id}`);
  const data = await res.json();

  return { data };
};

export default Item;