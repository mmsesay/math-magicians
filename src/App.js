import { Calculator } from './components/Calculator';

const App = () => (
  <div className="App">
    <head>
      <link
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css"
          rel="stylesheet"/>
    </head>
    <main className="bg-gray-600 h-screen flex items-center justify-center">
      <Calculator />
    </main>
  </div>
);

export default App;
