import { ZustandStateActions } from "@/lib/zustand";
import { create } from "zustand";
import {
  AddressInfoFormData,
  PersonalInfoFormData,
} from "../../../(opportunity-list)/store/use-form-store";

type stateType = {
  currentStep: number;
  personalInfo: PersonalInfoFormData | null;
  addressInfo: AddressInfoFormData | null;
};

type storeType = stateType &
  Required<Pick<ZustandStateActions<stateType>, "setValues">> & {
    resetForm: () => void;
  };

const orginalState: stateType = {
  currentStep: 1,
  personalInfo: null,
  addressInfo: null,
};

const useFormStoreOppo = create<storeType>((set) => ({
  ...orginalState,
  setValues: (values) => set((state) => ({ ...state, ...values })),
  resetForm: () => set(orginalState),
}));

export default useFormStoreOppo;
