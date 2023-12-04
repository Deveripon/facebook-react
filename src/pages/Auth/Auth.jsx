import Meta from "../../components/Meta/Meta";
import { GoPlus } from "react-icons/go";

const Auth = () => {
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
            <section className="auth-section bg-[#F0F2F5]">
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
                                Facebook helps you connect and share with the people in your life.
                            </h2>
                        </div>
                        <div className="section-right w-[396px] ">
                            <div className="card pt-4 face-shadow rounded-lg bg-white text-center flex flex-col justify-center items-center ">
                                <form
                                    action=""
                                    className="m-auto flex flex-col justify-center items-center gap-3 ">
                                    <input
                                        className="w-[360px] text-[17px] py-[12px] px-[16px] input-border rounded-md outline-none"
                                        type="text"
                                        name="userid"
                                        id="userid"
                                        placeholder="Email address or phone number"
                                    />
                                    <input
                                        className="w-[360px] text-[17px] py-[12px] px-[16px] input-border rounded-md outline-none"
                                        type="password"
                                        name="pass"
                                        id="pass"
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
                                <button className="bg-secondary rounded-md text-[17px] leading-[48px] px-[16px] text-white font-[600] my-[24px] transform duration-150 hover:bg-secondary-hover">
                                    Create New Account
                                </button>
                            </div>
                            <p className="py-[28px] block text-center w-full m-auto text-[14px]">
                                <a href="#" className="font-semibold">
                                    Create a Page{" "}
                                </a>
                                for a celebrity, brand or business.
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
            <div
                id="pageFooter"
                className="bg-white flex flex-col w-[980px] m-auto text-left"
                data-referrer="page_footer"
                data-testid="page_footer">
                <ul className="flex justify-left items-center w-[100vw_-_30%] text-[12px] gap-2 pt-5 pb-2 text-gray-400">
                    <li>English (UK)</li>
                    <li>
                        <a>বাংলা</a>
                    </li>
                    <li>
                        <a>অসমীয়া</a>
                    </li>
                    <li>
                        <a>हिन्दी</a>
                    </li>
                    <li>
                        <a>नेपाली</a>
                    </li>
                    <li>
                        <a>Bahasa Indonesia</a>
                    </li>
                    <li>
                        <a>العربية</a>
                    </li>
                    <li>
                        <a>中文(简体)</a>
                    </li>
                    <li>
                        <a>Bahasa Melayu</a>
                    </li>
                    <li>
                        <a>Español</a>
                    </li>
                    <li>
                        <a>Português (Brasil)</a>
                    </li>
                    <li>
                        <button
                            className="border px-3 py-1 text-gray-900 text-[14px]"
                            role="button"
                            rel="dialog"
                            title="Show more languages">
                            <GoPlus />
                        </button>
                    </li>
                </ul>
                <div className="divider w-full border-b border-[#dadde1]"></div>

                <div
                    className=""
                    id="pageFooterChildren"
                    role="contentinfo"
                    aria-label="Facebook site links">
                    <ul className="flex justify-left items-center w-[100vw_-_30%] text-[12px] gap-x-4 pt-2 pb-1 text-gray-400 flex-wrap">
                        <li>
                            <a href="/reg/" title="Sign up for Facebook">
                                Sign Up
                            </a>
                        </li>
                        <li>
                            <a href="/login/" title="Log in to Facebook">
                                Log in
                            </a>
                        </li>
                        <li>
                            <a href="https://messenger.com/" title="Take a look at Messenger.">
                                Messenger
                            </a>
                        </li>
                        <li>
                            <a href="/lite/" title="Facebook Lite for Android.">
                                Facebook Lite
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/watch/" title="Browse in Video">
                                Video
                            </a>
                        </li>
                        <li>
                            <a href="/places/" title="Take a look at popular places on Facebook.">
                                Places
                            </a>
                        </li>
                        <li>
                            <a href="/games/" title="Check out Facebook games.">
                                Games
                            </a>
                        </li>
                        <li>
                            <a href="/marketplace/" title="Buy and sell on Facebook Marketplace.">
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a>Meta Pay</a>
                        </li>
                        <li>
                            <a>Meta Store</a>
                        </li>
                        <li>
                            <a>Meta Quest</a>
                        </li>
                        <li>
                            <a
                                href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT0KvNZyIecQaIowfmCxOFOsjaCh9yDcPB4ESumZakXK4AQku-awad64Ng47lUSReW5UD75zVaMGvoJKwiqL6LnChTBArAT_t0fHZURWIrhVLkmSz7Pet5YqCy7z-b1eqfyTeSXnt_pcbU-btCHS8g"
                                title="Take a look at Instagram"
                                target="_blank"
                                rel="noreferrer nofollow"
                                data-lynx-mode="asynclazy">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.threads.net/" title="Check out Threads">
                                Threads
                            </a>
                        </li>
                        <li>
                            <a href="/fundraisers/" title="Donate to worthy causes.">
                                Fundraisers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/biz/directory/"
                                title="Browse our Facebook Services directory.">
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                                title="See the Voting Information Centre">
                                Voting Information Centre
                            </a>
                        </li>
                        <li>
                            <a
                                href="/privacy/policy/?entry_point=facebook_page_footer"
                                title="Learn how we collect, use and share information to support Facebook.">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="/privacy/center/?entry_point=facebook_page_footer"
                                title="Learn how to manage and control your privacy on Facebook.">
                                Privacy Centre
                            </a>
                        </li>
                        <li>
                            <a href="/groups/discover/" title="Explore our groups.">
                                Groups
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://about.meta.com/"
                                title="Read our blog, discover the resource centre and find job opportunities.">
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto"
                                title="Advertise on Facebook">
                                Create ad
                            </a>
                        </li>
                        <li>
                            <a href="/pages/create/?ref_type=site_footer" title="Create a Page">
                                Create Page
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://developers.facebook.com/?ref=pf"
                                title="Develop on our platform.">
                                Developers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/careers/?ref=pf"
                                title="Make your next career move to our brilliant company.">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/policies/cookies/"
                                title="Learn about cookies and Facebook."
                                data-nocookies="1">
                                Cookies
                            </a>
                        </li>
                        <li>
                            <a
                                data-nocookies="1"
                                href="https://www.facebook.com/help/568137493302217"
                                title="Learn about AdChoices.">
                                AdChoices<i></i>
                            </a>
                        </li>
                        <li>
                            <a
                                data-nocookies="1"
                                href="/policies?ref=pf"
                                title="Review our terms and policies.">
                                Terms
                            </a>
                        </li>
                        <li>
                            <a href="/help/?ref=pf" title="Visit our Help Centre.">
                                Help
                            </a>
                        </li>
                        <li>
                            <a
                                href="help/637205020878504"
                                title="Visit our contact uploading and non-users notice.">
                                Contact uploading and non-users
                            </a>
                        </li>
                        <li>
                            <a title="View and edit your Facebook settings.">Settings</a>
                        </li>
                        <li>
                            <a
                                href="/allactivity?privacy_source=activity_log_top_menu"
                                title="View your activity log">
                                Activity log
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="pt-6">
                        <span className=" text-[11px]  text-gray-500 "> Meta © 2023</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;
