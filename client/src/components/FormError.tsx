import { FieldError } from "react-hook-form";

const FormError = ({ error }: { error: FieldError | undefined }) => {
  return (
    error && (
      <div className="label">
        <span className="label-text-alt text-error">{error.message}</span>
      </div>
    )
  );
};
export default FormError;
