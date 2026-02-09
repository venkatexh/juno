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
          className='absolute w-[50vw] max-h-[50vh] top-0 left-0 right-0 bottom-0 m-auto px-12 py-6 
          flex flex-col bg-black rounded-2xl z-50'>
          {children}
          <div
            className='absolute top-4 right-4 cursor-pointer'
            onClick={onClose}>
            close
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
