import styles from "./page.module.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from '././pages/Hello'; // make sure to import the Hello component

export default function Home() {
  return (
    <Hello />
  );
}
