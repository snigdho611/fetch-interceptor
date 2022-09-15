import { useEffect, useState } from "react";
import { interceptor } from "./intercept";

function App() {
  const [data, setData] = useState(null);
  const [intercept, setIntercept] = useState(false);

  useEffect(() => {
    if (intercept) {
      console.log(intercept)
      interceptor();
    }
  }, [intercept]);

  const onClickPosts = () => {
    fetch(`https://dummyjson.com/posts?limit=10`, { method: "GET" })
      .then((response) => response.json())
      .then((JSON) => {
        console.log(JSON);
        return setData(JSON);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="main">
      <div>
        <button
          onClick={() => {
            onClickPosts();
          }}
        >
          Posts
        </button>
        <button value="intercept" onClick={(e) => { setIntercept(!intercept); }}>Intercept</button>
      </div>
      <div>{intercept ? "Posts will now be rerouted to quotes" : null}</div>
      <div className="main__container">
        <div className="main__container__content">
          <div className="main__container__content__cell">
            {data && data.posts ? null : "Posts will appear here, none to show now"}
            {data && data.posts && data.posts.map((element, i) => {
              return (
                <div
                  key={i}

                >
                  <span style={{ fontWeight: "bold", fontSize: "17px" }}>{element.title}</span>
                  <span>{element.body}</span>
                  <span>Tags: {element.tags && element.tags.join()}</span>
                </div>
              );
            })}</div>
          <div className="main__container__content__cell">
            {data && data.quotes ? null : "Quotes will appear here, none to show now"}
            {data && data.quotes && data.quotes.map((element, i) => {
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                    margin: "1.25rem 0.75rem",
                  }}
                >
                  <span style={{ fontWeight: "bold", fontSize: "17px" }}>By: {element.author}</span>
                  <span style={{ fontStyle: "italic" }}>"{element.quote}"</span>
                </div>
              );
            })}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
