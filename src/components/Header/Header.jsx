import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img className="mb-8 w-44 h-44" src={logo} alt="A canvas" />
      <h1 className="text-4xl font-semibold tracking-wider text-center uppercase text-amber-800 font-title">ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
