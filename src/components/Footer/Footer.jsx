import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div
                id="pageFooter"
                className="bg-white flex flex-col w-[980px] m-auto text-left"
                data-referrer="page_footer"
                data-testid="page_footer">
                <ul className="flex justify-left items-center w-[100vw_-_30%] text-[12px] gap-2 pt-5 pb-2 text-gray-400">
                    <li>English (UK)</li>
                    <li>
                        <Link>বাংলা</Link>
                    </li>
                    <li>
                        <Link>অসমীয়া</Link>
                    </li>
                    <li>
                        <Link>हिन्दी</Link>
                    </li>
                    <li>
                        <Link>नेपाली</Link>
                    </li>
                    <li>
                        <Link>Bahasa Indonesia</Link>
                    </li>
                    <li>
                        <Link>العربية</Link>
                    </li>
                    <li>
                        <Link>中文(简体)</Link>
                    </li>
                    <li>
                        <Link>Bahasa Melayu</Link>
                    </li>
                    <li>
                        <Link>Español</Link>
                    </li>
                    <li>
                        <Link>Português (Brasil)</Link>
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
                            <Link to="/reg/" title="Sign up for Facebook">
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to="/login/" title="Log in to Facebook">
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link to="https://messenger.com/" title="Take Link look at Messenger.">
                                Messenger
                            </Link>
                        </li>
                        <li>
                            <Link to="/lite/" title="Facebook Lite for Android.">
                                Facebook Lite
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.facebook.com/watch/" title="Browse in Video">
                                Video
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/places/"
                                title="Take Link look at popular places on Facebook.">
                                Places
                            </Link>
                        </li>
                        <li>
                            <Link to="/games/" title="Check out Facebook games.">
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link to="/marketplace/" title="Buy and sell on Facebook Marketplace.">
                                Marketplace
                            </Link>
                        </li>
                        <li>
                            <Link>Meta Pay</Link>
                        </li>
                        <li>
                            <Link>Meta Store</Link>
                        </li>
                        <li>
                            <Link>Meta Quest</Link>
                        </li>
                        <li>
                            <Link
                                to="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT0KvNZyIecQaIowfmCxOFOsjaCh9yDcPB4ESumZakXK4AQku-awad64Ng47lUSReW5UD75zVaMGvoJKwiqL6LnChTBArAT_t0fHZURWIrhVLkmSz7Pet5YqCy7z-b1eqfyTeSXnt_pcbU-btCHS8g"
                                title="Take Link look at Instagram"
                                target="_blank"
                                rel="noreferrer nofollow"
                                data-lynx-mode="asynclazy">
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link to="https://www.threads.net/" title="Check out Threads">
                                Threads
                            </Link>
                        </li>
                        <li>
                            <Link to="/fundraisers/" title="Donate to worthy causes.">
                                Fundraisers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/biz/directory/"
                                title="Browse our Facebook Services directory.">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                                title="See the Voting Information Centre">
                                Voting Information Centre
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy/policy/?entry_point=facebook_page_footer"
                                title="Learn how we collect, use and share information to support Facebook.">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/privacy/center/?entry_point=facebook_page_footer"
                                title="Learn how to manage and control your privacy on Facebook.">
                                Privacy Centre
                            </Link>
                        </li>
                        <li>
                            <Link to="/groups/discover/" title="Explore our groups.">
                                Groups
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://about.meta.com/"
                                title="Read our blog, discover the resource centre and find job opportunities.">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto"
                                title="Advertise on Facebook">
                                Create ad
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages/create/?ref_type=site_footer" title="Create Link Page">
                                Create Page
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://developers.facebook.com/?ref=pf"
                                title="Develop on our platform.">
                                Developers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/careers/?ref=pf"
                                title="Make your next career move to our brilliant company.">
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/policies/cookies/"
                                title="Learn about cookies and Facebook."
                                data-nocookies="1">
                                Cookies
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-nocookies="1"
                                to="https://www.facebook.com/help/568137493302217"
                                title="Learn about AdChoices.">
                                AdChoices<i></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                data-nocookies="1"
                                to="/policies?ref=pf"
                                title="Review our terms and policies.">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link to="/help/?ref=pf" title="Visit our Help Centre.">
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="help/637205020878504"
                                title="Visit our contact uploading and non-users notice.">
                                Contact uploading and non-users
                            </Link>
                        </li>
                        <li>
                            <Link title="View and edit your Facebook settings.">Settings</Link>
                        </li>
                        <li>
                            <Link
                                to="/allactivity?privacy_source=activity_log_top_menu"
                                title="View your activity log">
                                Activity log
                            </Link>
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

export default Footer;
