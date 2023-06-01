import { useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "torix",
      caption: "uau, isso funciona",
      imageUrl:
        "https://freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
    {
      username: "torix",
      caption: "uau, isso funciona",
      imageUrl:
        "https://freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    },
  ]);

  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
        <h1>ESSE SERA UM CLONE DO INSTAGRAM</h1>
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
        <Post
          username="torix"
          caption="uau, isso funciona"
          imageUrl="https://freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        />
        <Post
          username="coelhinhaa__"
          caption="é verdade"
          imageUrl="https://freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
        />
        <Post username="yMaclem" caption="uau" />
      </div>
    </div>
  );
}

export default App;
