//packages
import React from "react";
import { Skeleton, Grid, Stack } from "@chakra-ui/react";

export default function ProductLoadingIndicator() {
  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={1} maxW={"7xl"} margin={"auto"} mt={7}>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
        <Stack>
          <Skeleton height="200px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
          <Skeleton height="20px" width="250px" />
        </Stack>
      </Grid>
    </div>
  );
}
