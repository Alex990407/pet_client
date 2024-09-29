import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* Шапка страницы */}
      <header className="home-header">
        <h1>Добро пожаловать на главную страницу!</h1>
        <p>Описание или слоган вашего приложения</p>
      </header>

      {/* Основное содержание страницы */}
      <main className="home-content">
        <section className="featured-section">
          <h2>Основной раздел</h2>
          <p>
            Здесь можно разместить какую-то важную информацию, новости или
            главные функции вашего приложения.
          </p>
        </section>

        <section className="additional-info">
          <h2>Дополнительная информация</h2>
          <p>Другие разделы или ссылки на интересные страницы.</p>
        </section>
      </main>

      {/* Подвал страницы */}
      <footer className="home-footer">
        <p>© {new Date().getFullYear()} Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Home;
