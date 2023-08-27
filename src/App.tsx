import { QueryClient, QueryClientProvider } from "react-query";
import DevicesList from "./components/pages/index/DevicesList";
import "./App.css";
import { Layout } from "./components/Layout";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Software Update Service
        </h1>
        <DevicesList />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
