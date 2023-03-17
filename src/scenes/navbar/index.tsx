import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img src={Logo} alt="logo" />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* LINKS */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* SIGN UP/LOG IN */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Register
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU SIDE MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button>
              <XMarkIcon
                className="h-6 w-6 text-gray-400"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/*
   I'm honored to stand here today and say a few words for my best friend.
   I've known this guy for 23 years now - and still to this day, one of the best and fondest memory, that I'm legally allowed to say in front of friends and family, is the one of how we first met. 

   The year - 1999 - 2nd grade - Haun Elementary - Mrs. Davis' class. My first day ever in an American school, and I knew how to say exactly 5 things in english: yes, no, ok, mcdonalds and 'where's the bathroom' - the last one my cousin taught me the night before. 
   
   I rememberly explicitly telling my cousin to let the teacher know that I knew zero English - so that everyone would just leave me alone. He said 'I got you'. But in fact, he did not 'get' me. As soon as class started, Mrs. Davis started talking to the class - and even though I couldn't understand anything she was saying, I'm pretty sure she was telling everyone in the classroom to welcome the new kid in class and to ask away with questions.

   Random kids started speaking all these words out of my very limited list of vocabular all the while looking at me, and I remember I was just sitting there trying to devise a plan in my head about how I can go back to my motherland - Korea - the good kind. Mrs. Davis then I'm sure asked if anybody knew how to speak Chinese or something, because out of nowhere, this asian kid with big ass eyes with glasses that made his eyes look even bigger turns around and literally says the words 'ni hao'. Mind you, I didn't know how to speak Chinese at the time either, but I've seen enough Jackie Chan movies to know that he was probably speaking Chinese to me. In my mind I probably said something along the lines of 'bruh', and all I could do was stare in disbelief and anxiety.
   
   So there we were - an asian kid with big ass eyes in a staring contest with an asian kid with small ass eyes. From that moment on, we became best of friends.

   ** Wingman - when he picked me up at 4am in the morning out of the blue
   ** Countless number of sleepless nights playing counter strike


   -For I
   You and all of your family have been such a blessing towards me - especially in my most unconscious of times even on the night of my wedding.

   So everyone please raise your glass - here's to my best friend, his amazing new wife, and a future lifetime of love and laughter. Cheers

*/
