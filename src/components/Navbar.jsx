import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  // Location Checker ---------------------------------------
  const location = useLocation();

  const isLatest = location.pathname === "/latestworks";
  const isGraduation =
    location.pathname === "/graduation" ||
    location.pathname === "/graduation/groups" ||
    location.pathname === "/graduation/groups";
  const isPeople = location.pathname === "/people";
  const isTravel = location.pathname === "/travel";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";

  const [open, setOpen] = useState(false);
  const [gradHover, setGradHover] = useState(false);
  const [gradClick, setGradClick] = useState(false);

  return (
    <nav>
      {/* Mobile Menu Button */}
      <div className={"sm:hidden flex justify-stretch w-full mb-2"}>
        <motion.button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-center text-xl font-bold uppercase z-50 text-[#545454] hover:text-black duration-300 ease-in-out "
        >
          <AnimatePresence>
            {open ? (
              <motion.span
                key="close"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 1 }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1"
              >
                Close <FaTimes className="inline align-middle ml-1" />
              </motion.span>
            ) : (
              <motion.span
                key="close"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 1 }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1"
              >
                Menu <FaBars className="inline align-middle ml-1" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Collapsible Mobile Menu (pushes content down) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full overflow-hidden flex flex-col items-stretch sm:hidden pt-2 gap-2"
          >
            <div className="px-4">
              <Button
                whileHover={{ y: -3 }}
                text="LATEST"
                to="/latestworks"
                variant={isLatest ? "active" : "primary"}
                className="flex items-center justify-center py-1"
              />
            </div>

            <div
              className="relative w-full "
              onClick={() => setGradClick((prev) => !prev)}
            >
              <div className="px-4">
                <Button
                  text="GRADUATION +"
                  variant={isGraduation ? "active" : "primary"}
                  className="flex items-center justify-center py-1"
                />
              </div>

              <AnimatePresence>
                {gradClick && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="gap-2 w-full overflow-hidden flex flex-col items-stretch sm:hidden bg-gray-200"
                  >
                    <div className="px-4">
                      <Button
                        text="ALL"
                        to="/graduation"
                        className="flex items-center justify-center py-1 mt-2"
                      />
                      <Button
                        text="SOLOS"
                        to="/graduation/solos"
                        className="flex items-center justify-center py-1 mt-2"
                      />
                      <Button
                        text="GROUPS"
                        to="/graduation/groups"
                        className="flex items-center justify-center py-1 my-1"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="px-4">
              <Button
                text="PEOPLE"
                to="/people"
                variant={isPeople ? "active" : "primary"}
                className="flex items-center justify-center py-1"
              />
            </div>
            <div className="px-4">
              <Button
                text="TRAVEL"
                to="/travel"
                variant={isTravel ? "active" : "primary"}
                className="flex items-center justify-center py-1"
              />
            </div>
            <div className="px-4">
              <Button
                text="ABOUT"
                to="/about"
                variant={isAbout ? "active" : "primary"}
                className="flex items-center justify-center py-1"
              />
            </div>
            <div className="px-4">
              <Button
                text="CONTACT"
                to="/contact"
                variant={isContact ? "active" : "primary"}
                className="flex items-center justify-center py-1"
              />
            </div>
            <div className="px-4">
              <Button
                text="book grad shoot!"
                to="https://docs.google.com/forms/d/e/1FAIpQLSeRcZjfnP7zZpKs8wOQ6QQkZNkYFQtHFR3OkNSg9NgvPG2ktA/viewform"
                variant={isContact ? "active" : "primary"}
                className="flex items-center justify-center py-1 bg-neutral-600 text-white"
                external={true}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex self-end text-md md:text-lg lg:text-xl ml-auto space-x-2 mb-1">
        <Button
          text="LATEST"
          to="/latestworks"
          variant={isLatest ? "active" : "primary"}
          className="pl-4 pr-6 "
        />

        <div
          onMouseEnter={() => setGradHover(true)}
          onMouseLeave={() => setGradHover(false)}
          className="relative inline-block"
        >
          <Button
            text="GRADUATION"
            variant={isGraduation ? "active" : "primary"}
            className="pl-4 pr-6 "
            to="/graduation"
          />

          <AnimatePresence>
            {gradHover && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute -left-1 px-2 pt-2 pb-1 gap-1 bg-[#FFF] shadow-md w-48 z-50 flex flex-col items-start border border-black/10 "
              >
                <Button
                  text="SOLOS"
                  to="/graduation/solos"
                  className="pl-3  text-left"
                />
                <Button
                  text="GROUPS"
                  to="/graduation/groups"
                  className="pl-3  text-left "
                />
                <Button
                  text="book grad shoot!"
                  to="https://docs.google.com/forms/d/e/1FAIpQLSeRcZjfnP7zZpKs8wOQ6QQkZNkYFQtHFR3OkNSg9NgvPG2ktA/viewform"
                  variant={isContact ? "active" : "primary"}
                  className="pl-3  text-left bg-neutral-600 text-white"
                  external={true}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Button
          text="PEOPLE"
          to="/people"
          variant={isPeople ? "active" : "primary"}
          className="pl-4 pr-6 "
        />
        <Button
          text="TRAVEL"
          to="/travel"
          variant={isTravel ? "active" : "primary"}
          className="pl-4 pr-6 "
        />
        <Button
          text="ABOUT"
          to="/about"
          variant={isAbout ? "active" : "primary"}
          className="pl-4 pr-6 "
        />
        <Button
          text="CONTACT"
          to="/contact"
          variant={isContact ? "active" : "primary"}
          className="pl-4 pr-6 "
        />
      </div>
    </nav>
  );
}
