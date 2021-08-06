import { useContext } from "react";
import Operation from "../../additional/Operation";
import SettingsCtx from "../../additional/SettingsCtx";
import Divide from "./Divide";
import Multiply from "./Multiply";
import Subtract from "./Subtract";
import Summ from "./Summ";

function Settings() {
  const operation = useContext(SettingsCtx).operation;
  const chooseSetting = () => {
    switch (operation) {
      case Operation.SUMM:
        return <Summ />
      case Operation.SUBTRACT:
        return <Subtract />
      case Operation.MULTIPLY:
        return <Multiply />
      case Operation.DIVIDE:
        return <Divide />
      default:
        break;
    }
  }
  return <>
    <h1 className='title'>Настройки</h1>
    {chooseSetting()}
    </>
}

export default Settings;