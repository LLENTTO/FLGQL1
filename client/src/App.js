import Header from "./components/Header";
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import { useDarkMode } from "./utils/darkModeContext";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming){
            return incoming;
          }
        },
        projects: {
          merge(existing, incoming){
            return incoming;
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

function App() {
  const { darkMode } = useDarkMode(); // Destructure `darkMode` from the context

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#f8f9fa", // Dark or light background
        color: darkMode ? "#ffffff" : "#000000", // Dark or light text color
        minHeight: "100vh", // Ensure full-page background
        transition: "background-color 0.3s ease, color 0.3s ease", // Smooth transition
      }}
    >
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:id" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;

