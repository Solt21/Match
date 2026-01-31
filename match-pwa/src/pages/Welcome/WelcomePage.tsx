export function WelcomePage() {
  return (
    <div className="welcome">
      <div className="cards">
        <div className="card left" />
        <div className="card right" />
        <div className="match">80</div>
        <div className="bubble top">Привет!</div>
        <div className="bubble bottom">Может встретимся?</div>
      </div>

      <h1>Найди свою половинку</h1>
      <p className="terms">
        Создавая аккаунт, вы принимаете Условия соглашения и Политику
        конфиденциальности
      </p>

      <button className="btn primary">Войти по номеру</button>
      <button className="btn google">Войти через Google</button>
      <button className="btn apple">Войти через Apple</button>
    </div>
  );
}
