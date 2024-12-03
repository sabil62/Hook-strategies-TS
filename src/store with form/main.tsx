import React from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs";
import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { StepIcon } from "../../../(opportunity-list)/utils/step-tracker";
import useFormStoreOppo from "../store/use-form-store";
import { AddressInfoFormOppo } from "./sections/address-info-oppo";
import { PersonalInfoFormOppo } from "./sections/personal-info-oppo";
import { useMyDetail } from "@/hooks/data/employee";

const tabKeyToStep = {
  personalInfo: 1,
  addressInfo: 2,
} as const;

type TabKeys = keyof typeof tabKeyToStep;

const tabStepToKey: Record<number, TabKeys> = {
  1: "personalInfo",
  2: "addressInfo",
};

const componentMap: Record<TabKeys, React.FC<{ closeDiaglog?: () => void }>> = {
  personalInfo: PersonalInfoFormOppo,
  addressInfo: AddressInfoFormOppo,
};

export function AddNewOpportunity() {
  const { currentStep } = useFormStoreOppo();
  const { data: myDetail } = useMyDetail();
  console.log(myDetail);

  return (
    <Tabs
      className="items-start gap-8"
      defaultValue="personalInfo"
      value={tabStepToKey[currentStep]}
    >
      <TabsList>
        {Object.entries(tabKeyToStep).map(([key, value], index) => {
          return (
            <React.Fragment key={index}>
              {index > 0 && (
                <div
                  className={cn("mb-8 h-0.5 w-full bg-gray-200", {
                    "bg-blue-500": currentStep >= value,
                  })}
                ></div>
              )}
              <TabsTrigger
                value={key}
                className={cn(
                  "relative flex h-fit w-full flex-row items-center border-none",
                  {
                    "border-blue-500": currentStep === value,
                  }
                )}
              >
                <StepIcon
                  step={value}
                  currentStep={currentStep}
                  text={`Step ${value}`}
                />
              </TabsTrigger>
            </React.Fragment>
          );
        })}
      </TabsList>
      {Object.entries(tabKeyToStep).map(([key]) => {
        const Comp = componentMap[key as TabKeys];
        return (
          <TabsContent
            key={key}
            value={key}
            className="h-[150px] min-h-[150px]"
          >
            <Comp />
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
