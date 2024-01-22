import React, { useEffect, useState, RefObject } from "react";

type TokenInputProps = {
  count: number;
  values: string[];
  onValueChange: (values: string[]) => void;
};

const TokenInput: React.FC<TokenInputProps> = ({
  count,
  values,
  onValueChange,
}) => {
  const inputRefs: RefObject<HTMLInputElement>[] = Array.from(
    { length: count },
    () => React.createRef<HTMLInputElement>()
  );

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
    nextInputRef: RefObject<HTMLInputElement>
  ) => {
    let newValues = [...values];
    newValues[index] = event.target.value;
    onValueChange(newValues);

    if (event.target.value && nextInputRef && nextInputRef.current) {
      nextInputRef.current.focus();
    }
    console.log(newValues);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    prevInputRef: RefObject<HTMLInputElement>
  ) => {
    if (
      event.key === "Backspace" &&
      !event.currentTarget.value &&
      prevInputRef &&
      prevInputRef.current
    ) {
      prevInputRef.current.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData.getData("text");
    let pasteArray = pasteData.trim().split("");

    pasteArray = pasteArray.filter((value) => value !== "");

    let newValues = [...values];
    for (let index = 0; index < pasteArray.length; index++) {
      if (inputRefs[index] && inputRefs[index].current) {
        inputRefs[index].current.value = pasteArray[index];
        newValues[index] = pasteArray[index];
      }
    }

    onValueChange(newValues);

    // Set focus to the last input field
    const lastInputRef =
      inputRefs[
        pasteArray.length >= count ? count - 1 : pasteArray.length
      ];
    if (lastInputRef && lastInputRef.current) {
      lastInputRef.current.focus();
    }
  };

  return (
    <div className="flex justify-start">
      {inputRefs.map((inputRef, index) => (
        <input
          required
          key={index}
          ref={inputRef}
          className="text-black text-[23px] w-[40px] h-[50px] mr-[10px] bg-white rounded-[5px] px-[12px] py-[8px] shadow-[0_5px_10px_-5px_rgba(0,0,0,0.1)] border-[1px] border-[rgb(18,19,49,0.25) border-solid hover:border-[#2962ff]"
          type="text"
          inputMode="numeric"
          pattern="[0-9]"
          placeholder="0"
          maxLength={1}
          value={values[index]}
          onChange={(event) =>
            handleInputChange(index, event, inputRefs[index + 1])
          }
          onKeyDown={(event) => handleKeyDown(event, inputRefs[index - 1])}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default TokenInput;

// Verwendung:
// <TokenInput count={3} />
