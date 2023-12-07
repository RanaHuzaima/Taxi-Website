import { motion } from "framer-motion";
import React, { useEffect } from "react";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = (event) => {
      // Check if the user is scrolling down
      if (window.scrollY > 0) {
        // Prevent the default scroll behavior
        event.preventDefault();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transitionDuration: 1000 }}
    >
      <div className="container">
        <h1 className=" font-bold my-2 text-2xl">Disclaimers for Umrah-taxi</h1>

        <p>
          All the information on this website - Umrah-taxi.com - is published in
          good faith and for general information purpose only. Umrah-taxi does
          not make any warranties about the completeness, reliability and
          accuracy of this information. Any action you take upon the information
          you find on this website (Umrah-taxi), is strictly at your own risk.
          Umrah-taxi will not be liable for any losses and/or damages in
          connection with the use of our website.
        </p>
        <br />
        <p>
          From our website, you can visit other websites by following hyperlinks
          to such external sites. While we strive to provide only quality links
          to useful and ethical websites, we have no control over the content
          and nature of these sites. These links to other websites do not imply
          a recommendation for all the content found on these sites. Site owners
          and content may change without notice and may occur before we have the
          opportunity to remove a link which may have gone 'bad'.
        </p>
        <br />
        <p>
          Please be also aware that when you leave our website, other sites may
          have different privacy policies and terms which are beyond our
          control. Please be sure to check the Privacy Policies of these sites
          as well as their "Terms of Service" before engaging in any business or
          uploading any information.
        </p>

        <h2 className=" font-bold my-2">Consent</h2>

        <p>
          By using our website, you hereby consent to our disclaimer and agree
          to its terms.
        </p>

        <h2 className=" font-bold my-2">Update</h2>

        <p>
          Should we update, amend or make any changes to this document, those
          changes will be prominently posted here.
        </p>
      </div>
    </motion.div>
  );
};

export default Disclaimer;
