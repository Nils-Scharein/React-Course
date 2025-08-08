import {useEffect} from "react";
import * as React from "react";

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Drawer({open, onClose, children}: DrawerProps) {
    // Close on ESC key press
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    // Optionally lock page scroll when open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <div
            className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            <div
                onClick={onClose}
                className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300
                ${open ? 'opacity-100' : 'opacity-0'}`}
            />

            <div
                className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300
      ${open ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {children}
            </div>
        </div>
    );
}

export default Drawer;
