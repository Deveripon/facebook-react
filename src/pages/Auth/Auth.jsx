import { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Meta from "../../components/Meta/Meta";
import Modal from "../../components/Modal/Modal";
import Input from "../../components/inputs/Input";
import ModalContext from "../../Context/ModalContext";

const Auth = () => {
    const { modal, setModal, openRegModal } =
        useContext(ModalContext);
    return (
        <>
            <Meta>
                <title>Facebook - log in or sign up</title>
                <link
                    rel="shortcut icon"
                    href="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico"
                    type="image/x-icon"
                />
            </Meta>
            <div className="main relative">
                <section className="auth-section bg-[#F0F2F5] relative">
                    <div className="section-container pt-32 pb-44 w-[calc(100vw_-_10%)] m-auto">
                        <div className="auth-wrapper w-[990px] relative m-auto flex justify-center">
                            <div className="section-left mt-[-25px] w-[580px] pr-[32px]">
                                <div className="logo pt-[112px] pb-[16px]">
                                    <img
                                        className="h-[106px] m-[-28px]"
                                        src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg"
                                        alt="Facebook"
                                    />
                                </div>
                                <h2 className="text-[28px] w-[500px] leading-[32px]">
                                    Facebook helps you
                                    connect and share with
                                    the people in your life.
                                </h2>
                            </div>
                            <div className="section-right w-[396px] ">
                                <div className="card pt-4 face-shadow rounded-lg bg-white text-center flex flex-col justify-center items-center ">
                                    <form
                                        action=""
                                        className="m-auto flex flex-col justify-center items-center gap-3 ">
                                        <Input
                                            width="w-[360px]"
                                            type="text"
                                            name="userid"
                                            placeholder="Email address or phone number"
                                        />
                                        <Input
                                            width="w-[360px]"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <input
                                            className="bg-primary text-white w-[360px] rounded-md font-semibold text-[20px] px-[16px] py-[10px] cursor-pointer"
                                            type="submit"
                                            value="Log in"
                                        />
                                    </form>
                                    <a
                                        className="text-[14px] text-linkColor font-[500] block m-auto py-[14px] hover:underline"
                                        href="#">
                                        Forgotten password?
                                    </a>
                                    <div className="divider w-[360px] border-b border-[#dadde1]"></div>
                                    <button
                                        onClick={
                                            openRegModal
                                        }
                                        className="bg-secondary rounded-md text-[17px] leading-[48px] px-[16px] text-white font-[600] my-[24px] transform duration-150 hover:bg-secondary-hover">
                                        Create New Account
                                    </button>
                                </div>
                                <p className="py-[28px] block text-center w-full m-auto text-[14px]">
                                    <a
                                        href="#"
                                        className="font-semibold">
                                        Create a Page{" "}
                                    </a>
                                    for a celebrity, brand
                                    or business.
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
                <Footer />
                {modal && <Modal />}
            </div>
        </>
    );
};

export default Auth;
