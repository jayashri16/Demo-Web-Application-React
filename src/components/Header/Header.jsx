import "../Header/Header.css";
const names = ["Happy coming", "welcome"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
 function Header() {
  const people = names[genRandomInt(1)];
  return (
    <header>
      <h1> Hello, what do you want to learn </h1>
      <p>
        {people} !!! Thank you for visiting us! We hope you
        find what you're looking for and that you enjoy your stay!!!
      </p>
      
    </header>
  );
}
export default Header;