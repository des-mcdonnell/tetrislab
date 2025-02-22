import { useState } from "react";

import {
  Alert,
  Card,
  CardHeader,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { StepAction } from "@/components/StepAction/StepAction";
import { useTetrisLabContext } from "@/state/TetrisLabContext";
import {
  INFORMATION_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/information-sheet";

export const InformationSheet = () => {
  const { dispatch, step, nextStep, isMobile } = useTetrisLabContext();

  const [isValid, setIsValid] = useState(false);

  const handleOnComplete = () => {
    dispatch({ type: "ADD_INFO_SHEET", infoSheet: isValid });
    nextStep();
  };

  return (
    <>
      {isMobile && (
        <Alert variant="filled" severity="warning" sx={{ mt: 2, mb: 4 }}>
          This study must be conducted on a desktop computer.
        </Alert>
      )}

      {!isMobile && (
        <StepAction
          title={`Step ${step + 1} - ${ACTION_TITLE}`}
          info={ACTION_INFO}
          label={ACTION_LABEL}
          onAction={handleOnComplete}
          isValid={isValid}
        />
      )}

      {INFORMATION_DATA.map(({ id, title, content }) => (
        <Card key={id} sx={{ mb: 4, p: 0 }}>
          <CardHeader title={title} sx={{ color: "primary.main" }} />
          <CardContent>{content}</CardContent>
        </Card>
      ))}
      {!isMobile && (
        <Card sx={{ mb: 4, py: 2 }}>
          <FormGroup sx={{ alignItems: "flex-start" }}>
            <FormControlLabel
              required
              control={
                <Checkbox
                  color="secondary"
                  onChange={() => setIsValid((prev) => !prev)}
                />
              }
              label="I have read all sections of this information sheet"
              labelPlacement="start"
            />
          </FormGroup>
        </Card>
      )}
      {isMobile && (
        <Alert variant="filled" severity="warning" sx={{ mb: 2 }}>
          This study must be conducted on a desktop computer.
        </Alert>
      )}
    </>
  );
};
