import Header from "../../components/Header";
import "../../styles/globals.css";
import Banner from "../../components/Banner";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className=" bg-light-bg bg-page-gradient-light bg-fixed dark:bg-dark-bg dark:bg-page-gradient-dark">
        <div className=" shadow-m dark:to-black/15  mx-auto  mt-5 mb-5 max-w-7xl bg-gradient-to-l from-white/75 to-white/30 bg-clip-padding backdrop-blur-md backdrop-filter dark:from-black/10 md:p-10 lg:p-10">
          <Providers>
            <Header />
            <Banner />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
