import Meta from "../../components/Meta/Meta";
import CreatePost from "./Components/CreatePost";
import Divider from "./Components/Divider";
import Header from "./Components/Header";
import Post from "./Components/Post";
import SectionLeft from "./Components/SectionLeft";
import SectionRight from "./Components/SectionRight";
import StoryBlock from "./Components/StoryBlock";
const Home = () => {
    return (
        <>
            <Meta>
                <title>Facebook</title>
                <link
                    rel="shortcut icon"
                    href="https://static.xx.fbcdn.net/rsrc.php/yb/r/hLRJ1GG_y0J.ico"
                    type="image/x-icon"
                />
            </Meta>
            <section className="main-section bg-gray-100">
                <Header />
                <div className="main-page-content grid grid-cols-5 py-5 px-5">
                    <SectionLeft />
                    <main className="main-section flex justify-center col-span-3">
                        <div className="centerd-item w-[65%] overflow-hidden">
                            <StoryBlock />
                            <CreatePost />
                            <Post />
                        </div>
                    </main>
                    <SectionRight />
                </div>
            </section>
        </>
    );
};

export default Home;
