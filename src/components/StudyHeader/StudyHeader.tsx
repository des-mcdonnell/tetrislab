import { Typography, Breadcrumbs, Link, Box } from "@mui/material";

import Title from "@/components/Title/Title";

type StudyHeaderProps = {
  title: string;
};

export const StudyHeader = ({ title }: StudyHeaderProps) => {
  return (
    <Box sx={{ py: 2 }}>
      <Breadcrumbs>
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <Title variant="h4" />
        </span>

        <Typography variant="h4" color="white">
          {title}
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
