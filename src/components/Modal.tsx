"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  widthClassName?: string; // e.g., 'max-w-2xl'
};

export default function Modal({ open, onClose, title, children, widthClassName = "max-w-2xl" }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const prevActiveRef = useRef<HTMLElement | null>(null);
  const firstFocusableRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    prevActiveRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    // mark background inert
    const html = document.documentElement as unknown as HTMLElement & { inert?: boolean };
    // Cast to avoid no-explicit-any; inert is non-standard but supported by modern browsers
    (html as unknown as { inert?: boolean }).inert = true;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        // basic focus trap: keep focus within modal container
        const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement;
        if (e.shiftKey && active === first) { e.preventDefault(); (last as HTMLElement).focus(); }
        else if (!e.shiftKey && active === last) { e.preventDefault(); (first as HTMLElement).focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    // initial focus to close button
    setTimeout(() => firstFocusableRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      prevActiveRef.current?.focus?.();
      (html as unknown as { inert?: boolean }).inert = false;
    };
  }, [open, onClose]);

  if (typeof window === "undefined") return null;
  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      {/* Background click target as real button for a11y */}
      <button
        type="button"
        aria-label="Close overlay"
        className="absolute inset-0 w-full h-full cursor-default bg-transparent"
        onClick={onClose}
        tabIndex={-1}
      />
      <div className={`relative z-10 w-full ${widthClassName} mx-auto rounded-2xl bg-white shadow-2xl animate-fade-in-up`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <button
            ref={firstFocusableRef}
            onClick={onClose}
            className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="p-5" inert={undefined}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}


