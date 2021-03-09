import "./App.css";
import { BlogPost } from "./components/BlogPost.js";
import { AllPosts } from "./components/AllPosts";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route component={BlogPost} path="/:blogId" />
      </div>
    </BrowserRouter>
  );
}

export default App;
