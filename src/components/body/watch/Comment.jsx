
const Comment = ({ data }) => {

    const { name, text } = data;

    return (
        <div className="my-5 flex items-center gap-5 ">
            <div>
                <img src="/src/assets/comment-user2.png" className="w-10" alt="User icon" />
            </div>
            <div>
                <h5 className="font-semibold text-base md:text-lg">{name}</h5>
                <p className="text-sm md:text-base">{text}</p>
            </div>
        </div>
    );
}

export default Comment