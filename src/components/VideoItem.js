import React from "react";

import { Grid, Paper, Typography } from "@mui/material";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <Grid item xs={12}>
      <Paper elevation={6} style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
        <img width="50%" style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle2">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}
