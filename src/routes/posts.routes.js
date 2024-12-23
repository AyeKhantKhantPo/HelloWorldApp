import express from 'express';
import { fetchAndStorePosts, displayPosts } from '../controllers/posts.controller.js';

const router = express.Router();

// Route to fetch and store posts
router.get('/fetch-and-store', fetchAndStorePosts);

// Route to display posts
router.get('/display', displayPosts);

export default router;
