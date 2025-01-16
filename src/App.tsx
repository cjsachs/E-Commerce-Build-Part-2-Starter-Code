import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import { Provider } from "react-redux"
import store from "./redux/store"
import ShoppingCart from "./components/ShoppingCart"

const queryClient = new QueryClient()

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<ShoppingCart/>}/>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}
export default App