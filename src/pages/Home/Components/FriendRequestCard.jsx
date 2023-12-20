const FriendRequestCard = ({ name = "friend name", image, mutual = "2", time = "2d" }) => {
    return (
        <div className="friend-requiest-card flex gap-3 p-3 hover:bg-gray-200 transform duration-100 rounded-xl">
            <div className="img">
                <img className="object-cover rounded-full" src={image} alt="user-image" />
            </div>
            <div className="info">
                <div className="user-name flex justify-between">
                    <h2 className="text-[16px] font-semibold">{name}</h2>
                    <p className="time text-gray-600">{time}</p>
                </div>
                <div className="mutual">
                    <h3 className="text-gray-700 text-[14px]">{mutual} mutual friends</h3>
                </div>
                <div className="button-group mt-5 flex gap-4">
                    <button className="bg-primary text-white px-8 py-[6px] font-semibold rounded-md">
                        Confirm
                    </button>
                    <button className="bg-gray-300 text-black px-8 py-[6px] font-semibold rounded-md">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FriendRequestCard;
