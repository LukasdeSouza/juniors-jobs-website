import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";

import "../../styles/global.css";

const JobsRegister = ({ onClick }) => {
  return (
    <Stack alignItems={"center"}>
      <Box
        sx={{
          width: 790,
          height: 130,
          mb: 2,
          backgroundColor: "var(--white-scale-300)",
          borderRadius: 2,
          boxShadow: "var(--bs-shadow-100)",
          textAlign: "center",
        }}
      >
        <br />
        Filters 👷🚧
        <br />
        Em construção
        <br />
        {/* <Button
          variant="contained"
          onClick={onClick}
          sx={{ backgroundColor: "var(--blue-scale-300)" }}
        >
          <Typography variant sx={{ color: "var(--white-scale-100)" }}>
            Adicionar nova Vaga
          </Typography>
        </Button> */}
      </Box>
    </Stack>
  );
};

export default JobsRegister;
