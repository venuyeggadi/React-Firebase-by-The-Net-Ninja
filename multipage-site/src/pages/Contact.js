import { useLocation } from "react-router-dom";

const Contact = () => {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name} Contact us here...</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio temporibus perferendis accusamus autem porro amet ea ipsa, nihil vero dolore minima culpa fugit, accusantium in laboriosam repellat dolorum voluptate expedita.</p>
    </div>
  );
}
 
export default Contact;