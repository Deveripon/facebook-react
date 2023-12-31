import Divider from "./Divider";
import Heading from "./Heading";
import { FaAngleDown } from "react-icons/fa6";
import UserImage from "../../../assets/images/ripon.jpg";
const SectionLeft = () => {
    return (
        <div className="left-section fixed top-[75px] h-screen w-[20%] ml-5 overflow-y-scroll">
            <div className="shortcusts-list">
                <ul className="flex flex-col gap-3">
                    <li className="">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div className="user-image h-10 w-10">
                                <img
                                    className="w-full user-image"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "100%",
                                    }}
                                    src={UserImage}
                                    alt="user-image"
                                />
                            </div>
                            <span className="user-name">Md shahadat hussain ripon</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFtawKEvhWxE3h-iBqLBJsZpjWidniF_5qmNaJ2eIX_mnRhd2t39KdxAldQM6SutFX3wl9n0Z1Nl3C5uGT5yuFK")',
                                    backgroundPosition: "0px -304px",
                                    backgroundSize: "38px 570px",
                                    width: "36px",
                                    height: "36px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}></div>
                            <span className="title">Friends</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div>
                                <img
                                    draggable="false"
                                    height="36"
                                    width="36"
                                    alt=""
                                    class="xz74otr"
                                    referrerpolicy="origin-when-cross-origin"
                                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png?_nc_eui2=AeFfeQmAQLy99U2GapqlblOj9As6vsZg84r0Czq-xmDzineb-vvRBleLFOpi7VL7UzXOMdEkQFoElrfaHcjQAQ2Y"
                                />
                            </div>
                            <span className="title">Feeds</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFtawKEvhWxE3h-iBqLBJsZpjWidniF_5qmNaJ2eIX_mnRhd2t39KdxAldQM6SutFX3wl9n0Z1Nl3C5uGT5yuFK")',
                                    backgroundPosition: "0px -38px",
                                    backgroundSize: "38px 570px",
                                    width: "36px",
                                    height: "36px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}></div>
                            <span className="title">Groups</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFtawKEvhWxE3h-iBqLBJsZpjWidniF_5qmNaJ2eIX_mnRhd2t39KdxAldQM6SutFX3wl9n0Z1Nl3C5uGT5yuFK")',
                                    backgroundPosition: "0px -418px",
                                    backgroundSize: "38px 570px",
                                    width: "36px",
                                    height: "36px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}></div>
                            <span className="title">Marketplace</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFtawKEvhWxE3h-iBqLBJsZpjWidniF_5qmNaJ2eIX_mnRhd2t39KdxAldQM6SutFX3wl9n0Z1Nl3C5uGT5yuFK")',
                                    backgroundPosition: "0px -532px",
                                    backgroundSize: "38px 570px",
                                    width: "36px",
                                    height: "36px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}></div>
                            <span className="title">Video</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFtawKEvhWxE3h-iBqLBJsZpjWidniF_5qmNaJ2eIX_mnRhd2t39KdxAldQM6SutFX3wl9n0Z1Nl3C5uGT5yuFK")',
                                    backgroundPosition: "0px -456px",
                                    backgroundSize: "38px 570px",
                                    width: "36px",
                                    height: "36px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}></div>
                            <span className="title">Memories</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div
                                style={{
                                    backgroundImage:
                                        'url("https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFtawKEvhWxE3h-iBqLBJsZpjWidniF_5qmNaJ2eIX_mnRhd2t39KdxAldQM6SutFX3wl9n0Z1Nl3C5uGT5yuFK")',
                                    backgroundPosition: "0px -190px",
                                    backgroundSize: "38px 570px",
                                    width: "36px",
                                    height: "36px",
                                    backgroundRepeat: "no-repeat",
                                    display: "inline-block",
                                }}></div>
                            <span className="title">Saved</span>
                        </a>
                    </li>
                    <li className="list=items">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div className="bg-gray-200 p-[10px] rounded-full">
                                <FaAngleDown />
                            </div>
                            <span className="title">See More</span>
                        </a>
                    </li>
                    <Divider />
                    <Heading>Your Shortcuts</Heading>
                    <li className="">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div className="user-image h-10 w-10">
                                <img
                                    className="w-full user-image"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "100%",
                                        objectFit: "cover",
                                    }}
                                    src="https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png"
                                    alt="user-image"
                                />
                            </div>
                            <span className="user-name">Sorobindu Mern Stack Batch 3</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div className="user-image h-10 w-10">
                                <img
                                    className="w-full user-image"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "100%",
                                        objectFit: "cover",
                                    }}
                                    src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/358154965_10224592456098633_4500065646742064890_n.png?stp=dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=173fa1&_nc_eui2=AeEdOUjZjRa0kbDbaJ3lu1JDk-apYoG8EI-T5qligbwQj-tjW9Cdr-5msN1cHiEhWuz0pP6OMKNhaIoJ5iwrC38_&_nc_ohc=RdDumL6LgAcAX-2TCQB&_nc_ht=scontent.fdac24-1.fna&oh=00_AfBoWcaBk8jp4fyrAqcpsLB3xYbSJe816pbsw7MoRGvYkQ&oe=658860F0"
                                    alt="user-image"
                                />
                            </div>
                            <span className="user-name">devzZone</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div className="user-image h-10 w-10">
                                <img
                                    className="w-full user-image"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "100%",
                                        objectFit: "cover",
                                    }}
                                    src={UserImage}
                                    alt="user-image"
                                />
                            </div>
                            <span className="user-name">Learn With Sumit</span>
                        </a>
                    </li>
                    <li className="">
                        <a href="#" className="flex justify-start items-center gap-2">
                            <div className="user-image h-10 w-10">
                                <img
                                    className="w-full user-image"
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        borderRadius: "100%",
                                        objectFit: "cover",
                                    }}
                                    src={UserImage}
                                    alt="user-image"
                                />
                            </div>
                            <span className="user-name">Learn With Sumit</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SectionLeft;
