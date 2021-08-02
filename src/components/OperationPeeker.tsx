
function OperatorPeeker() {
  return (
    <div className="OperatorPeeker">
      <nav className="panel">
        <p className="panel-block">
          <div className="">
            Настройки
          </div>
        </p>
        <p className="panel-tabs">
          <a className="is-active">Сложение</a>
          <a>Вычитание</a>
          <a>Умножение</a>
          <a>Деление</a>
        </p>
        <div className="panel-block">
          settings
        </div>
        <div className="panel-block">
          <button className="button is-primary is-outlined is-fullwidth">
            Начало
          </button>
        </div>
      </nav>
    </div>
  )
};

export default OperatorPeeker;