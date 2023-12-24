import { IoCloseOutline } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const CreatePostModal = ({ hideModal, setIsModalShow, getAllPost }) => {
    const getPOsts = getAllPost();
    const [postInputVal, setPostInputVal] = useState({
        postContent: "",
        media: "",
    });
    const getInputValue = (e) => {
        setPostInputVal((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const createPost = async (e) => {
        e.preventDefault();
        try {
            const post = await axios.post("http://localhost:5050/posts", postInputVal);
            getPOsts;
            setIsModalShow(false);
            toast.success("Post created successfully");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div className="create-post-modal z-[999999] bg-gray-500/50 absolute top-0 bottom-0 left-0 right-0 m-auto flex justify-center items-center">
                <div className="post-creat-form-wrapper relative bg-white w-[500px] rounded-md shadow-lg">
                    <div className="header text-center border-b py-4">
                        <h2 className="text-[23px] font-semibold">Create Post</h2>
                    </div>
                    <button
                        onClick={hideModal}
                        className="absolute top-[17px] hover:bg-gray-500 transform duration-200 text-gray-700 text-[24px] bg-gray-400 rounded-full p-1 right-3">
                        <IoCloseOutline />
                    </button>
                    <div className="create-form p-4">
                        <form onSubmit={createPost} action="">
                            <textarea
                                value={postInputVal.postContent}
                                onChange={getInputValue}
                                className="outline-none text-[27px] min-h-[200px] "
                                placeholder="What's on your mind ,Shahadat?"
                                name="postContent"
                                id="postContent"
                                wrap={true}
                                cols="30"
                                rows="3"></textarea>
                            <div className="input-groups flex p-3 rounded-md shadow justify-between items-center border border-gray-300">
                                <label className="w-[30px]" htmlFor="fileUpload">
                                    <FaRegImages />
                                </label>
                                <input
                                    className="w-full outline-none "
                                    placeholder="Add image URL for Now"
                                    type="text"
                                    name="media"
                                    id="fileUpload"
                                    value={postInputVal.media}
                                    onChange={getInputValue}
                                />
                            </div>
                            <button
                                className="bg-primary w-full text-[18px] font-semibold transform duration-300  text-white p-2 my-2 rounded-md"
                                type="submit">
                                Post
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePostModal;
