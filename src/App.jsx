import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import BlogPost from './components/blog-post.jsx'
import { ScrollToTop } from './components/scroll-to-top.jsx'
import './index.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
