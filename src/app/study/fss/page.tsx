"use client";

import { PageContainer } from "@toolpad/core/PageContainer";

import { StudyHeader } from "@/components/StudyHeader/StudyHeader";
import { Stepper } from "@/components/Stepper/Stepper";
import { FSS } from "@/components/FSS/FSS";

import { studySteps } from "@/constants";

import { useTetrisLabContext } from "@/state/TetrisLabContext";

export default function FSSPage() {
  const { step, nextStep } = useTetrisLabContext();

  const handleOnComplete = () => {
    // TODO: Persist fss data here
    nextStep();
  };

  return (
    <>
      <PageContainer
        title=""
        slots={{
          header: () => (
            <StudyHeader
              breadcrumbs={[{ title: "Pilot Study", path: "/study" }]}
            />
          ),
        }}
      >
        <Stepper steps={studySteps} activeStep={step} />
        <FSS onComplete={handleOnComplete} />
      </PageContainer>
    </>
  );
}
