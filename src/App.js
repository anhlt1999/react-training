import './styles.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark min-height-100vh">
          <Sidebar />
        </div>
        <main className="col-md-10">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}
