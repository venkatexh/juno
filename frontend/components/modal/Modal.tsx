"use client";

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    isOpen && (
      <div className='fixed w-screen h-screen top-0 left-0 bg-black/30 bg-opacity-50 z-40'>
        <div
          className='absolute w-[50vw] h-[50vh] top-0 left-0 right-0 bottom-0 m-auto bg-black flex 
          items-center justify-center rounded-2xl z-50'>
          <div onClick={onClose}>close</div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
