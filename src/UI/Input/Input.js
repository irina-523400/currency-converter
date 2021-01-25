import s from './Input.module.scss';

const Input = props => {

  const isInvalid = props => {
    const number = Number(props.value);
    return Number.isNaN(number) 
  };

  return (
    <div className={s.Input}>
      <input
        type="text"
        id={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      { isInvalid(props) 
        ? <span>Введите число</span>
        : null }

    </div>
  )
};

export {Input};