import { useRouter } from "next/router";
import {RiEarthFill} from "react-icons/ri";

export default {
  projectLink: "https://multizoa.com",
  projectLinkIcon: <RiEarthFill />,
  docsRepositoryBase: "https://github.com/tokenosopher/multizoa/blob/master/pages",
  search: true,
  unstable_flexsearch: true,
  // feedbackLink: "Question? Give us feedback →",
  feedbackLabels: "feedback",
  logo: () => (
    <>
     <RiEarthFill size={20}/>
      <span
        className="mx-2 font-extrabold hidden md:inline select-none"
        title={
          "Multizoa - Explaining human society's place in the biological universe"
        }
      >
        Multizoa
      </span>
    </>
  ),
  head: ({ title, meta }) => {
    const { route } = useRouter();

    const ogImage =
      meta.image ||
      `https://swr-card.vercel.app${
        /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
      }`;

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Multizoa - Explaining human society's place in the biological universe"
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "Multizoa - Explaining human society's place in the biological universe"
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@multizoa" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title ? title + " – Multizoa" : "Explaining human society's place in the biological universe"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="Multizoa" />
      </>
    );
  },
  footerText: () => (
    <p className="inline-flex items-center no-underline text-current font-semibold">
      <span className="mr-1">Creative Commons © 2022 Multizoa</span>
    </p>
  ),
};
