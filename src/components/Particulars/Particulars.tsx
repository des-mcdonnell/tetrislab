import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { StepAction } from "@/components/StepAction/StepAction";
import { useStepperContext } from "@/state/StepperContext";

import {
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
  PARTICULARS_DATA,
} from "@/data/particulars";

import { generateAgeOptions } from "./helpers/generateAgeOptions";

import { RequirementsType } from "@/types";

export const Particulars = () => {
  const { dispatch } = useTetrisLabContext();
  const { step, nextStep } = useStepperContext();

  const [isValid, setIsValid] = useState(false);
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [requirements, setRequirements] = useState<(RequirementsType | null)[]>(
    new Array(PARTICULARS_DATA.length).fill(null)
  );

  const handleChange = (id: number, index: number) => {
    setRequirements((prev) => {
      const newArr = [...prev];
      newArr[index] = {
        id,
        response: true,
      };
      return newArr;
    });
  };

  useEffect(() => {
    const isValid =
      age !== "" &&
      gender !== "" &&
      requirements.every((requirement) => requirement);

    setIsValid(isValid);
  }, [age, gender, requirements]);

  const handleOnComplete = () => {
    dispatch({ type: "ADD_PARTICULARS", gender, age, requirements });
    nextStep();
  };

  return (
    <>
      <StepAction
        title={`Step ${step} - ${ACTION_TITLE}`}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={handleOnComplete}
        isValid={isValid}
      />
      <Typography component="h2" variant="h5" color="primary" sx={{ mb: 2 }}>
        Demographics
      </Typography>
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <List>
            <ListItem
              sx={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <FormControl
                sx={{
                  width: "350px",
                }}
              >
                <FormControlLabel
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  control={
                    <Select
                      required
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      autoWidth
                      sx={{ width: "200px" }}
                      color="secondary"
                      displayEmpty
                      data-cy="select-gender"
                    >
                      <MenuItem value="">Select Gender</MenuItem>
                      <MenuItem value="Male" data-cy="option-gender-male">
                        Male
                      </MenuItem>
                      <MenuItem value="Female" data-cy="option-gender-female">
                        Female
                      </MenuItem>
                      <MenuItem
                        value="Non-Binary"
                        data-cy="option-gender-non-binary"
                      >
                        Non-Binary
                      </MenuItem>
                      <MenuItem
                        value="Prefer not to say"
                        data-cy="option-gender-not-say"
                      >
                        Prefer not to say
                      </MenuItem>
                    </Select>
                  }
                  label="Gender"
                  labelPlacement="start"
                />
              </FormControl>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                width: "400px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControl
                sx={{
                  width: "350px",
                }}
              >
                <FormControlLabel
                  sx={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  control={
                    <Select
                      required
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      autoWidth
                      sx={{ width: "200px" }}
                      color="secondary"
                      displayEmpty
                      data-cy="select-age"
                    >
                      <MenuItem value="">Select Age</MenuItem>
                      {generateAgeOptions()}
                    </Select>
                  }
                  label="Age"
                  labelPlacement="start"
                />
              </FormControl>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Typography component="h2" variant="h5" color="primary" sx={{ mb: 2 }}>
        Requirements
      </Typography>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <List>
            {PARTICULARS_DATA.map(({ id, text }, index) => (
              <ListItem key={id}>
                <FormControl>
                  <FormControlLabel
                    required
                    control={
                      <Checkbox
                        onChange={() => handleChange(id, index)}
                        color="secondary"
                      />
                    }
                    label={text}
                    labelPlacement="start"
                  />
                </FormControl>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </>
  );
};
