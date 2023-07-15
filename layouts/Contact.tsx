import _ from "lodash";
import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useRef,
  useState,
} from "react";
import { FiMail, FiMapPin, FiLinkedin } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import ReactGA from "react-ga4";
import Image from "next/image";
import { isMobile } from "react-device-detect";

import Label from "../components/Label";
import Loader from "../components/Loader";

import CONSTANT from "../public/constant";
import { GA_CATEGORIES } from "../public/constant";
import { validateEmail } from "../utils/helpers";
import ConfirmedImage from "../public/images/contact-form-submitted-confirm.svg";

interface ErrorMessages {
  firstName?: string;
  lastName?: string;
  email?: string;
  project?: string;
  message?: string;
  formError?: string;
  [key: string]: string | undefined; // Add index signature
}

const MAXIMUM_MESSAGE_LENGTH = 1000;

const Contact = () => {
  // states
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  // refs
  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLInputElement>(null);

  const onKeyDown =
    (name: string) =>
    (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (isMobile) {
        // focus the next input
        if (event.key === "Enter") {
          switch (name) {
            case "firstName":
              // focus last name
              event.preventDefault();
              lastNameInputRef?.current?.focus?.();
              break;

            case "lastName":
              // focus email name
              event.preventDefault();
              emailInputRef?.current?.focus?.();
              break;

            case "email":
              // focus message
              event.preventDefault();
              messageInputRef?.current?.focus?.();
              break;

            default:
              break;
          }
        }
      }
    };

  const onTextChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // extract the input name and value from event targe
      const { name, value } = event.target;

      // check if there was error message for the input
      if (errorMessages[name]) {
        // clear the error message
        setErrorMessages({
          ...errorMessages,
          [name]: undefined,
        });
      }

      // update state value
      setState(value);
    };

  const onTextAreaChange =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // extract the input name and value from event targe
      const { name, value } = event.target;

      // check if there was error message for the input
      if (errorMessages[name]) {
        // clear the error message
        setErrorMessages({
          ...errorMessages,
          [name]: undefined,
        });
      }

      // update state value
      if (value.length <= MAXIMUM_MESSAGE_LENGTH) {
        setState(value);
      } else {
        setState(value.substring(0, MAXIMUM_MESSAGE_LENGTH));
      }
    };

  const validateContactFormData = () => {
    let errors: ErrorMessages = {};

    if (!firstName) {
      errors.firstName = "Please enter your first name.";
    } else if (message.length >= MAXIMUM_MESSAGE_LENGTH) {
      errors.firstName = `Please enter your first name no longer than ${MAXIMUM_MESSAGE_LENGTH} characters.`;
    }

    if (!lastName) {
      errors.lastName = "Please enter your last name.";
    } else if (message.length >= MAXIMUM_MESSAGE_LENGTH) {
      errors.lastName = `Please enter your last name no longer than ${MAXIMUM_MESSAGE_LENGTH} characters.`;
    }

    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!validateEmail(email)) {
      errors.email = "Please enter proper email address.";
    } else if (message.length >= MAXIMUM_MESSAGE_LENGTH) {
      errors.email = `Please enter your email address no longer than ${MAXIMUM_MESSAGE_LENGTH} characters.`;
    }

    if (!message) {
      errors.message = "Please enter your message to me.";
    } else if (message.length < 10) {
      errors.message = "Please write at least 10 words.";
    } else if (message.length >= MAXIMUM_MESSAGE_LENGTH) {
      errors.message = `Please enter your message no longer than ${MAXIMUM_MESSAGE_LENGTH} characters.`;
    }

    // update error messages states
    setErrorMessages(errors);

    return _.isEmpty(errors);
  };

  const onSubmitClick = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (loading) {
        return; // skip
      }

      if (!validateContactFormData()) {
        console.error("Form validation error.");
        return;
      }

      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      setLoading(false);

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessages({
          ...errorMessages,
          formError: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error("Error sending request:", error);
    }

    // send GA event
    ReactGA.event({
      category: GA_CATEGORIES.buttonClick,
      action: "Send Message",
    });
  };

  return (
    <div id="contact" className="section-container contact-section">
      <div className="container">
        <h1 className="section-title">Contact Me</h1>
        <h6 className="section-subtitle">
          Get in touch for any inquiries or collaborative opportunities
        </h6>

        {!isSubmitted ? (
          <div className="row">
            {/* left panel */}
            <div className="col-12 col-md-5 left-panel">
              {/* email */}
              <Label
                icon={<FiMail />}
                title="Email"
                subtitle={CONSTANT.email}
                href={`mailto:${CONSTANT.email}`}
              />

              {/* linkedin */}
              <Label
                icon={<FiLinkedin />}
                title="LinkedIn"
                subtitle={CONSTANT.linkedInLink}
                href={CONSTANT.linkedInLink}
                newTab={true}
              />

              {/* location */}
              <Label
                icon={<FiMapPin />}
                title="Location"
                subtitle={CONSTANT.location}
                href={CONSTANT.locationLink}
                newTab={true}
              />
            </div>

            {/* right panel */}
            <div className="col-12 col-md-7 right-panel">
              {/* contact form  */}

              <form>
                <div className="row">
                  {/* first name */}
                  <div className="form-floating col-12 col-md-6">
                    <input
                      ref={firstNameInputRef}
                      name="firstName"
                      type="text"
                      className="form-control"
                      disabled={loading}
                      value={firstName}
                      onChange={onTextChange(setFirstName)}
                      onKeyDown={onKeyDown("firstName")}
                    />
                    <label>First name</label>

                    {/* error validation message */}
                    {errorMessages.firstName ? (
                      <div className="error-validation">
                        {errorMessages.firstName}
                      </div>
                    ) : null}
                  </div>

                  {/* last name */}
                  <div className="form-floating col-12 col-md-6">
                    <input
                      ref={lastNameInputRef}
                      name="lastName"
                      type="text"
                      className="form-control"
                      disabled={loading}
                      value={lastName}
                      onChange={onTextChange(setLastName)}
                      onKeyDown={onKeyDown("lastName")}
                    />
                    <label>Last name</label>

                    {/* error validation message */}
                    {errorMessages.lastName ? (
                      <div className="error-validation">
                        {errorMessages.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* email */}
                <div className="row">
                  <div className="form-floating col-12">
                    <input
                      ref={emailInputRef}
                      name="email"
                      type="text"
                      className="form-control"
                      disabled={loading}
                      value={email}
                      onChange={onTextChange(setEmail)}
                      onKeyDown={onKeyDown("email")}
                    />
                    <label>Email</label>

                    {/* error validation message */}
                    {errorMessages.email ? (
                      <div className="error-validation">
                        {errorMessages.email}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* message */}
                <div className="row">
                  <div className="form-floating col-12">
                    <textarea
                      ref={messageInputRef}
                      name="message"
                      className="form-control"
                      disabled={loading}
                      rows={5}
                      maxLength={MAXIMUM_MESSAGE_LENGTH}
                      value={message}
                      onChange={onTextAreaChange(setMessage)}
                      onKeyDown={onKeyDown("message")}
                    />
                    <label>Message</label>

                    <div className="text-area-footer-container">
                      {/* error validation message */}
                      {errorMessages.message ? (
                        <div className="error-validation">
                          {errorMessages.message}
                        </div>
                      ) : null}

                      {/* text counter */}
                      <div
                        className="pull-right label label-default"
                        id="count_message"
                      >{`${message.length}/${MAXIMUM_MESSAGE_LENGTH}`}</div>
                    </div>
                  </div>
                </div>

                {/* submit button */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  title="Submit"
                  disabled={loading}
                  onClick={onSubmitClick}
                >
                  Send Message&nbsp;
                  {/* loader/icon */}
                  {loading ? (
                    <Loader className="text-white" />
                  ) : (
                    <AiOutlineSend />
                  )}
                </button>

                {/* form error message */}
                {errorMessages.formError ? (
                  <div className="error-validation">
                    {errorMessages.formError}
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        ) : null}

        {/* thank you message */}
        {isSubmitted ? (
          <div className="confirm-container">
            <Image src={ConfirmedImage} alt="Thank you" />

            {/* thank you text */}
            <p className="confirm-message-title">Thank you for reaching out.</p>
            <p className="confirm-message-subtitle">
              You will receive a response promptly.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
