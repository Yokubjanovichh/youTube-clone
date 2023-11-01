import React from "react";

import { Paper, Typography } from "@mui/material";

export default function VideoDetails({ video }) {
  if (!video) return <div>Loading...</div>;

  console.log(video);

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe allowFullScreen height="100%" width="100%" title="Video palyer" src={videoSrc}></iframe>
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="h6">{video.snippet.title}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
}
