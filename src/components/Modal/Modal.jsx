import { IoClose } from "react-icons/io5";
import Input from "../inputs/Input";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import ModalContext from "../../Context/ModalContext";
import { FaQuestionCircle } from "react-icons/fa";
import { toast } from "react-toastify";

import {
    day,
    month,
    year,
} from "../../utilities/DayMonthYear";

const Modal = () => {
    const { closeRegModal } = useContext(ModalContext);
    const [input, setInput] = useState({
        f_name: "",
        s_name: "",
        mobile_email: "",
        password: "",
        gender: "",
        day: "",
        month: "",
        year: "",
        pronunce: "",
        customGender: "",
    });
    function handleInputFields(e) {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }
    // form validation
    function handleFormSubmit(e) {
        e.preventDefault();
        if (!input.f_name) {
            toast.error("First Name is required");
        } else if (!input.s_name) {
            toast.error("Surname is required");
        } else if (!input.mobile_email) {
            toast.error("Mobile or email is required");
        } else if (!input.password) {
            toast.error("Password is required");
        } else if (!input.gender) {
            toast.error("Gender is required");
        } else {
            toast.success("Sign up request successful");
        }
    }
    //handle blur event
    const [redBorder, setRedBorder] = useState({
        f_name: false,
        s_name: false,
        mobile_email: false,
        password: false,
        gender: false,
        day: false,
        month: false,
        year: false,
    });
    function handleInputBlur(e) {
        if (e.target.value === "") {
            setRedBorder((prevState) => ({
                ...prevState,
                [e.target.name]: true,
            }));
        } else {
            setRedBorder((prevState) => ({
                ...prevState,
                [e.target.name]: false,
            }));
        }
    }

    return (
        <>
            <div className="reg-modal-section absolute top-0 left-0 right-0 bottom-0 modal-rgba-background flex justify-center">
                <div className="reg-modal-wrapper pt-2 pb-4 mt-[100px] w-[432px] bg-white face-shadow rounded-md border h-fit">
                    <div className="reg-modal rounded-md  bg-white">
                        <div className="reg-header flex justify-between px-4 pt-3 ">
                            <div className="hed-left">
                                <h2 className="text-[32px] leading-[38px] text-[#1c1e21] font-bold">
                                    Sign Up
                                </h2>
                                <p className="text-[15px] leading-[24px] text-secondaryText">
                                    It{"'"}s quick and easy.
                                </p>
                            </div>
                            <div className="hed-right text-secondaryText text-[32px]">
                                <button
                                    onClick={closeRegModal}>
                                    <IoClose />
                                </button>
                            </div>
                        </div>
                        <div className="divider border-b mt-3 bg-[#606770]"></div>
                        <form
                            onSubmit={handleFormSubmit}
                            action=""
                            className="reg-form px-3 py-3 flex justify-center items-center gap-3 flex-col">
                            <div className="input-group flex justify-center gap-3">
                                <Input
                                    className={
                                        redBorder.f_name
                                            ? "empty-input"
                                            : ""
                                    }
                                    onBlur={handleInputBlur}
                                    name="f_name"
                                    placeholder="First name"
                                    value={input.f_name}
                                    handler={
                                        handleInputFields
                                    }
                                />
                                <Input
                                    className={
                                        redBorder.s_name
                                            ? "empty-input"
                                            : ""
                                    }
                                    onBlur={handleInputBlur}
                                    name="s_name"
                                    placeholder="Surname"
                                    value={input.s_name}
                                    handler={
                                        handleInputFields
                                    }
                                />
                            </div>
                            <Input
                                className={
                                    redBorder.mobile_email
                                        ? "empty-input"
                                        : ""
                                }
                                onBlur={handleInputBlur}
                                name="mobile_email"
                                placeholder="Mobile number or email address "
                                value={input.mobile_email}
                                handler={handleInputFields}
                            />
                            <Input
                                className={
                                    redBorder.password
                                        ? "empty-input"
                                        : ""
                                }
                                onBlur={handleInputBlur}
                                name="password"
                                placeholder="New Password"
                                type="password"
                                value={input.password}
                                handler={handleInputFields}
                            />
                            <div className="input-group w-full self-start">
                                <label
                                    htmlFor="dob"
                                    className="flex justify-start items-center gap-2 text-[14px] text-secondaryText">
                                    Date of birth{" "}
                                    <FaQuestionCircle />
                                    <Link
                                        to="#"
                                        title="Click for more information"></Link>
                                </label>
                                <div className="date-selector flex  gap-2">
                                    <select
                                        onChange={
                                            handleInputFields
                                        }
                                        className="border flex-1 py-[10px] px-2 rounded-[6px] outline-none bg-white input-border"
                                        name="day"
                                        id="">
                                        {day?.map(
                                            (day, i) => {
                                                return (
                                                    <option
                                                        selected={
                                                            new Date().getDate() ===
                                                            day
                                                                ? true
                                                                : false
                                                        }
                                                        key={
                                                            i
                                                        }
                                                        value={
                                                            day
                                                        }>
                                                        {
                                                            day
                                                        }
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                    <select
                                        onChange={
                                            handleInputFields
                                        }
                                        className="border flex-1 py-[10px] px-2 rounded-[6px] outline-none bg-white input-border"
                                        name="month"
                                        id="">
                                        {month?.map(
                                            (mon, i) => {
                                                return (
                                                    <option
                                                        selected={
                                                            new Date().getMonth() ===
                                                            i
                                                                ? true
                                                                : false
                                                        }
                                                        key={
                                                            i
                                                        }
                                                        value={
                                                            mon
                                                        }>
                                                        {
                                                            mon
                                                        }
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                    <select
                                        onChange={
                                            handleInputFields
                                        }
                                        className="border flex-1 py-[10px] px-2 rounded-[6px] outline-none bg-white input-border"
                                        name="year"
                                        id="">
                                        {year?.map(
                                            (y, i) => {
                                                return (
                                                    <option
                                                        selected={
                                                            new Date().getFullYear() ===
                                                            y
                                                                ? true
                                                                : false
                                                        }
                                                        key={
                                                            i
                                                        }
                                                        value={
                                                            y
                                                        }>
                                                        {y}
                                                    </option>
                                                );
                                            }
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div className="input-group w-full self-start">
                                <label
                                    htmlFor="dob"
                                    className="flex justify-start gap-2 items-center text-[14px] text-secondaryText">
                                    Gender{" "}
                                    <FaQuestionCircle />
                                    <Link
                                        to="#"
                                        title="Click for more information"></Link>
                                </label>
                                <div className="date-selector flex  gap-2">
                                    <label
                                        htmlFor="male"
                                        className="border flex-1 flex justify-between py-[10px] px-2 rounded-[6px] outline-none bg-white input-border">
                                        Male
                                        <input
                                            onChange={
                                                handleInputFields
                                            }
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="Male"
                                        />
                                    </label>
                                    <label
                                        htmlFor="female"
                                        className="border flex-1 py-[10px] px-2 rounded-[6px] outline-none bg-white input-border flex justify-between ">
                                        Female
                                        <input
                                            onChange={
                                                handleInputFields
                                            }
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="Female"
                                        />
                                    </label>
                                    <label
                                        htmlFor="custom"
                                        className="border flex-1 py-[10px] px-2 rounded-[6px] outline-none bg-white input-border flex justify-between ">
                                        Custom
                                        <input
                                            onChange={
                                                handleInputFields
                                            }
                                            type="radio"
                                            name="gender"
                                            id="custom"
                                            value="custom"
                                        />
                                    </label>
                                </div>
                                {(() => {
                                    if (
                                        input.gender ===
                                        "custom"
                                    ) {
                                        return (
                                            <>
                                                <div className="custom-gender-option mt-3">
                                                    <select
                                                        onChange={
                                                            handleInputFields
                                                        }
                                                        className="border w-full flex-1 py-[10px] px-2 rounded-[6px] outline-none bg-white input-border"
                                                        name="year"
                                                        id="">
                                                        <option value="">
                                                            Select
                                                            your
                                                            pronoun
                                                        </option>
                                                        <option value="She: Wish her a happy birthday!">
                                                            She:
                                                            "Wish
                                                            her
                                                            a
                                                            happy
                                                            birthday!"
                                                        </option>
                                                        <option value="He: Wish him a happy birthday !">
                                                            He:
                                                            "Wish
                                                            him
                                                            a
                                                            happy
                                                            birthday
                                                            !"
                                                        </option>
                                                        <option value="Them : Wish them a happy birthday">
                                                            Them
                                                            :
                                                            "Wish
                                                            them
                                                            a
                                                            happy
                                                            birthday
                                                            !"
                                                        </option>
                                                    </select>
                                                    <p className="text-secondaryText text-[14px]">
                                                        Your
                                                        pronoun
                                                        is
                                                        visible
                                                        to
                                                        everyone.
                                                    </p>
                                                    <Input
                                                        name="customGender"
                                                        handler={
                                                            handleInputFields
                                                        }
                                                        value={
                                                            input.customGender
                                                        }
                                                        className="my-2"
                                                        placeholder="Gender(optional)"
                                                    />
                                                </div>
                                            </>
                                        );
                                    }
                                })()}

                                <p className="text-[11px] text-secondaryText">
                                    People who use our
                                    service may have
                                    uploaded your contact
                                    information to Facebook.{" "}
                                    <Link
                                        className="text-blue-700 hover:underline"
                                        to="#">
                                        Learn more.
                                    </Link>
                                </p>
                                <p className="text-[11px] mt-3 text-secondaryText">
                                    By clicking Sign Up, you
                                    agree to our{" "}
                                    <Link
                                        to="#"
                                        className="text-blue-700 hover:underline">
                                        Terms
                                    </Link>
                                    ,{" "}
                                    <Link
                                        to="#"
                                        className="text-blue-700 hover:underline">
                                        Privacy Policy
                                    </Link>{" "}
                                    and
                                    <Link
                                        to="#"
                                        className="text-blue-700 hover:underline">
                                        Cookies Policy
                                    </Link>
                                    . You may receive SMS
                                    notifications from us
                                    and can opt out at any
                                    time.
                                </p>
                                <button
                                    className="bg-[#00a400] transform duration-150 hover:bg-secondary  px-20 py-2 m-auto block mt-6 rounded-md text-white text-[18px] font-semibold"
                                    type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
