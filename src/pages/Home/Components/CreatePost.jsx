import Divider from "./Divider";

const CreatePost = () => {
    return (
        <div className="create-post-section shadow-md border border-gray-200  bg-white p-3 my-5 rounded-md">
            <div className="top flex items-center">
                <div className="user-image h-[60px] w-[60px]">
                    <a href="/feed" className="rounded-full">
                        <img
                            className="rounded-full"
                            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/411080298_3671809989720838_6139402775500066882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEaeROCMhxd9EAavCkNuoXYNl-09TEM3BY2X7T1MQzcFpPwanjARoOlACnDtKXuknTRWrb2o9vEZRHD1jbHag0S&_nc_ohc=ldMUB0eZNgsAX_cfo0X&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDxndVTqED2qCeDyupsD3ky-MLSbb2U48VYZSy9U-EDYw&oe=65877E48"
                            alt="facebook-icon"
                        />
                    </a>
                </div>
                <button className="bg-gray-200 flex justify-start items-center px-5 ml-3  py-[8px] rounded-full w-full">
                    Whats on your mind, Md Shahadat ?
                </button>
            </div>
            <Divider />
            <div className="button-group px-[40px] flex justify-between items-center">
                <button className="flex gap-2 hover:bg-gray-200 p-2 rounded-md px-5">
                    <img
                        height="24"
                        width="24"
                        alt=""
                        class="xz74otr"
                        referrerpolicy="origin-when-cross-origin"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png?_nc_eui2=AeEQ6VhRUFI8zvfalyN6VrPI3Eh3Wgl8GJPcSHdaCXwYk0Xc9hzOgLJcTL-C-sXLvLFeOL-LPwYcCWOIIugnM2dR"
                    />
                    <span className="text-gray-700 font-semibold text-[15px] ">Live video</span>
                </button>
                <button className="flex gap-2 hover:bg-gray-200 p-2 rounded-md px-5">
                    <img
                        height="24"
                        width="24"
                        alt=""
                        class="xz74otr"
                        referrerpolicy="origin-when-cross-origin"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png?_nc_eui2=AeFLENg-niGeT8R64_0igbkwfK5Z1qDG7FV8rlnWoMbsVRs_V_SHINF6bJeTnGmbu5jSaxiPdmz3NAZrTa869NW-"
                    />
                    <span className="text-gray-700 font-semibold text-[15px] ">Photo/video</span>
                </button>
                <button className="flex gap-2 hover:bg-gray-200 p-2 rounded-md px-5">
                    <img
                        height="24"
                        width="24"
                        alt=""
                        class="xz74otr"
                        referrerpolicy="origin-when-cross-origin"
                        src="https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/eQV2iXPmmtj.png?_nc_eui2=AeHbXxL2okArY7M0ZnnCL1H1CQLHsh12NTkJAseyHXY1OUdXMdDZLSB0f3RMkBHgFoTnmxZFMjFzMUaDi5kLuxoI"
                    />
                    <span className="text-gray-700 font-semibold text-[15px] ">Reel</span>
                </button>
            </div>
        </div>
    );
};

export default CreatePost;
