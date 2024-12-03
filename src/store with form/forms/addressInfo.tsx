import { Button } from "@/components/ui/button/button";
import useFormStoreOppo from "../../store/use-form-store";

export function AddressInfoFormOppo() {
  const { currentStep, setValues } = useFormStoreOppo((store) => ({
    currentStep: store.currentStep,
    setValues: store.setValues,
  }));

  const handleSubmit = () => {};
  function handlePrevious() {
    setValues({ currentStep: currentStep - 1 });
  }

  return (
    <div>
      Address Info Form
      <form onSubmit={handleSubmit}>
        <Button variant="outline" onClick={handlePrevious}>
          Previous
        </Button>
      </form>
    </div>
  );
}
