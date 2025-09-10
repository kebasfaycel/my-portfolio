export default function Footer() {
  return (
    <>
      <footer className=" w-full text-lg relative flex justify-center p-5 backdrop-blur-xs bg-black/5 items-center z-50 ">
        <p className="text-white/70">&copy; Kebas Faycel {new Date().getFullYear()}, All rights reserved </p>
      </footer>
    </>
  );
}
