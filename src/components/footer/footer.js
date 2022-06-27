import React from "react";

function Footer() {
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#010720"
                    fill-opacity="1"
                    d="M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,138.7C840,128,960,160,1080,186.7C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
            <span className="footerMessage">
                Kindly brought to you by{" "}
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/CodeWithEmil"
                >
                    CodeWithEmil
                </a>{" "}
                with
                <i className="fa-solid fa-heart"></i> &
                <i className="fa-solid fa-pepper-hot"></i>
            </span>
            <span className="footerIcons">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/CodeWithEmil"
                >
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/CodeWithEmil"
                >
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/CodeWithEmil"
                >
                    <i class="fa-brands fa-github"></i>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.buymeacoffee.com/CodeWithEmil"
                >
                    <i class="fa-solid fa-mug-hot"></i>
                </a>
            </span>
        </footer>
    );
}

const FooterMemo = React.memo(Footer);
export default FooterMemo;