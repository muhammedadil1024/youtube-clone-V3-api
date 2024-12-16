const Button = ({ item }) => {

    return (
            <button type="button" className="bg-gray-100 px-3 py-[0.2rem] rounded-lg inline-block font-semibold">
                {item}
            </button>
    );
};

export default Button