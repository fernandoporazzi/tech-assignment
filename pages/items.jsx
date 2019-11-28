import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Layout from '../components/layout/layout';

const UserComment = styled.div`
  margin-left: 25px;
  margin-top: 10px;
`

const Comment = ({ comment }) => {
  const nestedComments = (comment.children || []).map(comment => {
    return <Comment key={comment.id} comment={comment} type="child" />
  });
 
  return (
    <UserComment>
      <div style={{color: 'red'}}>
        {comment.author} - {comment.created_at}
      </div>
      <div dangerouslySetInnerHTML={{__html: comment.text}} />
      {nestedComments}
    </UserComment>
  )
};

const Item = ({ data }) => {
  return (
    <Layout>
      <h2>{data.title}</h2>
      
      <form action="">
        <textarea></textarea>
        <button type="submit">add comment</button>
      </form>

      <div>
        {data.children.map((item, index) => {
          return <Comment key={item.id} comment={item} />
        })}
      </div>
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