import MainButton from "@/components/UI/buttons/mainButton";
import { Stack } from "@mui/material";
import Address from "./address/Address";
import AgentCode from "./agentCode/AgentCode";
import BranchCode from "./branchCode/BranchCode";
import Provinces_City from "./province_city/provinces";
import { IStepTwoProps } from "./stepTwo.types";
const StepTwo = ({ confirmFormHandleSubmit, formik }: IStepTwoProps) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={2}
      bgcolor="white"
      paddingX={4}
      paddingY={4}
    >
      <Stack width={275} gap={2}>
        <AgentCode formik={formik} />
        <Provinces_City formik={formik} />
        <Address formik={formik} />
        <BranchCode formik={formik} />

        <MainButton
          variant="contained"
          fullWidth
          size="baseMd"
          color="info"
          onClick={confirmFormHandleSubmit}
        >
          ادامه
        </MainButton>
      </Stack>
    </Stack>
  );
};
export default StepTwo;
