import { Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import Styled from "./style";

interface INumber {
  check: boolean;
  number: number | null;
}

const initialNumber = [
  { check: false, number: null },
  { check: false, number: null },
  { check: false, number: null },
];

const Homepage: React.FC = () => {
  const [number, setNumber] = React.useState<INumber[]>(initialNumber);
  const [result, setResult] = React.useState<number>(0);

  const handleChangeNumber = (index: number, values: INumber) => {
    let dummy = number;
    // console.log(values);
    if (values.number) {
      dummy[index] = { check: values.check, number: values.number };
      setNumber([...dummy]);
    } else {
      dummy[index] = { check: values.check, number: null };
      setNumber([...dummy]);
    }
  };

  const handleResult = (operations: string) => {
    let results = 0;
    let countCheck = number.filter((vals) => vals.check).length;

    if (countCheck > 1) {
      switch (operations) {
        case "+":
          number.forEach((val) => {
            if (val.check && val.number) {
              results += val.number;
            }
          });
          setResult(results);
          break;

        case "-":
          number.forEach((val, i) => {
            if (val.check && val.number) {
              results = i === 0 ? val.number : results - val.number;
            }
          });
          setResult(results);
          break;

        case "*":
          number.forEach((val, i) => {
            if (val.check && val.number) {
              results = i === 0 ? val.number : results * val.number;
            }
          });
          setResult(results);
          break;

        default:
          number.forEach((val, i) => {
            if (val.check && val.number) {
              results = i === 0 ? val.number : results / val.number;
            }
          });
          // console.log(results);
          setResult(results);
          break;
      }
      setNumber(initialNumber);
    } else {
      alert("Please check more than 1 field!");
    }
    // number.forEach((val) => {
    //   if (val.check && val.number) {
    //     console.log((results += val.number));
    //   }
    // });
  };
  return (
    <Styled.MainContainer>
      <Styled.CenteringDiv>
        {number?.map((vals, i) => (
          <Styled.FlexContainer key={i}>
            <TextField
              // aria-label={`numbers${i}`}
              value={vals.number === null ? "" : vals.number}
              id="outlined-basic"
              variant="outlined"
              style={{ width: "80%" }}
              name={`number${i}`}
              type="number"
              // inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              inputProps={{ "aria-label": `numbers${i}` }}
              onChange={(e) =>
                handleChangeNumber(i, {
                  number: parseInt(e.target.value),
                  check: number[i].check,
                })
              }
            />
            <Checkbox
              // aria-label={`checks${i}`}
              inputProps={{ "aria-label": `checks${i}` }}
              name={`check${i}`}
              style={{ width: "20%" }}
              checked={vals.check}
              onChange={(e) =>
                handleChangeNumber(i, {
                  number: number[i].number,
                  check: e.target.checked,
                })
              }
            />
          </Styled.FlexContainer>
        ))}

        <Styled.FlexContainer>
          <Button
            variant="outlined"
            aria-label="button-plus"
            onClick={() => handleResult("+")}
          >
            +
          </Button>
          <Button variant="outlined" onClick={() => handleResult("-")}>
            -
          </Button>
          <Button variant="outlined" onClick={() => handleResult("*")}>
            x
          </Button>
          <Button
            variant="outlined"
            aria-label="button-distribute"
            onClick={() => handleResult("/")}
          >
            /
          </Button>
        </Styled.FlexContainer>
        <Styled.FlexContainer>
          {/* <p className="results">HASIL:</p> */}
          <TextField
            // aria-label={`result`}
            value={result}
            disabled
            label="Hasil"
            variant="outlined"
            style={{ width: "80%" }}
            inputProps={{ "aria-label": `result` }}
          />
        </Styled.FlexContainer>
      </Styled.CenteringDiv>
    </Styled.MainContainer>
  );
};

export default Homepage;
