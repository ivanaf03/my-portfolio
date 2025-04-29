import React from "react";
import ArrowListItemButton from "../UI/ArrowListItemButton";
import SectionTitle from "../UI/SectionTitle";
import Main from "../UI/Main";

const AboutMe = () => {
  const [showInfo, setShowInfo] = React.useState("Information");

  const handleClick = (value) => {
    setShowInfo(value);
  };

  return (
    <Main title="About me">
        <article className="h-full flex flex-col md:flex-row gap-2">
          <aside className="p-8 flex-col gap-2">
            <ul>
              <li>
                <ArrowListItemButton onClick={() => handleClick("Information")}>
                  Information
                </ArrowListItemButton>
              </li>
              <li>
                <ArrowListItemButton onClick={() => handleClick("Contact")}>
                  Contact
                </ArrowListItemButton>
              </li>
              <li>
                <ArrowListItemButton onClick={() => handleClick("Education")}>
                  Education
                </ArrowListItemButton>
              </li>
            </ul>
          </aside>
          <section className="p-8 h-full flex flex-col gap-4 text-xs sm:text-xl md:text-2xl">
            {showInfo === "Information" && (
              <>
                <p className="font-mono">
                  I was born in a small village in the province of Lugo, in the
                  north of Spain. It was there that I discovered my passion for
                  animals, mountain biking and photography. I studied at the
                  University of A Coruña, where I graduated with a degree in
                  Computer Science and a specialization in{" "}
                  <u>Software Engineering</u>.
                </p>
              </>
            )}
            {showInfo === "Contact" && (
              <article className="flex flex-col gap-6 text-lg">
                <section className="flex gap-4 sm:gap-6 md:gap-8 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                  </svg>
                  <a
                    href="https://www.linkedin.com/in/iv%C3%A1n-%C3%A1lvarez-fern%C3%A1ndez-60829733a/"
                    className="font-mono text-sm md:text-xl underline"
                  >
                    Iván Álvarez Fernández
                  </a>
                </section>
                <section className="flex gap-4 sm:gap-6 md:gap-8 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008.207 10.953c.6.111.82-.258.82-.577v-2.157c-3.338.726-4.042-1.61-4.042-1.61-.547-1.393-1.335-1.764-1.335-1.764-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.494.997.108-.775.42-1.305.763-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.304-.536-1.527.116-3.182 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.003 0c2.292-1.552 3.3-1.23 3.3-1.23.652 1.655.24 2.878.117 3.182.768.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.624-5.475 5.921.431.372.816 1.104.816 2.225v3.297c0 .32.219.694.825.576A11.5 11.5 0 0023.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
                  </svg>
                  <a
                    href="https://github.com/ivanaf03"
                    className="font-mono text-sm md:text-xl underline"
                  >
                    @ivanaf03
                  </a>
                </section>
                <section className="flex gap-4 sm:gap-6 md:gap-8 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                  </svg>
                  <a
                    href="mailto:ivanalvarezfernandez9876@gmail.com"
                    className="font-mono text-sm md:text-xl underline"
                  >
                    ivanalvarezfernandez9876
                  </a>
                </section>
                <section className="flex gap-4 sm:gap-6 md:gap-8 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                  </svg>
                  <a
                    href="https://www.instagram.com/ivan.af__/#"
                    className="font-mono text-sm md:text-xl underline"
                  >
                    @ivan.af__
                  </a>
                </section>
              </article>
            )}
            {showInfo === "Education" && (
              <article className="flex flex-col gap-6 text-lg">
                <section className="flex gap-4 sm:gap-6 md:gap-8 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0.585693L18 6.58569V9H22V19H23V21H1V19H2V9H6V6.58569L12 0.585693ZM18 19H20V11H18V19ZM6 11H4V19H6V11ZM8 7.41412V18.9999H11V12H13V18.9999H16V7.41412L12 3.41412L8 7.41412Z"></path>
                  </svg>
                  <p className="font-mono text-sm md:text-xl">
                    CEIP Plurilingüe A Pontenova
                  </p>
                </section>
                <section className="flex gap-4 sm:gap-6 md:gap-8 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13 21V23H11V21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H9C10.1947 3 11.2671 3.52375 12 4.35418C12.7329 3.52375 13.8053 3 15 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H13ZM20 19V5H15C13.8954 5 13 5.89543 13 7V19H20ZM11 19V7C11 5.89543 10.1046 5 9 5H4V19H11Z"></path>
                  </svg>
                  <p className="font-mono text-sm md:text-xl">
                    IES Enrique Muruais
                  </p>
                </section>
                <section className="flex gap-4 sm:gap-6 md:gap-8 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path>
                  </svg>
                  <p className="font-mono text-sm md:text-xl">
                    Facultade de Informática - University of A Coruña
                  </p>
                </section>
              </article>
            )}
          </section>
        </article>
    </Main>
  );
};

export default AboutMe;
