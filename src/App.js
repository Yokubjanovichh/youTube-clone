import React from "react";
import { useState, useEffect } from "react";

import { SearchBar, VideoDetails, VideoList } from "./components";
import { Grid } from "@mui/material";
import youtube from "./api/youtube";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("masha uzbek");

  useEffect(() => {
    const fetchData = async () => {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 6,
          key: "AIzaSyD9eA0sq8jXDIk2WxWbdPsW92MEt1UBt1A", // O'zingizning API kalitingizni kiritng
          q: searchTerm,
        },
      });

      setVideos(response.data.items);
      setSelectedVideo(response.data.items[0]);
    };

    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  const handleSubmit = (termFromSearchBar) => {
    setSearchTerm(termFromSearchBar);
  };
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
