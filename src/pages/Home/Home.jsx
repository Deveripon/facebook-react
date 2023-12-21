import Meta from "../../components/Meta/Meta";
import CreatePost from "./Components/CreatePost";
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
            <section className="main-section min-h-screen">
                <Header />
                <SectionLeft />
                <div className="centerd-section  absolute left-0 right-0 m-auto mt-5 mb-5 w-[38%] min-h-screen">
                    <StoryBlock />

                    <CreatePost />
                    <div className="post-block flex flex-col gap-4">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                </div>
                <SectionRight />
            </section>
        </>
    );
};

export default Home;
