import { useEffect, useRef } from "react";
import Head from "next/head";

const FormComponent = () => {
  const formRef = useRef();

  useEffect(() => {
    // Place any JavaScript functionality needed here, using formRef.current
    // Implement form validation, submission, and error handling

    const handleFormSubmit = async (e) => {
      e.preventDefault();

      // Form serialization and submission logic here
      const formData = new FormData(formRef.current);
      try {
        const response = await fetch(
          "https://gitcannabis.activehosted.com/proc.php",
          {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          }
        );
        const result = await response.json();
        console.log(result); // Handle success/failure response
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    };

    formRef.current.addEventListener("submit", handleFormSubmit);

    // Cleanup event listener
    return () => {
      formRef.current.removeEventListener("submit", handleFormSubmit);
    };
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.bunny.net/css?family=ibm-plex-sans:400,600"
          rel="stylesheet"
        />
      </Head>
      <style jsx>{`
        /* Add necessary styles here */
        #_form_1_ {
          font-size: 14px;
          line-height: 1.6;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
          /* Add remaining CSS styles */
        }
      `}</style>

      <form
        ref={formRef}
        method="POST"
        action="https://gitcannabis.activehosted.com/proc.php"
        id="_form_1_"
        className="_form _form_1 _inline-form _dark"
        noValidate
        data-styles-version="5"
      >
        <input type="hidden" name="u" value="1" />
        <input type="hidden" name="f" value="1" />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input type="hidden" name="or" value="39f5730a26b19f1e67b4b21a7d3406a1" />

        <div className="_form-content">
          <div className="_form_element _x39117137 _full_width _clear">
            <div className="_form-title">Subscribe for Email Updates</div>
          </div>

          <div className="_form_element _x73908687 _full_width _clear">
            <div className="_html-code">
              <p>Add a descriptive message telling what your visitor is signing up for here.</p>
            </div>
          </div>

          <div className="_form_element _x91782906 _full_width">
            <label htmlFor="fullname" className="_form-label">
              Your Name
            </label>
            <div className="_field-wrapper">
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Type your name"
              />
            </div>
          </div>

          <div className="_form_element _x19489877 _full_width">
            <label htmlFor="email" className="_form-label">
              Email*
            </label>
            <div className="_field-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Type your email"
                required
              />
            </div>
          </div>

          <div className="_button-wrapper _full_width">
            <button id="_form_1_submit" className="_submit" type="submit">
              Submit
            </button>
          </div>
          <div className="_clear-element"></div>
        </div>

        <div className="_form-thank-you" style={{ display: "none" }}></div>
      </form>
    </>
  );
};

export default FormComponent;
