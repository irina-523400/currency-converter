import classes from './Select.module.scss';

const Select = ({
  onChange,
  id,
  defaultValue,
  options
}) => {
  return(
    <div className={classes.Select}>
      <select
        onChange={onChange}
        id={id}
        defaultValue={defaultValue}
      > 
      <option value={defaultValue} disabled>Выберите валюту</option>
        { options.map((option, index) => {
          
          return (
            <option 
              key={option.value + index}
              value={option.value}
            >
              {option.text}
            </option>
          )
        }) }
      </select>
    </div>
  )
};

export {Select};