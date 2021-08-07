import RangeInput from "../RangeInput";

function Summ() {
  return <>
    <div className='level is-mobile'>
      <div className='level-item has-text-centered'>
        <h2 className='title is-4'>
          Сложение
        </h2>
      </div>
    </div>
    <RangeInput minimum={1} maximum={3} current={1} />
    </>
};

export default Summ;