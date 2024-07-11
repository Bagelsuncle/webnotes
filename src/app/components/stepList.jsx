import React, { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const StepList = () => {
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/webnotes");
        const data = await response.json();
        console.log("Fetched data:", data); // Log the data
        setAllNotes(data);
      } catch (error) {
        console.error("Error fetching coffee shops:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-max mx-auto">
      {allNotes.map((note) => (
        <Disclosure key={note.id}>
          <div className="flex flex-col items-center bg-slate-100 mb-2 py-2 px-4 rounded-lg cursor-pointer hover:bg-slate-300 transition duration-300">
            <DisclosureButton className="py-2">
              <p className="text-center w-full text-teal-500 text-xl font-bold">
                {note.step}
              </p>

              <h2 className="font-bold">{note.title}</h2>

              <DisclosurePanel className="text-teal-950 text-lg flex justify-center">
                <ol className="flex justify-center items-center flex-col">
                  {note.content.split("\\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </DisclosurePanel>
            </DisclosureButton>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </Disclosure>
      ))}
    </div>
  );
};

export default StepList;
