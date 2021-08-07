import { useContext } from "react";

import SettingsCtx from "../../additional/SettingsCtx";
import RangeInput from "../RangeInput";

function Summ() {
  const numbersInFirstMember = useContext(SettingsCtx).numbersInFirstMember;
  const numbersInSecondMember = useContext(SettingsCtx).numbersInSecondMember;

  return <>
    <div className='level is-mobile'>
      <div className='level-item has-text-centered'>
        <h2 className='title is-4'>
          Сложение
        </h2>
      </div>
    </div>
    <div className="tags has-addons">
      <span className="tag is-grey is-large">Число цифр в первом слагаемом</span>
      <RangeInput minimum={1} maximum={3}
        current={numbersInFirstMember}
        classes={['is-small']}
      />
    </div>
    <div className="tags has-addons">
      <span className="tag is-grey is-large">Число цифр во втором слагаемом</span>
      <RangeInput minimum={1} maximum={3}
        current={numbersInSecondMember}
        classes={['is-small']}
      />
    </div>
    </>
};

export default Summ;