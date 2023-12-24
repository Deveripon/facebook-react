import { GoPlus } from "react-icons/go";
import Story from "./Story";
import UserImage from "../../../assets/images/ripon.jpg";
const StoryBlock = () => {
    return (
        <>
            <section className="story-section flex w-full gap-2 overflow-x-scroll">
                <div className={`create-strory-block h-[260px] min-w-[150px] rounded-xl relative`}>
                    <img
                        className="rounded-md h-[250px] object-cover w-full"
                        src={UserImage}
                        alt="user-image"
                    />
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
                <Story
                    username={"Mony Akter"}
                    userimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                    storyimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                />
                <Story
                    username={"Mony Akter"}
                    userimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                    storyimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                />
                <Story
                    username={"Mony Akter"}
                    userimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                    storyimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                />
                <Story
                    username={"Mony Akter"}
                    userimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                    storyimage={
                        "https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-1/381633509_2296611177192704_3066859387607356244_n.jpg?stp=c0.0.320.320a_dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGiq8GC0tk-eRX_qE0B3bbhFLtTnFZbiCUUu1OcVluIJQcvrGtsuckvYOHNVlxgaLJqFOpd8Zm2s48y7ty_uPJC&_nc_ohc=bpMfNhX05vIAX9O8hAb&_nc_ht=scontent.fdac2-2.fna&oh=00_AfBJoAEhsJNBBLBTtNTyvCsQYrPwBZxRYingDpISOaj4hw&oe=6589736D"
                    }
                />
            </section>
        </>
    );
};

export default StoryBlock;
