"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Home() {
  const [textValue, setTextValue] = useState("");
  const [result, setResult] = useState({
    show: true,
    state: false, // true = human made
  });

  const handleTextChange = (event: any) => {
    setTextValue(event?.target?.value);
  };
  return (
    <>
      <div className="flex flex-col justify-center  mt-40   text-center w-3/5 mx-auto">
        <div className="flex flex-col justify-center  font-semibold text-5xl">
          <span className="my-1 ">“Man vs. Machine: Unraveling</span>
          <span className="my-1 ">the Tapestry of AI and Human</span>
          <span className="mt-1 ">Written Texts”</span>
          <span className=" text-sm text-stone-500 text-right mr-20">
            -- this text is Ai generated
          </span>
          <span className=" text-lg font-medium mt-5 text-stone-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam
            repellendus earum minima, nesciunt provident odit cupiditate dolores
            saepe eveniet.
          </span>
        </div>
      </div>
      <div className="flex flex-col  items-center w-1/2 mx-auto mt-10">
        <div className="flex items-center mr-auto">
          <div className="bg-white w-fit  rounded-full  me-2">
            <span className="text-black px-2">1</span>
          </div>
          <span className="  font-medium">Copy the text here</span>
          &nbsp;
          <span className="text-stone-400">
            ( or write a few words yourself )
          </span>
        </div>
        <TextareaAutosize
          className="border-2 border-gray-500 my-5  rounded-lg"
          placeholder="e.g. Yes, we know. Everyone likes coffee. You’re probably not even a “real writer” if you don’t have coffee siphoned down your throat as a form of alarm clock."
          minRows={5}
          maxRows={6}
          value={textValue} // Set the value to display the stored text in the textarea
          onChange={handleTextChange} // Call handleTextChange on each change
          style={{ width: "100%", fontSize: 16, padding: 10 }}
        />
        <button className="bg-white text-black w-full py-2 rounded-md font-semibold">
          Generate Analysis
        </button>
      </div>
      <div className=" mx-auto  px-4 py-2 font-bold w-1/2 mt-5 ">
        {result.show && (
          <>
            {result.state ? (
              <>
                <span className="">This text is generated by a 💁 Human</span>
              </>
            ) : (
              <>
                <p className="">It is generated by 🤖 AI</p>
                <p className="my-3">Possible reasons for the text may be ai generated:</p>
                <ol className="text-red-300  text-sm ms-5">
                  <li className="my-2">1. The text generation API is backed by a large-scale unsupervised language model that can generate paragraphs of text.</li>
                  <li className="my-2">2. This transformer-based language model, based on the GPT-2 model by OpenAI, intakes a sentence or partial sentence and predicts subsequent text from that input.</li>
                </ol>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}