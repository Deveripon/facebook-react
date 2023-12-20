import { GoPlus } from "react-icons/go";
import ContactCard from "./ContactCard";
const StoryBlock = () => {
    return (
        <>
            <section className="story-section w-full overflow-hidden flex flex-nowrap gap-2">
                <div
                    className="create-strory-block h-[260px] w-[150px] rounded-xl relative"
                    style={{
                        backgroundImage:
                            'url("https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/411080298_3671809989720838_6139402775500066882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEaeROCMhxd9EAavCkNuoXYNl-09TEM3BY2X7T1MQzcFpPwanjARoOlACnDtKXuknTRWrb2o9vEZRHD1jbHag0S&_nc_ohc=ldMUB0eZNgsAX_cfo0X&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDxndVTqED2qCeDyupsD3ky-MLSbb2U48VYZSy9U-EDYw&oe=65877E48")',
                        objectFit: "contain",
                        backgroundSize: "280px 290px",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="overflow absolute top-0 bottom-0 left-0 right-0 transform duration-100 hover:bg-gray-800 opacity-20 rounded-xl"></div>
                    <div className="create-button flex justify-center items-center w-[150px] h-[50px] z-50 bg-white rounded-b-xl absolute bottom-0">
                        <label
                            htmlFor="upload"
                            className="flex justify-center items-center flex-col">
                            <GoPlus className="text-white bg-primary rounded-full h-[38px] w-[38px] border-[4px] absolute bottom-[30px] border-white" />
                            <p className="mt-4 text-[14px] font-semibold">Create Story</p>
                            <input hidden type="file" name="upload" id="upload" />
                        </label>
                    </div>
                </div>
                <div
                    className="strory-block h-[260px] w-[150px] rounded-xl relative"
                    style={{
                        backgroundImage:
                            'url("https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/411080298_3671809989720838_6139402775500066882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEaeROCMhxd9EAavCkNuoXYNl-09TEM3BY2X7T1MQzcFpPwanjARoOlACnDtKXuknTRWrb2o9vEZRHD1jbHag0S&_nc_ohc=ldMUB0eZNgsAX_cfo0X&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDxndVTqED2qCeDyupsD3ky-MLSbb2U48VYZSy9U-EDYw&oe=65877E48")',
                        objectFit: "contain",
                        backgroundSize: "280px 290px",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="overflow absolute top-0 bottom-0 left-0 right-0 transform duration-100 hover:bg-gray-800 opacity-20 rounded-xl"></div>
                    <div className="contact flex  gap-4 items-center transform duration-100 cursor-pointer py-2 px-3 rounded-md">
                        <img
                            className="h-14 w-14 rounded-full relative border-[6px] border-primary"
                            src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/411080298_3671809989720838_6139402775500066882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEaeROCMhxd9EAavCkNuoXYNl-09TEM3BY2X7T1MQzcFpPwanjARoOlACnDtKXuknTRWrb2o9vEZRHD1jbHag0S&_nc_ohc=ldMUB0eZNgsAX_cfo0X&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDxndVTqED2qCeDyupsD3ky-MLSbb2U48VYZSy9U-EDYw&oe=65877E48"
                            alt="user-image"
                        />
                        <div className="active-status border-[4px] border-white bg-green-600 w-4 h-4 rounded-full absolute bottom-[6px] left-[43px]"></div>
                    </div>
                    <div className="name absolute bottom-0 text-[14px] px-4 text-white font-semibold">
                        <a href="">
                            {" "}
                            <p>Shahadat Hussain Ripon</p>
                        </a>
                    </div>
                </div>
                <div
                    className="strory-block h-[260px] w-[150px] rounded-xl relative"
                    style={{
                        backgroundImage:
                            'url("https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/381633509_2296611177192704_3066859387607356244_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX-QGVnl&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDTaQiloAqT58qhnAXb5T9f95cOSywVpwEDhrImXL0TCA&oe=65878FAF")',
                        objectFit: "contain",
                        backgroundSize: "280px 290px",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="overflow absolute top-0 bottom-0 left-0 right-0 transform duration-100 hover:bg-gray-800 opacity-20 rounded-xl"></div>
                    <div className="contact flex  gap-4 items-center transform duration-100 cursor-pointer py-2 px-3 rounded-md">
                        <img
                            className="h-14 w-14 rounded-full relative border-[6px] border-primary"
                            src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/381633509_2296611177192704_3066859387607356244_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX-QGVnl&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDTaQiloAqT58qhnAXb5T9f95cOSywVpwEDhrImXL0TCA&oe=65878FAF"
                            alt="user-image"
                        />
                        <div className="active-status border-[4px] border-white bg-green-600 w-4 h-4 rounded-full absolute bottom-[6px] left-[43px]"></div>
                    </div>
                    <div className="name absolute bottom-0 text-[14px] px-4 text-white font-semibold">
                        <a href="">
                            {" "}
                            <p>Mony Akter</p>
                        </a>
                    </div>
                </div>
                <div
                    className="strory-block h-[260px] w-[150px] rounded-xl relative"
                    style={{
                        backgroundImage:
                            'url("https://scontent.fdac24-3.fna.fbcdn.net/v/t1.6435-9/181454177_1695695013950993_1124653498712971595_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeFDCm3ktzz0DG8_-AqEssDOVxiOZ0ON2uFXGI5nQ43a4c__AaVpKWqvVgcjogGyPBvqOKWVa-TI-7VT4k-glIZF&_nc_ohc=A25YyAvww8kAX99_Zqk&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDPs3smoRqFPqrz895j9MAHCoWvbiEqDOjA_U6lbI7WLQ&oe=65AA4607")',
                        objectFit: "contain",
                        backgroundSize: "280px 290px",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="overflow absolute top-0 bottom-0 left-0 right-0 transform duration-100 hover:bg-gray-800 opacity-20 rounded-xl"></div>
                    <div className="contact flex  gap-4 items-center transform duration-100 cursor-pointer py-2 px-3 rounded-md">
                        <img
                            className="h-14 w-14 rounded-full relative border-[6px] border-primary"
                            src="https://scontent.fdac24-3.fna.fbcdn.net/v/t1.6435-9/181454177_1695695013950993_1124653498712971595_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=300f58&_nc_eui2=AeFDCm3ktzz0DG8_-AqEssDOVxiOZ0ON2uFXGI5nQ43a4c__AaVpKWqvVgcjogGyPBvqOKWVa-TI-7VT4k-glIZF&_nc_ohc=A25YyAvww8kAX99_Zqk&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDPs3smoRqFPqrz895j9MAHCoWvbiEqDOjA_U6lbI7WLQ&oe=65AA4607"
                            alt="user-image"
                        />
                        <div className="active-status border-[4px] border-white bg-green-600 w-4 h-4 rounded-full absolute bottom-[6px] left-[43px]"></div>
                    </div>
                    <div className="name absolute bottom-0 text-[14px] px-4 text-white font-semibold">
                        <a href="">
                            {" "}
                            <p>Mony Mukta</p>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StoryBlock;
