function CommentCard({ text, author_name }) {
  return (
    <div className="p-4 rounded-xl min-h-min  w-4/5 shadow-md flex flex-col gap-2">
      <h2 className="text-center font-bold">{author_name}</h2>
      <p className="">{text}</p>
    </div>
  );
}

export default CommentCard;
