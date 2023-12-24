import Divider from "./Divider";
import UserImage from "../../../assets/images/ripon.jpg";

const CreatePost = ({ showModal }) => {
    return (
        <div className="create-post-section shadow-md border border-gray-200  bg-white p-3 my-5 rounded-md">
            <div className="top flex items-center">
                <div className="user-image h-[60px] w-[60px]">
                    <a href="/feed" className="rounded-full">
                        <img className="rounded-full" src={UserImage} alt="facebook-icon" />
                    </a>
                </div>
                <button
                    onClick={showModal}
                    className="bg-gray-200 flex justify-start items-center px-5 ml-3  py-[8px] rounded-full w-full">
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
