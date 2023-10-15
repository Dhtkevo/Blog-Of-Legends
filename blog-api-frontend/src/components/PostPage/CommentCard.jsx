import { useContext } from "react";
import { UserContext } from "../../App";

function CommentCard({ text, author_name }) {
  const user = useContext(UserContext);

  return (
    <div className="border-2 border-darkishgreen p-4 rounded-xl min-h-min  w-4/5 shadow-md flex flex-col gap-2 bg-navblack">
      {user ? (
        <h2 className="text-lightishgreen text-center font-bold">
          {author_name}
        </h2>
      ) : (
        <h2 className="text-lightishgreen text-center font-bold">Anonymous</h2>
      )}
      <p className="text-textsilver">{text}</p>
    </div>
  );
}

export default CommentCard;
