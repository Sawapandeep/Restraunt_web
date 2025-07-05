"use client";
import "react";
import MapWidget from "../components/ui/myui/mapWidget";
const days = [
  { day: "MONDAY", space: "-------------------", hours: "closed" },
  { day: "TUESDAY", space: "-------------------", hours: "10 pm-02 am" },
  { day: "WEDNESDAY", space: "-------------------", hours: "10 pm-02 am" },
  { day: "THURSDAY", space: "-------------------", hours: "10 pm-02 am" },
  { day: "FRIDAY", space: "-------------------", hours: "10 pm-02 am" },
  { day: "SATURDAY", space: "-------------------", hours: "7 pm-02 am" },
  { day: "SUNDAY", space: "-------------------", hours: "7 pm-02 am" },
];
const address = [
  {
    street: "Hinjawadi Rajiv Gandhi Infotech Park",
    locality: "Hinjawadi",
    city: "Pune",
    district: "Pimpri-Chinchwad",
  },
];

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-row py-[40px] px-[20px] size-aut relative  md:display-block md:py-[60px] "
    >
      <div
        id="footerContainer"
        className="shrink place-items-center w-full relative md:shrink-0 md:mx-auto md:flex md:flex-col md:items-start md:max-w-9/10 "
      >
        <div
          id="footerGrid"
          className="self-auto  flex flex-col-reverse flex-auto  gap-x-5 gap-y-15 md:self-auto md:grid md:grid-cols-2 md:grid-rows-1 md:grid-flow-row md:place-self-stretch w-full"
        >
          <div id="footerHours" className=" w-[90%] md:w-full self-auto ">
            <h3 id="hours" className="mt-5 mb-10 font-bold text-5xl">
              Visit Us
            </h3>
            <div
              id="footerTime"
              className="flex flex-col mb-3 gap-y-3 gap-x-4 auto-cols-[1fr]  "
            >
              {days.map(({ day, space, hours }) => (
                <div
                  className="flex flex-row grid-cols-[1fr_1fr]md:grid-cols-[1fr_1fr_1fr] place-content-between"
                  key={day}
                >
                  <p className="align-middle col-span-1 row-span-1">{day}</p>
                  <p className="hidden align-middle col-span-1 row-span-1 md:block">
                    {space}
                  </p>
                  <p className="align-middle col-span-1 row-span-1 ">{hours}</p>
                </div>
              ))}

              {/* <p id="day" className="align-middle"></p> */}
            </div>
          </div>
          <div id="footerContactUs" className=" w-[90%] md:w-full self-auto ">
            <div id="contactUs" className="flex flex-col text-left">
              <h3 id="place" className="mt-5 mb-10 font-bold text-5xl">
                Contact Us
              </h3>
              <div
                id="address"
                className="grid grid-cols-2 grid-rows-1 grid-flow-row"
              >
                {address.map(({ street, locality, district, city }) => (
                  <div
                    className="flex flex-col  mb-3 gap-y-3 gap-x-4 auto-cols-[1fr] grid-cols-[1fr_1fr]md:grid-cols-[1fr_1fr_1fr] place-content-between"
                    key={street}
                  >
                    <p className="align-middle col-span-1 row-span-1">
                      {street}
                    </p>
                    <p className="align-middle col-span-1 row-span-1">
                      {locality}
                    </p>
                    <p className="align-middle col-span-1 row-span-1">
                      {district}
                    </p>
                    <p className="align-middle col-span-1 row-span-1">{city}</p>
                    <a
                      href="mailto:example@gmail.com"
                      className="align-middle col-span-1 row-span-1 font-bold hover:underline"
                    >
                      ela@gmail.com
                    </a>
                  </div>
                ))}
                <MapWidget />
                {/* <div id="mapWidget" className="">

                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
