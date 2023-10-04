function CommentCard({text}) {
    return (
        <div className="p-4 rounded-xl min-h-min  w-4/5 shadow-md flex flex-col gap-2">
            <h2 className="text-center font-bold">Anonymous</h2>
            <p className="">{text}</p>
        </div>
    )
}

export default CommentCard;