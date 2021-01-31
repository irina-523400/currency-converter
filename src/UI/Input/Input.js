import s from './Input.module.scss';

const Input = props => {

  return (
    <div className={s.Input}>
      <input
        type="text"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
      { props.isInvalid
        ? <span>Введите число</span>
        : null }

    </div>
  )
};

export {Input};