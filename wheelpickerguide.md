================================================
FILE: README.md
================================================
[![npm](https://img.shields.io/npm/v/react-wheel-time-picker)](https://www.npmjs.com/package/react-wheel-time-picker) ![downloads](https://img.shields.io/npm/dt/react-wheel-time-picker?color=blue&logo=npm&logoColor=blue)

# React wheel time picker

![React-wheel-time-picker demo](demo/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656d6470726f2f696d6167652f75706c6f61642f76313636313234353234392f64656d6f5f62636d7a6d652e676966.gif)

A modern wheel time picker for your React app.

- Full Typescript support
- Dark & Light mode support
- No moment.js needed
- Zero dependencies and lightweight

### Live demo

> To see the live demo:
> [Click here](https://joyful-bonbon-a01897.netlify.app/)

## install

```
npm install react-wheel-time-picker
```

or

```
yarn add react-wheel-time-picker
```

### d.ts declaration

If you have a vite-env.d.ts or other d.ts file in your src folder you can put this

> `declare module 'react-wheel-time-picker'`

It's for finding corresponding type of 'react-wheel-time-picker'.

## Usage

### 24 hours format (light & dark)

![24 hours format](demo/24h_format.png)

```javascript
import React, { useState } from 'react';
import { TimePicker } from 'react-wheel-time-picker';

export default const  App = () => {
    const [value, setValue] = useState('12:00');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onChange = (timeValue: string) => {
    setValue(timeValue);
    };

   return (
      <div>
        <TimePicker
            label="Start time"
            isDarkMode={isDarkMode}
            onChange={onChange}
            value={value}
        />
      </div>
   );
}
```

### 12 hours format (light & dark)

![12 hours format](demo/12h_format.png)

```js
import React, { useState } from 'react';
import { TimePicker } from 'react-wheel-time-picker';

export default const  MyApp = () => {
    const [value, setValue] = useState('10:00 AM');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onChange = (timeValue) => {
        setValue(timeValue);
    }

   return (
      <div>
        <TimePicker
            use12Hours
            label="Start time"
            isDarkMode={isDarkMode}
            onChange={onChange}
            value={value}
        />
      </div>
   );
}
```

## API

| Name               | Type                                                     | Default        | Description                                                     |
| ------------------ | -------------------------------------------------------- | -------------- | --------------------------------------------------------------- |
| label              | String (optional)                                        | n/a            | Name of the input.                                              |
| isDarkMode         | Boolean (optional)                                       | n/a            | for dark mode support.                                          |
| value              | String                                                   | n/a            | Current value.                                                  |
| cellHeight         | Number (optional)                                        | 28             | The height of the cell number.                                  |
| placeHolder        | String (optional)                                        | `"Selet_time"` | Time input's placeholder.                                       |
| pickerDefaultValue | String (optional)                                        | `"00:00"`      | The initial value that the picker begin with in the first time. |
| disabled           | Boolean (optional)                                       | `false`        | Whether picker is disabled.                                     |
| isOpen             | Boolean (optional)                                       | `false`        | Whether the time picker should be opened.                       |
| required           | Boolean (optional)                                       | `false`        | Whether time input should be required.                          |
| cancelButtonText   | String (optional)                                        | `"Cancel"`     | Cancel button text content                                      |
| saveButtonText     | String (optional)                                        | `"Save"`       | Save button text content                                        |
| controllers        | Boolean (optional)                                       | `true`         | Whether the buttons should be displayed                         |
| seperator          | Boolean (optional)                                       | `true`         | whether show the colon seperator                                |
| id                 | String (optional)                                        | n/a            | Input time picker id                                            |
| name               | String (optional)                                        | n/a            | Input time picker name                                          |
| use12Hours         | Boolean (optional)                                       | false          | 12 hours display mode                                           |
| inputClassName     | String (optional)                                        | n/a            | Input time picker className                                     |
| popupClassName     | String (optional)                                        | n/a            | time picker popup className                                     |
| onChange           | `(value) => alert ('New time is: ', value)`              | n/a            | Called when select a different value                            |
| onSave             | `(value) => alert ('Time saved is: ', value)` (optional) | n/a            | When the user clicks on save button                             |
| onClose            | `() => alert('Clock closed')` (optional)                 | n/a            | When the user clicks on cancel button                           |
| onAmPmChange       | `(value) => alert('Am/Pm changed : value')` (optional)   | n/a            | called when select an am/pm value                               |
| onOpen             | `() => alert('time picker opened')` (optional)           | n/a            | called when time picker is opened                               |

## Contributions Welcome!

```shell
git clone https://github.com/rodolphe37/react-wheel-time-picker
```

## License

The ISC License.



================================================
FILE: env.d.ts
================================================
// @types/react-wheel-time-picker@*

declare module 'react-wheel-time-picker';




================================================
FILE: LICENSE
================================================
ISC License

Copyright (c) 2024 Octa Labs LLC

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.



================================================
FILE: package.json
================================================
{
  "name": "react-wheel-time-picker",
  "version": "1.2.11",
  "main": "dist/bundle.cjs.js",
  "module": "dist/bundle.esm.js",
  "type": "module",
  "scripts": {
    "build": "rollup -c",
    "test": "jest",
    "prepare": "npm run build"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rodolphe37/react-wheel-time-picker.git"
  },
  "keywords": [
    "typescript",
    "react",
    "timePicker",
    "wheel"
  ],
  "author": "rodolphe Augusto",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/rodolphe37/react-wheel-time-picker/issues"
  },
  "homepage": "https://github.com/rodolphe37/react-wheel-time-picker#readme",
  "description": "",
  "devDependencies": {
    "@rollup/plugin-commonjs": "^26.0.1",
    "@rollup/plugin-node-resolve": "^15.2.3",
    "@rollup/plugin-terser": "^0.4.4",
    "@rollup/plugin-typescript": "^11.1.6",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@types/rollup-plugin-peer-deps-external": "^2.2.5",
    "postcss": "^8.4.45",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "rollup": "^4.21.2",
    "rollup-plugin-css-modules": "^0.1.2",
    "rollup-plugin-dts": "^6.1.1",
    "rollup-plugin-import-css": "^3.5.1",
    "rollup-plugin-peer-deps-external": "^2.2.4",
    "rollup-plugin-postcss": "^4.0.2",
    "tslib": "^2.7.0",
    "typescript": "^5.6.2"
  },
  "peerDependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  }
}



================================================
FILE: rollup.config.js
================================================
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";


export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
      sourcemap: true,
      exports: "auto",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser(),
    postcss(),
  ],
  external: ["react", "react-dom", "react-player", /\.css$/], // Ensure these are not bundled
};



================================================
FILE: tsconfig.json
================================================
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "esnext",
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}



================================================
FILE: src/index.tsx
================================================
import TimePicker from './components/TimePicker';
import { TimePickerProps } from './components/TimePicker.type';
import './styles/react-wheel-time-picker.css'


export { TimePicker };
export type {  TimePickerProps };


================================================
FILE: src/components/HoursFormat.tsx
================================================
import {
  useEffect,
  useState,
  useRef,
  MouseEvent,
  TouchEvent,
  WheelEvent,
} from "react";

function HourFormat({
  height,
  setHourFormat,
  hourFormat,
  isDarkMode
}: {
  height: number;
  isDarkMode?: boolean ;
  value: string | null | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  onAmPmChange: (value: string) => void;
  setHourFormat: React.Dispatch<
    React.SetStateAction<{
      mount: boolean;
      hourFormat: string;
    }>
  >;
  hourFormat: {
    mount: boolean;
    hourFormat: string;
  };
}) {
  const Hours = [
    {
      number: "AM",
      translatedValue: (height * 2).toString(),
      selected: false,
    },
    {
      number: "PM",
      translatedValue: height.toString(),
      selected: false,
    },
  ];

  const [hours, setHours] = useState([
    {
      number: "AM",
      translatedValue: (height * 2).toString(),
      selected: hourFormat.hourFormat === "AM",
    },
    {
      number: "PM",
      translatedValue: height.toString(),
      selected: hourFormat.hourFormat === "PM",
    },
  ]);
  const mainListRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [firstCursorPosition, setFirstCursorPosition] = useState<number>(0);
  const [currentTranslatedValue, setCurrentTranslatedValue] = useState(
    parseInt(hours.filter((item) => item.selected === true)[0]?.translatedValue ?? "00:00")
  );
  const [startCapture, setStartCapture] = useState(false);
  const [showFinalTranslate, setShowFinalTranslate] = useState(false);
  // start and end times
  const [dragStartTime, setDragStartTime] = useState<number>(0);
  const [dragEndTime, setDragEndTime] = useState<number>(0);
  // drag duration
  const [, setDragDuration] = useState<number | null>(null);
  // drag type fast or slow
  const [, setDragType] = useState<string>("");
  // drag direction
  const [dragDirection, setDragDirection] = useState<string | null>(null);
  // selected number
  const [, setSelectedNumber] = useState<number | undefined>(undefined);

  const handleMouseDown = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.targetTouches[0].clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleMouseUp = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev + cursorPosition!);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }
    if (cursorPosition < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseLeave = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev + cursorPosition);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());

    if (cursorPosition < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (startCapture) {
      setCursorPosition(e.clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (startCapture) {
      setCursorPosition(e.targetTouches[0].clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  // preview translation
  useEffect(() => {
    if (startCapture) {
      mainListRef.current!.style.transform = `translateY(${
        currentTranslatedValue + cursorPosition
      }px)`;
    }
  }, [cursorPosition, currentTranslatedValue, startCapture]);

  // final translation here
  useEffect(() => {
    if (showFinalTranslate) {
      setDragDuration(dragEndTime - dragStartTime);

      let finalValue = Math.round(currentTranslatedValue / height) * height;
      if (finalValue < height) finalValue = height;
      if (finalValue > height * 2) finalValue = height * 2;
      mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
      setCurrentTranslatedValue(finalValue);
      setCursorPosition(0);
    }
  }, [
    showFinalTranslate,
    currentTranslatedValue,
    cursorPosition,
    dragDirection,
    dragEndTime,
    height,
    dragStartTime,
  ]);

  // return to default position after drag end (handleTransitionEnd)
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    const propertyName = e.propertyName;
    if (propertyName === "transform") {
      const selectedValueArray = [
        {
          number: "AM",
          translatedValue: (height * 2).toString(),
          arrayNumber: 0,
        },
        {
          number: "PM",
          translatedValue: height.toString(),
          arrayNumber: 1,
        },
      ];
      selectedValueArray.map((item) => {
        if (parseInt(item.translatedValue) === currentTranslatedValue) {
          setSelectedNumber(item.arrayNumber);
          setHourFormat({ mount: true, hourFormat: item.number });
          setHours(() => {
            const newValue = Hours.map((hour) => {
              if (
                hour.number == item.number &&
                +hour.translatedValue == currentTranslatedValue
              ) {
                return {
                  ...hour,
                  selected: true,
                };
              }
              return hour;
            });
            return newValue;
          });
        }
      });
    }
  };

  // handle click to select number
  const handleClickToSelect = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (cursorPosition === 0) {
      setCurrentTranslatedValue(parseInt(target.dataset.translatedValue!));
    }
  };

  /** ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (currentTranslatedValue <= height) {
        setCurrentTranslatedValue((prev) => prev + height);
      }
    } else if (currentTranslatedValue >= height * 2) {
      setCurrentTranslatedValue((prev) => prev - height);
    }
  };

  return (
    <div
      className="react-wheel-time-picker-hour-format"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: height * 5 }}
      onWheel={handleWheelScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* <PickerEffects height={height} /> */}
      <div
        ref={mainListRef}
        className={`${
          showFinalTranslate && "react-wheel-time-picker-hour-format-transition"
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map((hourObj, index) => (
          <div
            key={index}
            className="react-wheel-time-picker-cell-hour"
            style={{ height: `${height}px` }}
          >
            <div
            style={hourObj.selected ? {color:  isDarkMode ? "#f7f7f7" : "#000"}:{}}
              className={`react-wheel-time-picker-cell-inner-hour-format${
                hourObj.selected
                  ? " react-wheel-time-picker-cell-inner-hour-format-selected"
                  : ""
              }`}
              onClick={handleClickToSelect}
              data-translated-value={hourObj.translatedValue}
            >
              {hourObj.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourFormat;



================================================
FILE: src/components/HourWheel.tsx
================================================
import {
  useEffect,
  useState,
  useRef,
  TouchEvent,
  WheelEvent,
  MouseEvent,
} from "react";
import { initialNumbersValue, returnSelectedValue } from "../helpers";

function HourWheel({
  height,
  value,
  setValue,
  use12Hours,
  isDarkMode,
}: {
  height: number;
  value: string | null | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  use12Hours: boolean | undefined;
  isDarkMode?: boolean;
}) {
  const hourLength = use12Hours ? 13 : 24;
  const [hours, setHours] = useState(
    initialNumbersValue(height, hourLength, parseInt(value!.slice(0, 2)))
  );
  const mainListRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);
  const [firstCursorPosition, setFirstCursorPosition] = useState<number>(0);
  const [currentTranslatedValue, setCurrentTranslatedValue] = useState(
    parseInt(
      initialNumbersValue(
        height,
        hourLength,
        parseInt(value!.slice(0, 2))
      ).filter(
        (item) => item.number === value!.slice(0, 2) && item.selected === true
      )[0]?.translatedValue ?? "00"
    )
  );
  const [startCapture, setStartCapture] = useState(false);
  const [showFinalTranslate, setShowFinalTranslate] = useState(false);
  // start and end times
  const [dragStartTime, setDragStartTime] = useState<number>(0);
  const [dragEndTime, setDragEndTime] = useState<number>(0);
  // drag duration
  const [, setDragDuration] = useState<number | null>(null);
  // drag type fast or slow
  const [dragType, setDragType] = useState<string | null>(null);
  // drag direction
  const [dragDirection, setDragDirection] = useState<string | null>(null);
  // selected number
  const [, setSelectedNumber] = useState<number | undefined>(undefined);

  const handleMouseDown = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.targetTouches[0].clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleMouseUp = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev + cursorPosition!);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }
    if (cursorPosition! < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseLeave = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => prev + cursorPosition!);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }

    if (cursorPosition! < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (startCapture) {
      setCursorPosition(e.clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (startCapture) {
      setCursorPosition(e.targetTouches[0].clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  // preview translation
  useEffect(() => {
    if (startCapture && mainListRef.current !== undefined) {
      mainListRef.current!.style!.transform = `translateY(${
        currentTranslatedValue + cursorPosition!
      }px)`;
    }
  }, [cursorPosition, currentTranslatedValue, startCapture]);

  // final translation here
  useEffect(() => {
    if (showFinalTranslate && mainListRef.current !== undefined) {
      setDragDuration(dragEndTime - dragStartTime);
      if (dragEndTime - dragStartTime <= 100 && cursorPosition !== 0) {
        let currentValue;
        if (dragDirection === "down") {
          currentValue =
            currentTranslatedValue -
            (120 / (dragEndTime - dragStartTime)) * 100;
        } else if (dragDirection === "up") {
          currentValue =
            currentTranslatedValue +
            (120 / (dragEndTime - dragStartTime)) * 100;
        }
        let finalValue = Math.round(currentValue! / height) * height;
        if (use12Hours) {
          if (finalValue < height * -34) finalValue = height * -34;
          if (finalValue > height) finalValue = height;
        } else {
          if (finalValue < height * -69) finalValue = height * -69;
          if (finalValue > height * 2) finalValue = height * 2;
        }

        mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      if (dragEndTime - dragStartTime > 100 && cursorPosition !== 0) {
        let finalValue = Math.round(currentTranslatedValue / height) * height;
        if (use12Hours) {
          if (finalValue < height * -34) finalValue = height * -34;
          if (finalValue > height) finalValue = height;
        } else {
          if (finalValue < height * -69) finalValue = height * -69;
          if (finalValue > height * 2) finalValue = height * 2;
        }
        mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      setCursorPosition(0);
    }
  }, [
    showFinalTranslate,
    currentTranslatedValue,
    cursorPosition,
    dragDirection,
    dragEndTime,
    dragStartTime,
    height,
    use12Hours,
  ]);

  // return to default position after drag end (handleTransitionEnd)
  const handleTransitionEnd = () => {
    returnSelectedValue(height, hourLength).map((item) => {
      if (parseInt(item.translatedValue) === currentTranslatedValue) {
        setSelectedNumber(item.arrayNumber);
        setValue((prev) => `${item.number}:${prev!.slice(3, 6)}`);
        setHours(() => {
          const newValue = initialNumbersValue(height, hourLength).map(
            (hour) => {
              if (
                hour.number == item.number &&
                +hour.translatedValue == currentTranslatedValue
              ) {
                return {
                  ...hour,
                  selected: true,
                };
              }
              return hour;
            }
          );
          return newValue;
        });
      }
    });
  };

  // handle click to select number
  const handleClickToSelect = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (cursorPosition === 0) {
      setCurrentTranslatedValue(parseInt(target.dataset.translatedValue!));
    }
  };

  const isFastCondition = showFinalTranslate && dragType === "fast";
  const isSlowCondition = showFinalTranslate && dragType === "slow";

  /** ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: WheelEvent) => {
    if (use12Hours) {
      if (e.deltaY > 0) {
        if (currentTranslatedValue < height) {
          setCurrentTranslatedValue((prev) => prev + height);
        }
      } else if (currentTranslatedValue > height * -34) {
        setCurrentTranslatedValue((prev) => prev - height);
      }
    } else if (e.deltaY > 0) {
      if (currentTranslatedValue < height * 2) {
        setCurrentTranslatedValue((prev) => prev + height);
      }
    } else if (currentTranslatedValue > height * -69) {
      setCurrentTranslatedValue((prev) => prev - height);
    }
  };

  return (
    <div
      className={`react-wheel-time-picker-hour ${
        use12Hours && "react-wheel-time-picker-hour-12hour-format"
      }`}
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: height * 5.7 }}
      onWheel={handleWheelScroll}
      onTouchStart={(e) => handleTouchStart(e)}
      onTouchMove={(e) => handleTouchMove(e)}
      onTouchEnd={handleMouseUp}
    >
      {/* <PickerEffects height={height} /> */}
      <div
        ref={mainListRef!}
        className={`${
          isFastCondition === true && "react-wheel-time-picker-fast"
        } ${isSlowCondition === true && "react-wheel-time-picker-slow"}`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map((hourObj, index) => (
          <div
            key={index}
            className="react-wheel-time-picker-cell-hour"
            style={{ height: `${height}px` }}
          >
            <div
              style={{
                color: isDarkMode
                  ? "#f7f7f7"
                  : hourObj.selected
                  ? "#000"
                  : "#6a6a6b",
                fontSize: hourObj.selected ? 18 : 14,
              }}
              className={`react-wheel-time-picker-cell-inner-hour${
                hourObj.selected
                  ? " react-wheel-time-picker-cell-inner-selected"
                  : ""
              }${
                hourObj?.hidden
                  ? " react-wheel-time-picker-cell-inner-hidden"
                  : ""
              }`}
              onClick={handleClickToSelect}
              data-translated-value={hourObj.translatedValue}
            >
              {hourObj.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourWheel;



================================================
FILE: src/components/MinuteWheel.tsx
================================================
import {
  useEffect,
  useState,
  useRef,
  MouseEvent,
  TouchEvent,
  WheelEvent,
} from "react";
import { initialNumbersValue, returnSelectedValue } from "../helpers";

function MinuteWheel({
  height,
  value,
  setValue,
  isDarkMode,
}: {
  height: number;
  value: string | null | undefined;
  setValue: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  isDarkMode?: boolean;
}) {
  const [hours, setHours] = useState(
    initialNumbersValue(height, 60, parseInt(value!.slice(3, 6)))
  );
  const mainListRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [firstCursorPosition, setFirstCursorPosition] = useState<number>(0);
  const [currentTranslatedValue, setCurrentTranslatedValue] = useState<
    number | string
  >(
    value! &&
      parseInt(
        initialNumbersValue(height, 60, parseInt(value.slice(3, 6))).filter(
          (item) =>
            item.number === value.toString().slice(3, 6) &&
            item.selected === true
        )[0].translatedValue
      )
  );
  const [startCapture, setStartCapture] = useState(false);
  const [showFinalTranslate, setShowFinalTranslate] = useState(false);
  // start and end times
  const [dragStartTime, setDragStartTime] = useState<number>(0);
  const [dragEndTime, setDragEndTime] = useState<number>(0);
  // drag duration
  const [, setDragDuration] = useState<number | null>(null);
  // drag type fast or slow
  const [dragType, setDragType] = useState<string>("");
  // drag direction
  const [dragDirection, setDragDirection] = useState<string | null>(null);
  // selected number
  const [, setSelectedNumber] = useState<number | undefined>(undefined);

  const handleMouseDown = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setShowFinalTranslate(false);
    setFirstCursorPosition(e.targetTouches[0].clientY);
    setStartCapture(true);
    setDragStartTime(performance.now());
  };

  const handleMouseUp = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => +prev + cursorPosition);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }

    if (cursorPosition < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseLeave = () => {
    setStartCapture(false);
    setCurrentTranslatedValue((prev) => +prev + cursorPosition);
    setShowFinalTranslate(true);
    setDragEndTime(performance.now());
    if (performance.now() - dragStartTime <= 100) {
      setDragType("fast");
    } else {
      setDragType("slow");
    }

    if (cursorPosition < 0) {
      setDragDirection("down");
    } else {
      setDragDirection("up");
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (startCapture) {
      setCursorPosition(e.clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (startCapture) {
      setCursorPosition(e.targetTouches[0].clientY - firstCursorPosition);
    } else {
      setCursorPosition(0);
    }
  };

  // preview translation
  useEffect(() => {
    if (startCapture) {
      mainListRef.current!.style.transform = `translateY(${
        +currentTranslatedValue + cursorPosition!
      }px)`;
    }
  }, [cursorPosition, currentTranslatedValue, startCapture]);

  // final translation here
  useEffect(() => {
    if (showFinalTranslate) {
      setDragDuration(dragEndTime - dragStartTime);
      if (dragEndTime - dragStartTime <= 100 && cursorPosition !== 0) {
        let currentValue;
        if (dragDirection === "down") {
          currentValue =
            +currentTranslatedValue -
            (120 / (dragEndTime - dragStartTime)) * 100;
        } else if (dragDirection === "up") {
          currentValue =
            +currentTranslatedValue +
            (120 / (dragEndTime - dragStartTime)) * 100;
        }
        let finalValue = Math.round(currentValue! / height) * height;
        if (finalValue < height * -177) finalValue = height * -177;
        if (finalValue > height * 2) finalValue = height * 2;

        mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      if (dragEndTime - dragStartTime > 100 && cursorPosition !== 0) {
        let finalValue = Math.round(+currentTranslatedValue / height) * height;
        if (finalValue < height * -177) finalValue = height * -177;
        if (finalValue > height * 2) finalValue = height * 2;
        mainListRef.current!.style.transform = `translateY(${finalValue}px)`;
        setCurrentTranslatedValue(finalValue);
      }
      setCursorPosition(0);
    }
  }, [
    showFinalTranslate,
    currentTranslatedValue,
    cursorPosition,
    dragDirection,
    dragEndTime,
    height,
    dragStartTime,
  ]);

  // return to default position after drag end (handleTransitionEnd)
  const handleTransitionEnd = () => {
    returnSelectedValue(height, 60).map((item) => {
      if (parseInt(item.translatedValue) === currentTranslatedValue) {
        setSelectedNumber(item.arrayNumber);
        setValue((prev) => `${prev?.slice(0, 2)}:${item.number}`);
        setHours(() => {
          const newValue = initialNumbersValue(height, 60).map((hour) => {
            if (
              hour.number == item.number &&
              +hour.translatedValue == currentTranslatedValue
            ) {
              return {
                ...hour,
                selected: true,
              };
            }
            return hour;
          });
          return newValue;
        });
      }
    });
  };

  // handle click to select number
  const handleClickToSelect = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (cursorPosition === 0) {
      setCurrentTranslatedValue(parseInt(target.dataset.translatedValue!));
    }
  };

  const isFastCondition = showFinalTranslate && dragType === "fast";
  const isSlowCondition = showFinalTranslate && dragType === "slow";

  /* ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (+currentTranslatedValue < height * 2) {
        setCurrentTranslatedValue((prev) => +prev + height);
      }
    } else if (+currentTranslatedValue > height * -177) {
      setCurrentTranslatedValue((prev) => +prev - height);
    }
  };

  return (
    <div
      className="react-wheel-time-picker-minute"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: height * 5.7 }}
      onWheel={handleWheelScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* <PickerEffects height={height} /> */}
      <div
        ref={mainListRef}
        className={`${
          isFastCondition === true && "react-wheel-time-picker-fast"
        } ${isSlowCondition === true && "react-wheel-time-picker-slow"}`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map(
          (
            hourObj: {
              number: string;
              translatedValue: string;
              selected?: boolean | undefined;
              arrayNumber?: number | undefined;
            },
            index: number
          ) => (
            <div
              key={index}
              className="react-wheel-time-picker-cell-minute"
              style={{ height: `${height}px` }}
            >
              <div
                style={{
                  color: isDarkMode
                    ? "#f7f7f7"
                    : hourObj.selected
                    ? "#000"
                    : "#6a6a6b",
                  fontSize: hourObj.selected ? 18 : 14,
                }}
                className={`react-wheel-time-picker-cell-inner-minute${
                  hourObj.selected
                    ? " react-wheel-time-picker-cell-inner-selected"
                    : ""
                }`}
                onClick={handleClickToSelect}
                data-translated-value={hourObj.translatedValue}
              >
                {hourObj.number}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MinuteWheel;



================================================
FILE: src/components/PickerEffects.tsx
================================================
function PickerEffects({ height }:{height:number}) {
  return (
    <>
      <div
        className="react-wheel-time-picker-top-shadow"
        style={{ height: `${height * 2}px` }}
      />
      <div
        className="react-wheel-time-picker-bottom-shadow"
        style={{ height: `${height * 2}px` }}
      />
    </>
  );
}

export default PickerEffects;



================================================
FILE: src/components/TimePicker.tsx
================================================
import { useState } from "react";

import "../styles/react-wheel-time-picker.css";
import TimePickerSelection from "./TimePickerSelection";
import TimePickerWrapper from "./TimePickerWrapper";
import { TimePickerProps } from "./TimePicker.type";

function TimePicker({
  value: initialValue = "",
  cellHeight = 28,
  placeHolder = "Select Time",
  pickerDefaultValue = "",
  onChange = () => {},
  onFocus = () => {},
  onSave = () => {},
  onCancel = () => {},
  disabled = false,
  isOpen: initialIsOpenValue = false,
  required = false,
  cancelButtonText = "Cancel",
  saveButtonText = "Save",
  controllers = true,
  seperator = true,
  id = null,
  use12Hours = false,
  onAmPmChange = () => {},
  name = null,
  onOpen = () => {},
  popupClassName = null,
  inputClassName = null,
  isDarkMode,
  label,
}: TimePickerProps) {
  const [isOpen, setIsOpen] = useState(initialIsOpenValue);
  const [height] = useState(cellHeight);
  const [inputValue, setInputValue] = useState(initialValue);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleFocus = () => {
    onFocus();
    onOpen();
  };

  let finalValue = inputValue;

  if (initialValue === null && use12Hours) {
    finalValue = `${pickerDefaultValue} AM`;
  } else if (initialValue === null && !use12Hours) {
    finalValue = pickerDefaultValue;
  }

  const params = {
    onChange,
    height,
    onSave,
    onCancel,
    cancelButtonText,
    saveButtonText,
    controllers,
    setInputValue,
    setIsOpen,
    seperator,
    use12Hours,
    onAmPmChange,
    initialValue: finalValue,
    pickerDefaultValue,
    isDarkMode,
  };

  return (
    <>
      <div
        className="react-wheel-time-picker-main"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        <label className="label">{label}</label>
        <input
          id={id!}
          name={name!}
          className={`react-wheel-time-picker-input ${inputClassName || ""}`}
          value={inputValue === null ? "" : inputValue}
          type="text"
          style={{
            width: "80%",
            color: isDarkMode ? "#fff" : "#000",
            border: isDarkMode ? "1px solid #fff" : "1px solid #0005",
          }}
          placeholder={placeHolder}
          readOnly
          disabled={disabled}
          required={required}
          onFocus={handleFocus}
        />
      </div>
      {isOpen && !disabled && (
        <TimePickerWrapper isOpen={isOpen} isDarkMode={isDarkMode!}>
          <div>
            <div className="react-wheel-time-picker-popup">
              <div
                className={`react-wheel-time-picker-popup-overlay ${
                  popupClassName || ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
              />
              <TimePickerSelection {...params} />
            </div>
          </div>
        </TimePickerWrapper>
      )}
    </>
  );
}

export default TimePicker;



================================================
FILE: src/components/TimePicker.type.ts
================================================
export interface TimePickerProps {
    value: string | null;
    cellHeight?: number;
    placeHolder?: string;
    pickerDefaultValue?: string;
    onChange: (timeValue: string) => void;
    onFocus?: () => void;
    onSave?: (finalSelectedValue: string | undefined) => void;
    onCancel?: () => void;
    disabled?: boolean;
    isOpen?: boolean;
    required?: boolean;
    cancelButtonText?: string;
    saveButtonText?: string;
    controllers?: boolean;
    seperator?: boolean;
    id?: string | null;
    use12Hours?: boolean;
    onAmPmChange?: (value: string) => void;
    name?: string | null;
    onOpen?: () => void;
    popupClassName?: string | null;
    inputClassName?: string | null;
    isDarkMode?: boolean;
    label?: string;
  }


================================================
FILE: src/components/TimePickerSelection.tsx
================================================
import { useEffect, useState } from "react";
import HourWheel from "./HourWheel";
import MinuteWheel from "./MinuteWheel";
import HourFormat from "./HoursFormat";

function TimePickerSelection({
  pickerDefaultValue,
  initialValue,
  onChange,
  height,
  onSave,
  onCancel,
  cancelButtonText,
  saveButtonText,
  controllers,
  setInputValue,
  setIsOpen,
  seperator,
  use12Hours,
  onAmPmChange,
  isDarkMode,
}: {
  pickerDefaultValue?: string;
  initialValue: string | null;
  onChange: (timeValue: string) => void;
  height: number;
  onSave: (finalSelectedValue: string) => void;
  onCancel: () => void;
  cancelButtonText?: string;
  saveButtonText?: string;
  controllers?: boolean;
  setInputValue: React.Dispatch<React.SetStateAction<string | null>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  seperator?: boolean;
  use12Hours?: boolean;
  onAmPmChange: (value: string) => void;
  isDarkMode?: boolean;
}) {
  const initialTimeValue = use12Hours
    ? initialValue?.slice(0, 5)
    : initialValue;
  const [value, setValue] = useState(
    initialValue === null ? pickerDefaultValue : initialTimeValue
  );
  const [hourFormat, setHourFormat] = useState<{
    mount: boolean;
    hourFormat: string;
  }>({
    mount: false,
    hourFormat: initialValue! && initialValue?.slice(6, 8),
  });

  useEffect(() => {
    if (controllers === false) {
      const finalSelectedValue = use12Hours
        ? `${value} ${hourFormat.hourFormat}`
        : value;
      setInputValue(finalSelectedValue!);
      onChange(finalSelectedValue!);
    }
  }, [
    value,
    controllers,
    hourFormat.hourFormat,
    onChange,
    setInputValue,
    use12Hours,
  ]);

  useEffect(() => {
    if (hourFormat.mount) {
      onAmPmChange(hourFormat.hourFormat);
    }
  }, [hourFormat, onAmPmChange]);


  const params = {
    height,
    value,
    setValue,
    controllers,
    use12Hours,
    onAmPmChange,
    setHourFormat,
    hourFormat,
    isDarkMode,
  };

  const handleSave = () => {
    const finalSelectedValue = use12Hours
      ? `${value} ${hourFormat.hourFormat}`
      : value;
    if (finalSelectedValue) {
      setInputValue(finalSelectedValue);
      onChange(finalSelectedValue);
      onSave(finalSelectedValue);
    }
    setIsOpen(false);
  };
  const handleCancel = () => {
    onCancel();
    setIsOpen(false);
  };

  return (
    <div className="react-wheel-time-picker  react-wheel-time-picker-transition">
      {controllers && (
        <div
          className="react-wheel-time-picker-btn-container"
          style={
            isDarkMode ? { background: "#000" } : { backgroundColor: "#d6d6d6" }
          }
        >
          <button
            style={{
              backgroundColor: isDarkMode ? "#000" : "#d6d6d6",
              color: isDarkMode ? "#fe9f06" : "#262626",
            }}
            className="react-wheel-time-picker-btn react-wheel-time-picker-btn-cancel"
            onClick={handleCancel}
          >
            {cancelButtonText}
          </button>
          <button
            style={{
              background: isDarkMode ? "#000" : "#d6d6d6",
              color: isDarkMode ? "#fe9f06" : "#262626",
            }}
            className="react-wheel-time-picker-btn"
            onClick={handleSave}
          >
            {saveButtonText}
          </button>
        </div>
      )}
      <div
        className="react-wheel-time-picker-container"
        style={{
          height: `${height * 5 + 20}px`,
          backgroundColor: isDarkMode ? "#1d1d1d" : "#f6f6f6f6",
        }}
      >
        <div
          className="react-wheel-time-picker-selected-overlay"
          style={{
            top: `${height * 2 + 20}px`,
            height: `${height}px`,
            backgroundColor: isDarkMode ? "#2c2c2f" : "#d3d3d3d3",
          }}
        />
        <HourWheel {...params} />
        {seperator && (
          <div
            className="react-wheel-time-picker-colon"
            style={{ color: isDarkMode ? "#f7f7f7" : "#000" }}
          >
            :
          </div>
        )}
        <MinuteWheel {...params} />
        {use12Hours && <HourFormat {...params} />}
      </div>
    </div>
  );
}

export default TimePickerSelection;



================================================
FILE: src/components/TimePickerWrapper.tsx
================================================
const TimePickerWrapper = ({
  isOpen,
  isDarkMode,
  children,
}: {
  children: JSX.Element;
  isOpen: boolean;
  isDarkMode: boolean
}) => {
  return (
    <div
      style={
        isOpen
          ? {
              width: "100%",
              height: "100%",
              backgroundColor: isDarkMode ? "rgba(58,54,56,0.83)" : "rgba(0,0,0,0.83)",
              position: "absolute",
              top: 0,
              left:0
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default TimePickerWrapper;



================================================
FILE: src/helpers/index.ts
================================================
export type arrayOfSelectedValueProps = {
    number: string;
    translatedValue: string;
    selected?: boolean;
    arrayNumber?: number
    hidden?: boolean
  }[];


export const initialNumbersValue = (
  heightValue = 54,
  numbersLength = 24,
  value = 0
) => {
  const initialValue24hourFormat = [
    {
      number: "00",
      translatedValue: (heightValue * 2).toString(),
      selected: false,
    },
    {
      number: "01",
      translatedValue: heightValue.toString(),
      selected: false,
    },
  ];

  const initialValue12hourFormat = [
    {
      number: "00",
      translatedValue: heightValue.toString(),
      selected: false,
      hidden: true,
    },
    {
      number: "01",
      translatedValue: heightValue.toString(),
      selected: false,
    },
  ];



  const arrayOfSelectedValue: arrayOfSelectedValueProps =
    numbersLength === 13 ? initialValue12hourFormat : initialValue24hourFormat;
  let count = 0;
  for (let index = 0; index < 3; index++) {
    for (let j = 0; j < numbersLength; j++) {
      if ((index === 0 && j < 2) || (numbersLength === 13 && j === 0)) {
        continue;
      }
      if (index === 1 && j === value) {
        if (Number(j).toString().length === 1) {
          arrayOfSelectedValue.push({
            number: `0${Number(j).toString()}`,
            translatedValue: `-${count}`,
            selected: true,
          });
        } else {
          arrayOfSelectedValue.push({
            number: Number(j).toString(),
            translatedValue: `-${count}`,
            selected: true,
          });
        }
        count += heightValue;
        continue;
      }
      if (j.toString().length === 1) {
        arrayOfSelectedValue.push({
          number: `0${j.toString()}`,
          translatedValue: `-${count}`,
          selected: false,
        });
      } else {
        arrayOfSelectedValue.push({
          number: j.toString(),
          translatedValue: `-${count}`,
          selected: false,
        });
      }

      count += heightValue;
    }
  }

  return arrayOfSelectedValue;
};

export const returnSelectedValue = (heightValue = 54, numbersLength = 24) => {
  const arrayOfSelectedValue:arrayOfSelectedValueProps = [
    {
      number: "00",
      translatedValue: (heightValue * 2).toString(),
      arrayNumber: 0,
    },
    {
      number: "01",
      translatedValue: heightValue.toString(),
      arrayNumber: 1,
    },
  ];
  let count = 0;
  for (let index = 0; index < 3; index++) {
    for (let j = 0; j < numbersLength; j++) {
      if ((index === 0 && j < 2) || (numbersLength === 13 && j === 0)) {
        continue;
      }
      if (j.toString().length === 1) {
        arrayOfSelectedValue.push({
          number: `0${j.toString()}`,
          translatedValue: `-${count}`,
          selected: false,
        });
      } else {
        arrayOfSelectedValue.push({
          number: j.toString(),
          translatedValue: `-${count}`,
          selected: false,
        });
      }

      count += heightValue;
    }
  }
  return arrayOfSelectedValue;
};



================================================
FILE: src/styles/react-wheel-time-picker.css
================================================


button {
  border: none;
  background: transparent;
  cursor: pointer;
}

input {
  border: none;
  background: transparent;
  cursor: pointer;
}
input:focus {
  outline: none;
}

.react-wheel-time-picker {
  margin-bottom: 50px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 11px 15px #0005;
}

.react-wheel-time-picker-transition {
  animation: fade-in 150ms ease-out;
}

@keyframes fade-in {
  0% {
    transform: translateY(150px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.react-wheel-time-picker-container {
  display: flex;
  justify-content: center;
  position: relative;
  width: 220px;
  overflow: hidden;
  padding: 20px 0;
}

.react-wheel-time-picker-hour {
  position: relative;
  width: 50px;
  overflow: hidden;
  z-index: 100;
  margin-right: 5px;
}

.react-wheel-time-picker-minute {
  position: relative;
  width: 50px;
  overflow: hidden;
  z-index: 100;
  margin-left: 5px;
}

.react-wheel-time-picker-hour-format {
  position: relative;
  width: 40px;
  overflow: hidden;
  z-index: 100;
}

.react-wheel-time-picker-fast {
  transition: transform 700ms cubic-bezier(0.13, 0.67, 0.01, 0.94);
}

.react-wheel-time-picker-slow {
  transition: transform 600ms cubic-bezier(0.13, 0.67, 0.01, 0.94);
}

.react-wheel-time-picker-selected-overlay {
  position: absolute;
  border-radius: 6px;
  pointer-events: none;
  margin: 0 10px;
  left: 0;
  right: 0;
  z-index: 1;
}

.react-wheel-time-picker-top-shadow {
  position: absolute;
  top: 0;
  width: 100%;
  background: #0009;
  background: linear-gradient(180deg, #0009 0%, #1c1c1c 100%);
}

.react-wheel-time-picker-bottom-shadow {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #0009;
  background: linear-gradient(0deg, #0009 0%, hsla(0, 0%, 11%, 1) 100%);
}

.react-wheel-time-picker-cell-hour {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: end;
  align-items: center;
  user-select: none;
  transition: all 100ms linear;
}
.react-wheel-time-picker-cell-minute {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  user-select: none;
  transition: all 100ms linear;
}
.react-wheel-time-picker-cell-hour-format {
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: end;
  align-items: center;
  user-select: none;
  transition: all 100ms linear;
}

.react-wheel-time-picker-cell-inner-hour {
  width: fit-content;
  height: 100%;
  transition: all 100ms linear;
  cursor: pointer;
  border-radius: 7px;
  line-height: 35px;
  text-align: center;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  color: #666;
  padding: 0 10px;
}

.react-wheel-time-picker-cell-inner-hour-format {
  width: fit-content;
  height: 100%;
  transition: all 100ms linear;
  cursor: pointer;
  border-radius: 7px;
  line-height: 35px;
  text-align: center;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 14px;
  color: #6a6a6b;
  padding: 0 10px;
}

.react-wheel-time-picker-cell-inner-minute {
  width: fit-content;
  height: 100%;
  transition: all 100ms linear;
  cursor: pointer;
  border-radius: 7px;
  line-height: 35px;
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  color: #6a6a6b;
  padding: 0 10px;
}

.react-wheel-time-picker-cell-inner-hour:hover,
.react-wheel-time-picker-cell-inner-minute:hover,
.react-wheel-time-picker-cell-inner-hour-format:hover {
  background-color: #ff9d0ac9;
  color: white;
}

.react-wheel-time-picker-cell-inner-selected {
  font-size: 16px;
}

.react-wheel-time-picker-cell-inner-hour-format-selected {
  font-weight: 400;
}

.react-wheel-time-picker-btn-container {
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #333;
  z-index: 100;
}

.react-wheel-time-picker-btn {
  padding: 10px 15px;
  font-size: 14px;
  transition: all 150ms linear;
  font-weight: 500;
  z-index: 1;
}

.react-wheel-time-picker-btn:hover {
  opacity: 0.6;
}

.react-wheel-time-picker-btn-cancel {
  font-size: 12px;
  font-weight: 300;
}

.react-wheel-time-picker-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 99998;
}

.react-wheel-time-picker-popup-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.label {
  color: #888;
}

.react-wheel-time-picker-input {
  cursor: text;
  padding: 5px 10px;
  border-radius: 5px;
}

.react-wheel-time-picker-colon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 100;
  font-weight: 600;
  top: -9%;
}

.react-wheel-time-picker-cell-inner-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.react-wheel-time-picker-hour-format-transition {
  transition: transform 100ms ease-out;
}



================================================
FILE: .github/workflows/publish-npm-package.yml
================================================
name: Publish NPM Package
on:
  release:
    types: [published]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Setup .npmrc file to publish to npm
      - uses: actions/setup-node@v4
        with:
          node-version: '20.x'
          registry-url: 'https://registry.npmjs.org'
      - run: npm i
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}


