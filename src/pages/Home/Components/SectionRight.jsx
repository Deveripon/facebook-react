import { RxDotsHorizontal } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import ContactCard from "./ContactCard";
import Heading from "./Heading";
import Divider from "./Divider";
import FriendRequestCard from "./FriendRequestCard";
const SectionRight = () => {
    return (
        <div className="right-section  max-h-screen overflow-y-scroll">
            <div className="sponsord-section">
                <Heading>Sponsord</Heading>
                <div className="sponsord-item-area flex flex-col gap-4 my-3">
                    <div className="sponsord-item flex gap-2 justify-start items-center">
                        <img
                            className="w-[130px] rounded-md"
                            src="https://fabrilife.com/products/65707453f2a4c-square.jpg?v=20"
                            alt="product"
                        />
                        <div className="info flex justify-start  flex-col">
                            <p className="title text-[15px] text-gray-800">Fabrilife</p>
                            <a className="web text-[13px] text-gray-600" href="#">
                                fabrilife.com
                            </a>
                        </div>
                    </div>
                    <div className="sponsord-item flex gap-2 justify-start items-center">
                        <img
                            className="w-[130px] rounded-md"
                            src="https://fabrilife.com/products/6556068081c5a-square.jpeg?v=20"
                            alt="product"
                        />
                        <div className="info flex justify-start  flex-col">
                            <p className="title text-[15px] text-gray-800">Fabrilife</p>
                            <a className="web text-[13px] text-gray-600" href="#">
                                fabrilife.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="your-page-section">
                <div className="heading-group flex justify-between items-center">
                    <Heading>Your Page and profiles</Heading>
                    <a href="#">
                        <RxDotsHorizontal />
                    </a>
                </div>
                <ul className="my-4">
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
                                    src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/411080298_3671809989720838_6139402775500066882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEaeROCMhxd9EAavCkNuoXYNl-09TEM3BY2X7T1MQzcFpPwanjARoOlACnDtKXuknTRWrb2o9vEZRHD1jbHag0S&_nc_ohc=ldMUB0eZNgsAX_cfo0X&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDxndVTqED2qCeDyupsD3ky-MLSbb2U48VYZSy9U-EDYw&oe=65877E48"
                                    alt="user-image"
                                />
                            </div>
                            <span className="user-name">Md shahadat hussain ripon</span>
                        </a>
                    </li>
                </ul>
            </div>
            <Divider />
            <div className="friend-request-section">
                <div className="heading-group flex justify-between items-center">
                    <Heading>Friend Requests</Heading>
                    <a href="#" className="text-primary text-[15px]">
                        See all
                    </a>
                </div>
                <FriendRequestCard
                    name="Sohel Rana Abid"
                    image={
                        "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/411662272_122110111658144145_1377619597110706940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEWc-uTZoT1I4Yqsy-jNYx9InAPgjMrgoQicA-CMyuChIveK6ePekjjo5BG5tOS7M0ZdKvKz94RKUjYvgCjtpNG&_nc_ohc=hHTWT08notkAX8yLMbe&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDEvFRtxB2hR7kB_qiqRLcM1nAKG-5wdzSR7ZEwctWrcQ&oe=65870C02"
                    }
                    mutual="1"
                    time="2w"
                />
            </div>
            <Divider />
            <div className="contact-list-section">
                <div className="heading-group flex justify-between items-center">
                    <Heading>Contacts</Heading>

                    <div className="right flex justify-center gap-4">
                        <a href="">
                            {" "}
                            <IoIosSearch />
                        </a>
                        <a href="">
                            {" "}
                            <RxDotsHorizontal />
                        </a>
                    </div>
                </div>
                <div className="contact-list py-3">
                    <ContactCard
                        name="Sohel Rana Khan"
                        image={
                            "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/411662272_122110111658144145_1377619597110706940_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEWc-uTZoT1I4Yqsy-jNYx9InAPgjMrgoQicA-CMyuChIveK6ePekjjo5BG5tOS7M0ZdKvKz94RKUjYvgCjtpNG&_nc_ohc=hHTWT08notkAX8yLMbe&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDEvFRtxB2hR7kB_qiqRLcM1nAKG-5wdzSR7ZEwctWrcQ&oe=65870C02"
                        }
                    />
                    <ContactCard
                        name="Ashraful Haque"
                        image={
                            "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/362892067_684054283764504_1682452964279533265_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGAAqQfBY2tplDd4tAjB2CSfzL7MgkZ_8J_MvsyCRn_wsZ29_zcA192L4miGu7xRvIRZuQ4uSZQXqD4b0yj7PAi&_nc_ohc=al2wwJ2MtVYAX8Byjpm&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCtKplmcYjPzzRzsMTgVxPzoEAtFzU0tAkRAaCdc3jMxg&oe=6587CEE8"
                        }
                    />
                    <ContactCard
                        name="Nusrat Haque"
                        image={
                            "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/274242381_5231959040161005_3387143141495842286_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHqxcdM51GRc9-S-6OyxnI_qjFCElLVYraqMUISUtVitjZ1wWD7LHQrw9pP5DaHRpwTBTapENeI05pPhqUz1RKV&_nc_ohc=dXSnspoXi5IAX9joF-l&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCbn-sqVUvC3Gk1QlerHRXCIIlyG24_CCz7AmN27TN-sg&oe=65878BDD"
                        }
                    />
                    <ContactCard
                        name="Tahmid Hossain"
                        image={
                            "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/409638329_3309625519184088_5557743768285060264_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGZ8Gp7q7AD1F_9e8CxLYcMu2f0PZOUPJe7Z_Q9k5Q8l71G-hCE2CwZ68I1M3JC6uxE7yxFo73-f-Lsi2kXmOOO&_nc_ohc=xns-6yX8YVoAX-yM_fs&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCr_7cS606CxCW-ErO1-P_0FOE8XvVHp8E6XerrPmmOSg&oe=658873A4"
                        }
                    />
                    <ContactCard
                        name="Mamun Mirdha"
                        image={
                            "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/347082553_996846404639716_1807177208072175128_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeH3UgheA3R4oSNrg1F-vHeWvs2AEiPiNUe-zYASI-I1R2TyqTOQQ6V5lW5yEHFn4IS4jmQcaLQDeV5vCAXwF0Z3&_nc_ohc=odJxKYE5ixYAX-JLsQ8&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDkS4k-3db9fIe9vW6-efQ5cQYMpu81w0L2ippBZkwwrw&oe=6587C0F0"
                        }
                    />
                    <ContactCard
                        name="Tahmid Hossain"
                        image={
                            "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/409638329_3309625519184088_5557743768285060264_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGZ8Gp7q7AD1F_9e8CxLYcMu2f0PZOUPJe7Z_Q9k5Q8l71G-hCE2CwZ68I1M3JC6uxE7yxFo73-f-Lsi2kXmOOO&_nc_ohc=xns-6yX8YVoAX-yM_fs&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCr_7cS606CxCW-ErO1-P_0FOE8XvVHp8E6XerrPmmOSg&oe=658873A4"
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionRight;
