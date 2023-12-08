import React from 'react';
import Link from 'next/link';
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";
import Footer from "./Footer";

function CreditCardList({ creditCards }) {
  return (
    <ol>
      {creditCards.map((card) => (
        <li key={card.id}>
          <Link href={`/credit-cards/${card.id}`}>
            {card.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}

function HomePage({ creditCards }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <NavbarLateral />
        <div className="tarjetas">
          <h1>Tarjetas de Crédito</h1>
          <CreditCardList creditCards={creditCards} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const creditCards = [
    { id: '4798-2011-8481-4822', name: 'Tarjeta de Débito' },
    { id: '4213-7178-4718-6503', name: 'Tarjeta de Crédito' },
  ];

  return {
    props: { creditCards },
  };
}

export default HomePage;
