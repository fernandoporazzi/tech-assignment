import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import Layout from '../components/layout/layout';

const UserComment = styled.div`
  margin-left: 25px;
  margin-top: 10px;
  font-size: 13px;
  font-family: Verdana, Geneva, sans-serif;
  background: #efefef;
  border-radius: 10px;
  padding: 30px;
`
const CommentHeader = styled.div`
  color: #999;
  font-size: 12px;
`

const Comment = ({ comment, style }) => {
  const nestedComments = (comment.children || []).map(comment => {
    return <Comment key={comment.id} comment={comment} type="child" style={{background: 'white'}} />
  });
 
  return (
    <UserComment style={style}>
      <CommentHeader>
        {comment.author} - {comment.created_at}
      </CommentHeader>
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