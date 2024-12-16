import Button from "./Button"

const filterContent = [
    {
        id: 0,
        text:"Music",
    },
    {
        id: 1,
        text:"Sports",
    },
    {
        id: 2,
        text:"Entertainment",
    },
    {
        id: 3,
        text:"Comedy",
    },
    {
        id: 4,
        text:"Javascript",
    },
    {
        id: 5,
        text:"Latest",
    },
    {
        id: 6,
        text:"Podcasts",
    },
    {
        id: 7,
        text:"History",
    },
    {
        id: 8,
        text:"News",
    },
    {
        id: 9,
        text:"Kerala",
    },
    {
        id: 10,
        text:"Gaming",
    },
    {
        id: 11,
        text:"T-Series",
    },
];

const FilterButtons = () => {
    return (
        <div className="flex justify-center gap-[0.7rem] md:gap-[0.9rem] mt-2 overflow-auto whitespace-nowrap md:hidden lg:flex no-scrollbar">
            {filterContent.map((item) => (
                <Button key={item.id} item={item.text} />
            ))}
        </div>
    );
}

export default FilterButtons