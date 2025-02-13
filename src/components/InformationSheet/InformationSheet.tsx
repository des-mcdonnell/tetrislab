import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

type InformationSheetProps = { onComplete: () => void };

export const InformationSheet = ({ onComplete }: InformationSheetProps) => {
  const handleContinue = () => {
    onComplete();
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <div>
          <Alert severity="warning">
            Please read all sections of this information sheet before
            continuing.
          </Alert>
        </div>
        <div>
          <Button
            variant="outlined"
            onClick={handleContinue}
            endIcon={<ArrowRightIcon />}
          >
            Continue
          </Button>
        </div>
      </Box>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            Project title and description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom={true}>
            Title of Project: &quot;TetrisLab: Exploring the Differential
            Effects of Interrupting 📢 and Distracting 👋 UI Notifications on
            Flow 🧘 and Performance 📈&quot;
          </Typography>

          <Typography gutterBottom={true}>
            You are invited to take part in research to investigate the impact
            of passive and active notifications on flow state and performance
            within the context of a task-based user interface (UI). This project
            is being undertaken by Des McDonnell for our major research project
            as part of the{" "}
            <a href="https://iadt.ie/courses/cyberpsychology/" target="_blank">
              MSc Cyberpsychology
            </a>
            ,{" "}
            <a href="https://iadt.ie/" target="_blank">
              IADT
            </a>
            .
          </Typography>
          <Typography>
            Before you decide whether you wish to take part, it is important for
            you to understand why this research is being done and what it will
            involve. Please take time to read this information carefully and
            discuss it with someone you trust. If there is anything that is
            unclear or if you would like more information please ask, our
            contact details are at the end of this information sheet. Thank you
            for reading this.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            What is the purpose of the project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          As digital information systems become more prevalent in our lives, the
          need to receive status updates and other forms of notifications from
          the applications we rely on has increased significantly. As autonomous
          AI agents become more prevalent, it is expected that this requirement
          will only increase. This study aims to investigate the impact of these
          notifications on flow state and the performance of primary cognitive
          tasks.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            Why are you being invited to take part?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          You are invited to participate in this study because you are a
          graduate student at IADT and as such meet the minimum age requirement
          of 18 years and have a competent level of computer literacy and
          familiarity with common UI patterns and conventions.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            What is involved?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>TODO: Add Pre-task here</p>
          <p>
            If you choose to proceed as a participant in this study you will be
            asked to complete a web-based experiment. You will be requested to
            play a game of Tetris (Primary Task). The score you achieve and the
            time taken to complete this task will be recorded and later
            analysed. If you are randomly selected to be part of one of two
            intervention cohorts, you will be exposed to interfering stimuli in
            the form of either a series of passive or active UI notifications.
            Passive notifications will temporarily appear onscreen and can be
            ignored while active notifications will require your attention and
            interaction.{" "}
            <span color="red">You will be provided with a demo</span> of the
            experiment and will be given the opportunity to practise prior to
            commencement and data capture. It is estimated that the task will
            take approximately <span color="red">20 minutes</span> to complete.
          </p>
          <p>TODO: Add Post-task here</p>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            Do I have to take part?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            You are free to decide whether you wish to take part or not. If you
            do decide to take part, you will be asked to sign a consent form
            that lets us know you have read this information sheet and
            understand what is involved in the research. You are free to
            withdraw from this study at any time and without giving reasons.
            Your decision to partake or abstain in this study will have no
            impact on your marks, assessments or future studies.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            What are the disadvantages and risks (if any) of taking part?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you choose to partake in this study you may be exposed to an
            abnormal amount and frequency of user interface notifications. It is
            acknowledged that this may result in short-term frustration which is
            expected to alleviate on completion of the experiment. If at any
            point throughout your involvement, you deem this frustration to be
            overwhelming, you may choose to{" "}
            <span color="red">skip specific parts of the task</span> or opt-out
            completely. You can do so by either closing your web browser or
            clicking on a provided <strong>&quot;Withdraw&quot;</strong> button.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            What are the possible benefits of taking part?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            While this study may not benefit you directly, the information
            gathered and findings established through analysis will help to
            increase the understanding of UI interference on flow state and task
            performance.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            How will my information be used?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Your performance on Tetris and your responses to stimuli presented
            during the experiment will be collected as assessed. No identifying
            information will be persisted as part of this study. These results
            will be aggregated with data from other participants and
            statistically analysed. The interpreted results will be presented in
            the final thesis for the MSc Cyberpsychology at the Dun Laoghaire
            Institute of Art, Design & Technology. This can be requested through
            the library at IADT, or by emailing the researcher or supervisor at{" "}
            <a href="mailto:N00236157@student.iadt.ie">
              N00236157@student.iadt.ie
            </a>{" "}
            and
            <a href="mailto:Liam.Challenor@iadt.ie">Liam.Challenor@iadt.ie</a>.
            This study may also be published in an academic journal article and
            may be written about for blog posts or media articles which can be
            requested from the researcher.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            How will my data be protected?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Under the EU General Data Protection Regulation (GDPR) the legal
            basis for collecting data for scholarly research is that of public
            interest. The regulations regarding the protection of your data will
            be followed. Only data which is needed for analysis will be
            collected. By giving your consent to take part in the study you are
            consenting to the use of your data as detailed in this information
            sheet. The data will be retained by the researcher for at least one
            year and may be retained for up to 7 years if the results of the
            study are published in certain capacities (e.g. in a journal
            article). There is also a possibility that the fully anonymised
            dataset may be submitted to a journal and made available to other
            researchers and academics worldwide for verification purposes, but
            if this occurs it will be ensured that you are not identifiable from
            the data.
          </p>

          <p>
            As the supervisor on this project, I, Dr Liam Challenor, am
            responsible for ensuring that all datasets will be stored in
            accordance with GDPR regulations and those which are not submitted
            to a journal will be fully deleted on or before{" "}
            <span color="red">April 30th 2032</span>.
          </p>

          <p>
            Throughout the study and during the thesis evaluation period data
            collected will be accessible to the researcher, Des McDonnell and
            supervisor, Dr Liam Challenor only. While participants are
            completing the study, data will be stored in a cloud-based database.
            On completion, data will be exported and stored in encrypted form on
            password-protected computers only. If a data breach occurs at any
            point, the data protection officer in IADT will be informed
            immediately. All data collected and stored will be fully anonymous
            with no identifiable properties. On or before the
            <span color="red">30th of April 2032</span>, copies of data held by
            the researcher and supervisor will be fully deleted. You will find
            contact information for IADT&apos;s Data Protection Officer, Mr
            Bernard Mullarkey, and more information on your rights concerning
            your data at
            <a href="https://iadt.ie/about/your-rights-entitlements/gdpr/">
              https://iadt.ie/about/your-rights-entitlements/gdpr/
            </a>
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            Who has reviewed the study?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            This study has been approved by the IADT Psychology Ethics
            Committee.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color="primary" component="span" fontWeight={700}>
            What if you have any questions or there is a problem?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            If you have a concern about any aspect of this study, you may wish
            to speak to the researcher who will do their best to answer your
            questions.
          </p>

          <p>
            You should contact Des McDonnell via email at{" "}
            <a href="mailto:N00236157@student.iadt.ie">
              N00236157@student.iadt.ie
            </a>
            or their supervisor Dr Liam Challenor at{" "}
            <a href="mailto:Liam.Challenor@iadt.ie">Liam.Challenor@iadt.ie</a>.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            color="primary"
            align="left"
            component="span"
            fontWeight={700}
          >
            Thank you
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Thank you for taking the time to read this information sheet and for
            your involvement in this study should you choose to participate.
          </p>
        </AccordionDetails>
      </Accordion>

      <p>12th February 2025</p>
    </>
  );
};
