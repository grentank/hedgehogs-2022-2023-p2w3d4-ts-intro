import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import type Post from './PostType';
import OnePostCard from './OnePostCard';

function App(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then((res: { data: Post[] }) => setPosts(res.data))
      .catch(console.log);
  }, []);
  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <OnePostCard post={post} key={post.id} />
        ))}
      </Row>
    </Container>
  );
}

export default App;
