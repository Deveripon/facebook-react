import { CgClose } from "react-icons/cg";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
const Post = () => {
    return (
        <>
            <div className="post bg-white rounded-md p-4 border border-gray-200 shadow-md">
                <div className="container">
                    <div className="top flex justify-between ">
                        <div className="left flex gap-3">
                            <div className="user-image h-[50px] w-[50px]">
                                <a href="/feed" className="rounded-full">
                                    <img
                                        className="rounded-full"
                                        src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/411080298_3671809989720838_6139402775500066882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEaeROCMhxd9EAavCkNuoXYNl-09TEM3BY2X7T1MQzcFpPwanjARoOlACnDtKXuknTRWrb2o9vEZRHD1jbHag0S&_nc_ohc=ldMUB0eZNgsAX_cfo0X&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDxndVTqED2qCeDyupsD3ky-MLSbb2U48VYZSy9U-EDYw&oe=65877E48"
                                        alt="facebook-icon"
                                    />
                                </a>
                            </div>
                            <div className="user-info">
                                <h2 className="name font-semibold text-[15px]">
                                    Shahadat Hussain Ripon
                                </h2>
                                <div className="details flex text-gray-600 justify-start items-center gap-1">
                                    <div className="time">
                                        <p>38min</p>
                                    </div>
                                    <div className="privacy">
                                        <HiUsers />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right flex gap-8">
                            <a href="">
                                {" "}
                                <HiOutlineDotsHorizontal />
                            </a>
                            <a href="">
                                {" "}
                                <CgClose />
                            </a>
                        </div>
                    </div>
                    <div className="content my-3">
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At sequi
                                veniam ducimus exercitationem praesentium, nihil quos culpa
                                recusandae soluta, error vel voluptatibus dolor dolores sapiente
                                vero aliquid expedita fugit dolore.
                            </p>
                        </div>
                        <div className="media mt-3">
                            <img
                                src="https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/412693480_10163328476833574_488419176385018328_n.jpg?stp=dst-jpg_p843x403&_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHDxStSeqDwk3rbsxBzmzjjVZUrEHI1SKRVlSsQcjVIpGlIAgX-2mIJLYHvU5jPem9dHKL3GCLygNQz0CjFunXz&_nc_ohc=WgmvTmi1KU0AX_TZEc-&_nc_ht=scontent.fdac24-4.fna&oh=00_AfA1KWWzylgHHUiGUAPQ4GuGua_e0Ra0-YMrL1EsYfPxjA&oe=6586FCE2"
                                alt="post-image"
                            />
                        </div>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        </>
    );
};

export default Post;
