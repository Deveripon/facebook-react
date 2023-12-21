const Story = ({ storyimage, username, userimage }) => {
    return (
        <div
            className={`strory-block h-[260px] min-w-[150px] rounded-xl relative bg-[url(https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D)] hover:bg-[100px 100px] `}
            style={{
                objectFit: "contain",
                backgroundSize: "280px 290px",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
            }}>
            <div className="overflow absolute top-0 bottom-0 left-0 right-0 transform duration-100 hover:bg-gray-800 opacity-20 rounded-xl"></div>
            <div className="contact flex  gap-4 items-center transform duration-100 cursor-pointer py-2 px-3 rounded-md">
                <img
                    className="h-14 w-14 rounded-full relative border-[6px] border-primary"
                    src={`${userimage}`}
                    alt="user-image"
                />
                <div className="active-status border-[4px] border-white bg-green-600 w-4 h-4 rounded-full absolute bottom-[6px] left-[43px]"></div>
            </div>
            <div className="name absolute bottom-0 text-[14px] px-4 text-white font-semibold">
                <a href="">
                    {" "}
                    <p>{`${username}`}</p>
                </a>
            </div>
        </div>
    );
};

export default Story;
