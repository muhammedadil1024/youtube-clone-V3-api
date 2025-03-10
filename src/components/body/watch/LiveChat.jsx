import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../utils/redux/chatSlice";
import { generateRandomMessage, generateRandomName } from "../../../utils/helper";
// static images
import commentUser2 from "../../../assets/comment-user2.png";

const LiveChat = () => {
    const dispatch = useDispatch();
    // subscribing chatSlice
    const chatMessages = useSelector((store) => store.chat.messages);

    // displaying live chat messages 
    useEffect(() => {
        const pollingTime = setInterval(() => {
            // Api Polling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage(20) + "✌️",
                })
            );
        }, 1000);

        return () => {
            clearInterval(pollingTime);
        };
    }, [dispatch]);

    return (
        <>
            {chatMessages.map((msg, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 px-2 md:px-6 py-2 hover:bg-[#f1f1f1]">
                    <img src={commentUser2} className="w-7 md:w-8" alt="User icon" />
                    <h1 className="text-[#606060] font-semibold">{msg.name}:</h1>
                    <p>{msg.message}</p>
                </div>
            ))}
        </>
    );
}

export default LiveChat