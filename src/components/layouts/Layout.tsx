import Journey from "../../sections/Journey";
import { Footer } from "../Footer";
import Header from "../Header";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative bg-surface min-h-screen w-full flex flex-col items-start px- ">
      <Header />
      <main className=" w-full absolute  flex flex-col items-center ">
        {children}
        <Journey />
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
