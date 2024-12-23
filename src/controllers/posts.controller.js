import { insertPost, getPosts } from '../services/db.service.js';

// Fetch data from external API and store it in the database
export const fetchAndStorePosts = async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const posts = await response.json();

    for (const post of posts) {
      await insertPost(post.userId, post.title, post.body);
    }

    res.send('Data fetched and stored successfully!');
  } catch (error) {
    console.error('Error fetching or storing data:', error);
    res.status(500).send('An error occurred while processing your request.');
  }
};

// Fetch and return posts from the database
export const displayPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).send('An error occurred while fetching data.');
  }
};
