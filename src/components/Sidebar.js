const Sidebar = () => {
  return (
    <>
      <h2 className="my-3 text-white">Company name</h2>
        <div className="pt-3">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Customers
              </a>
            </li>
          </ul>
        </div>
    </>
  )
}

export default Sidebar