import { Box, Paper, Stack, Typography } from "@mui/material"

const CardResult = () => {
  return (<>
    <Paper elevation={4}>
      <Stack direction="row" alignItems="center" justifyContent="space-around" padding={2}>
        <Box>
          <Typography fontWeight={700}>Date</Typography>
          <p>2020/02/10</p>
        </Box>
        <Box>
          <Typography fontWeight={700}>Customer:</Typography>
          <p>Pepito Juan Lopez</p>
        </Box>
        <Box>
          <Typography fontWeight={700}>Total</Typography>
          <Typography fontWeight={700}>$40.000</Typography>
        </Box>
      </Stack>
    </Paper>
  </>)
}

export default CardResult