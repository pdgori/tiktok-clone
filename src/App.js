import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./components/Video/Video";

import database from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const unsubscribe = database.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((video) => video.data()));
    });

    return () => unsubscribe();
  }, []);

  return (
    //BEM
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({
            url,
            description,
            channel,
            id,
            song,
            likes,
            messages,
            shares,
          }) => (
            <Video
              key={id}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
