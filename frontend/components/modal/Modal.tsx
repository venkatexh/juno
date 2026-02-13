"use client";

const Modal = ({
  isOpen,
  onClose,
  children,
  view,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  view: string;
}) => {
  console.log(view);
  return (
    isOpen && (
      <div className='fixed w-screen h-screen top-0 left-0 bg-black/70 z-40'>
        <div
          className={`${view == "PORTRAIT" && "w-[45vw] h-[75vh]"} ${view == "LANDSCAPE" && "w-[50vw] h-[50vh]"} 
          absolute top-0 left-0 right-0 bottom-0 m-auto px-8 py-6
          flex flex-col bg-black  rounded-2xl z-50`}
          style={{
            boxShadow: "0px 1px 6px #474747",
          }}>
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
