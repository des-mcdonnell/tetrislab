import { useState } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import { StepAction } from "@/components/StepAction/StepAction";

import {
  DEBRIEF_DATA,
  ACTION_TITLE,
  ACTION_INFO,
  ACTION_LABEL,
} from "@/data/debrief";

type DebriefProps = {
  onComplete: () => void;
};

export const Debrief = ({ onComplete }: DebriefProps) => {
  const [isValid, setIsValid] = useState(false);
  return (
    <>
      <StepAction
        title={ACTION_TITLE}
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={isValid}
      />

      {DEBRIEF_DATA.map(({ id, title, content }) => (
        <Card key={id} sx={{ mb: 4, p: 2, pb: 0 }}>
          <CardHeader title={title} sx={{ color: "primary.main" }} />
          <CardContent>
            {content.map(({ id, text }) => (
              <Typography key={id} sx={{ mb: 2 }}>
                {text}
              </Typography>
            ))}
          </CardContent>
        </Card>
      ))}

      <FormGroup sx={{ alignItems: "flex-end" }}>
        <FormControlLabel
          required
          control={
            <Checkbox
              color="secondary"
              onChange={() => setIsValid((prev) => !prev)}
            />
          }
          label="I have read all sections of this debrief sheet"
          labelPlacement="start"
        />
      </FormGroup>

      <StepAction
        info={ACTION_INFO}
        label={ACTION_LABEL}
        onAction={onComplete}
        isValid={isValid}
      />
    </>
  );
};
