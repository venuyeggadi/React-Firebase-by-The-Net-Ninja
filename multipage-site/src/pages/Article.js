import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Article = () => {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 2000);
    }
  }, [error, history])

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h3>{article.title}</h3>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}

export default Article;