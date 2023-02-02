import React from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap';
import type Post from './PostType';

type OnePostCardProps = {
  post: Post;
};

export default function OnePostCard({ post }: OnePostCardProps): JSX.Element {
  return (
    <Card
      className="my-2"
      style={{
        width: '18rem',
      }}
    >
      <CardHeader>{post.id}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">{post.title}</CardTitle>
        <CardText>{post.body}</CardText>
        <Button>Show this post</Button>
      </CardBody>
      <CardFooter>{post.userId}</CardFooter>
    </Card>
  );
}
