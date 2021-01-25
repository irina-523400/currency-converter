import s from './Select.module.scss';

const Select = props => {

  return (
    <div className={s.Select}>
      <select
        onChange={props.onChange}
        id={props.name}
      >
        { props.options.map((option, index) => {
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