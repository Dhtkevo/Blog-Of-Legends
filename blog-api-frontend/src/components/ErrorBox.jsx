function ErrorBox({ message }) {
  return (
    <div className="border-2 border-lightishgreen p-4 bg-coalblack">
      <h2 className="font-bold text-2xl text-textsilver">{message}</h2>
    </div>
  );
}

export default ErrorBox;
