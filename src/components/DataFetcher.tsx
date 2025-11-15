// src/components/DataFetcher.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress, Alert } from '@mui/material';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DataFetcher = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: Post = await response.json(); 
        setPost(result);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">Error: {error}</Alert>;
  }

  return (
    <Box sx={{ mt: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6">Fetched Post (ID: {post?.id})</Typography>
      <Typography variant="body1" sx={{ fontStyle: 'italic' }}>"{post?.title}"</Typography>
    </Box>
  );
};

export default DataFetcher;