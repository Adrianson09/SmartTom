import React from 'react'; import Link from "next/link";

function NavItems() {
    return (
        <nav className="m-nav">
            <ul>
                
                <li>
                    <Link href="/" passHref>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" passHref>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/service" passHref>
                        Services
                    </Link>
                </li>
                <li className="dropdown">
                    <Link  href="#nolink"
                    >Pages <i className="fa-solid fa-chevron-down"></i
                    ></Link>
                    <ul className="d-menu">
                        <li>
                            <Link href="/teams" passHref>
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/team-details" passHref>
                                Team Details
                            </Link>
                        </li>
                        <li>
                            <Link href="/service-details" passHref>
                                Service Details
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio-details" passHref>
                                Portfolio Details
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" passHref>
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/error" passHref>
                                Error
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/portfolio" passHref>
                        Portfolio
                    </Link>
                </li>
                <li className="dropdown">
                    <Link  href="#nolink"
                    >Blog <i className="fa-solid fa-chevron-down"></i
                    ></Link>
                    <ul className="d-menu">
                        <li>
                            <Link href="/blogs" passHref>
                                Blog Full Width
                            </Link>
                        </li>
                        <li>
                            <Link href="/blogs-two" passHref>
                                Blog Right Sidebar
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-details" passHref>
                                Blog Details
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/contact" passHref>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavItems;