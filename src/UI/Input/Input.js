import classes from './Input.module.scss';

const Input = ({
  id,
  value,
  onChange,
  isInvalid
}) => {
  return(
    <div className={classes.Input}>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
      { isInvalid
        ? <span>Введите число</span>
        : null }
    </div>
  )
};

export {Input};