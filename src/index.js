import ReactDOM from 'react-dom/client'; // Nhập createRoot
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root")); // Tạo root
root.render(<App />); // Render component
