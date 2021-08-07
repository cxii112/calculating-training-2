import React, { createContext } from 'react';
import Operation from './Operation';
import SettingsProps from './SettingsProps';

const SettingCtx = createContext<SettingsProps>(
  {
    operation: Operation.SUMM,
    numbersInFirstMember: 1,
    numbersInSecondMember: 1
  }
)


export default SettingCtx;