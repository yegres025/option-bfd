import './form-wrapper.css';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface FormWrapperProps {
  children: React.ReactNode;
  disabled: boolean;
  direction?: FlexDirection;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
}

const defaultFlexDirection = 'row';

export default function FormWrapper({
  children,
  disabled,
  direction = defaultFlexDirection,
  onSubmit,
}: FormWrapperProps) {
  return (
    <form
      onSubmit={onSubmit}
      style={{ flexDirection: direction }}
      className='form-wrapper'
    >
      {children}
      <button className='form-wrapper-button' disabled={disabled}>
        {!disabled ? '✔' : null}
      </button>
    </form>
  );
}
