import { useRef } from "react";
import { AboutModal } from "./About";

export function Footer() {
    const modalRef = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        modalRef.current?.showModal();
    };

    return (
        <footer className="footer footer-horizontal footer-center text-base-content p-4">
            <nav className="grid grid-flow-col gap-4">
                <a href="https://tvzeiningen.ch" target="_blank" className="link link-hover">
                    TV Zeiningen
                </a>
                <a onClick={openModal} className="link link-hover">About</a>
                <a href="https://github.com/tvzeiningen" target="_blank" className="link link-hover">
                    GitHub
                </a>

                <AboutModal ref={modalRef} />
            </nav>
        </footer>
    );
}