import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Post {
  id: number;
  title: string;
  body: string;
}

axios.get(url).then((res) => {
  const post = res.data as Post;

  const id = post.id;
  const title = post.title;
  const body = post.body;

  logPost(id, title, body);
});

const logPost = (id: number, title: string, body: string) => {
  console.log(`
  The Post with ID: ${id}
  Has a title of: ${title}
  And has a body: ${body}
`);
};
