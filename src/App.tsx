import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
export default App