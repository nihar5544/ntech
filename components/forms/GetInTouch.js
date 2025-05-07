"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ApiService from "@/Services/ApiService";
import ScrollAnimation from "../Animation";
import { useToast } from "../ui/use-toast";
import { ButtonLoading } from "../ui/buttonloading";

export default function Getintouch() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [triggered, setTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setmessage(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!firstName) {
      formIsValid = false;
      errors["Firstname"] = "*Please enter a valid first name.";
    }

    if (!lastName) {
      formIsValid = false;
      errors["Lastname"] = "*Please enter a valid last name.";
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email || regex.test(email) === false) {
      formIsValid = false;
      errors["Email"] = "*Please enter your valid Email.";
    }

    if (!number) {
      formIsValid = false;
      errors["PhoneNumber"] = "*Please provide valid phone number.";
    }

    if (!message) {
      formIsValid = false;
      errors["Message"] = "*Please enter your message.";
    }

    setError(errors);
    return formIsValid;
  };

  const handleSubmit = async () => {
    if (validation()) {
      setLoading(true);
      const data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        message: message,
        mobile_no: number,
      };
      await axios
        .post(
          "https://ikxl2f3jzh6cufqtr3hbwepnmm0meelh.lambda-url.us-west-2.on.aws/",
          data
        )
        .then(() => {
          setLoading(false);
          setFirstName("");
          setLastName("");
          setEmail("");
          setmessage("");
          setNumber("");
          // Toast.success("Thanks for reaching out. We'll get back to you soon!");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
          });
        });

      await ApiService.post("api/get-in-touches", { data })
        .then(() => {
          setLoading(false);
          setFirstName("");
          setLastName("");
          setEmail("");
          setmessage("");
          setNumber("");
        })
        .catch((error) => {
          setLoading(false);
          console.log(error);
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
          });
        });
    }
  };
  return (
    <div
      className=" banner-padding-x"
      style={{
        background: "url(/images/getInTouchNew.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="flex gap-6 flex-col justify-center items-center lg:p-12 p-4 reveal">
        <h3 className="text-white lg:text-[36px] text-[28px] font-bold text-center mt-4">
          Get Custom Solution, Estimates & <br />
          Recommendations with{" "}
          <span className="text-[#ffbb02]">Confidentiality!</span>
        </h3>
        <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
        <div
          className={`grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-x-4 gap-y-4 bg-white rounded-3xl shadow-lg  ${
            triggered ? "animate fadeInUp three" : ""
          }`}
        >
          <div className="w-full cursor-pointer p-6 grid gap-4">
            <h5 className="text-[25px] lg:text-[30px] font-bold text-[#333]">
              Let’s spark the Idea
              <br />
            </h5>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col justify-between">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">
                  {error.Firstname}
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">{error.Lastname}</div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col justify-between">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  id="email"
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">{error.Email}</div>
              </div>
              <div className="flex flex-col justify-between">
                <Label htmlFor="number">Number</Label>
                <Input
                  placeholder="Country[code + Number]"
                  id="number"
                  value={number}
                  type="number"
                  name="number"
                  style={{
                    color: "#92929D",
                  }}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">
                  {error.PhoneNumber}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <Label htmlFor="message">Tell us a bit about your project*</Label>
              <textarea
                id="message"
                name="message"
                type="text"
                value={message}
                onChange={handleChange}
                className="flex min-h-[60px] mt-5 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                placeholder="Tell us a little bit about yourself"
              />

              <div className="text-[12px] text-red-500">{error.Message}</div>
            </div>
            <div className="flex w-full flex-col">
              {loading ? (
                <ButtonLoading />
              ) : (
                <Button onClick={handleSubmit} size="lg">
                  {"Let's Connect"}
                </Button>
              )}
            </div>
          </div>
          <div className="gap-x-[0px] gap-y-[0px] bg-[#000] rounded-[16px] p-0 overflow-hidden">
            <div className="h-[60%] rounded-md overflow-hidden">
              <Image
                src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65bbdec63ea06da49b2e8c96_Rapid-form-image.png"
                loading="lazy"
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 80vw, (max-width: 991px) 70vw, (max-width: 1279px) 27vw, (max-width: 1919px) 28vw, 24vw"
                alt=""
                width="0"
                height="0"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-2/5 gap-x-[8px] gap-y-[8px] flex-col flex-[1] justify-center items-center p-4 flex">
              <h6 className="lg:text-[22px] text-[18px] font-bold text-white">
                Book a 15-Min Discovery Call
              </h6>
              <div className="h-[3px] bg-yellow-500 mt-0 w-full"></div>
              <div className="gap-10 max-sm:gap-2 [flex-flow:column] grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] justify-start items-start grid">
                <div className="justify-center items-center flex lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2">
                  <div className="form-icons">
                    <Image
                      src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65150fd2b28fb0533208e585_4.svg"
                      width="0"
                      height="0"
                      alt=""
                      className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                    />
                  </div>
                  <p className="text-[14px] text-white">
                    We Sign &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <br />
                    NDA{" "}
                  </p>
                </div>
                <div className="flex justify-center items-center lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2">
                  <div className="form-icons">
                    <Image
                      src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65150fd1b28fb0533208e2d9_5.svg"
                      width="0"
                      height="0"
                      alt=""
                      className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                    />
                  </div>
                  <p className="text-[14px] text-white">
                    100% <br />
                    Confidential{" "}
                  </p>
                </div>
                <div className="flex justify-center items-center lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2">
                  <div className="form-icons">
                    <Image
                      src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65150fd1264f9cd285109c5a_6.svg"
                      width="0"
                      height="0"
                      alt=""
                      className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                    />
                  </div>
                  <p className="text-[14px] text-white">
                    Free <br />
                    Consultation{" "}
                  </p>
                </div>
                <div className="flex justify-center items-center lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2">
                  <div className="form-icons">
                    <Image
                      src="https://assets-global.website-files.com/64bf9f837519806dd618348c/65150fd17132709caba6ac84_1.svg"
                      width="0"
                      height="0"
                      alt=""
                      className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                    />
                  </div>
                  <p className="text-[14px] text-white">
                    No Obligation
                    <br />
                    Meeting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
