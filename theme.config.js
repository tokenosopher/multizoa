import {RiEarthFill} from "react-icons/ri";

export default {
  project: {
    link:"https://multizoa.com",
    icon: <RiEarthFill />,
  },
  // docsRepositoryBase: "https://github.com/tokenosopher/multizoa/blob/master/pages",
  // search: true,
  // feedbackLink: "Question? Give us feedback →",
  toc: false,
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
  footer: {
    text: () => (
      <p className="inline-flex items-center no-underline text-current font-semibold">
        <span className="mr-1">Creative Commons © 2022 Multizoa</span>
      </p>
    )
  },
};
