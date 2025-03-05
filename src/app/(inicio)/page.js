import { Jumbotron, Products, SocialLinks } from "./components/home";

export default function Home() {
  return (
    <main>
      <Jumbotron />
      <SocialLinks />
      <Products />
    </main>
  );
}

export const metadata = {
  title: "MESMOS SHOW - INICIO",
  description: "¡Los payasos más virales de México!",
  icons: {
    icon: "/assets/images/logo.png",
  },
};
