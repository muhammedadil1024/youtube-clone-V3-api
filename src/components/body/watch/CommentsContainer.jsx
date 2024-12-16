import Comment from "./Comment";


const commentsData = [
    {
        id: 1,
        name: "User Name",
        text: "This is the first comment from youtube comment section",
        replies: [],
    },
    {
        id: 2,
        name: "User Name",
        text: "This is the second comment from youtube comment section and this have nested comments",
        replies: [
            {
                id: 7,
                name: "User Name",
                text: "This is the first nested comment from comment section",
                replies: [],
            },
            {
                id: 8,
                name: "User Name",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
                replies: [
                    {
                        id: 9,
                        name: "User Name",
                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
                        replies: [
                            {
                                id: 10,
                                name: "User Name",
                                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
                                replies: [
                                    {
                                        id: 11,
                                        name: "User Name",
                                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
                                        replies: [
                                            {
                                                id: 14,
                                                name: "User Name",
                                                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
                                                replies: [],
                                            },
                                        ],
                                    },
                                    {
                                        id: 12,
                                        name: "User Name",
                                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
                                        replies: [],
                                    },
                                    {
                                        id: 13,
                                        name: "User Name",
                                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
                                        replies: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: "User Name",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
        replies: [],
    },
    {
        id: 4,
        name: "User Name",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
        replies: [],
    },
    {
        id: 5,
        name: "User Name",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
        replies: [],
    },
    {
        id: 6,
        name: "User Name",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis corporis laborum ratione expedita",
        replies: [],
    },
];

// Nested Comments component
const CommentsList = ({ comments }) => {
    return comments.map((comment) => (
        <div key={comment.id}>
            <Comment data={comment} />
            <div className="pl-2 md:pl-5 border-l-2 ml-5 md:ml-11">
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
    return (
        <div className="w-full my-3 md:max-w-[56rem]">
            <hr className="border-t-2 mb-2" />
            <h3 className="mt-6 font-bold text-xl md:text-2xl">Comments</h3>
            <CommentsList comments={commentsData} />
        </div>
    );
}

export default CommentsContainer